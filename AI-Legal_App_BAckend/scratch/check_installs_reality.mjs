import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function check() {
  await mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI);
  console.log('Connected to DB');
  const AppInstall = mongoose.model('AppInstall', new mongoose.Schema({}, { strict: false }));
  const User = mongoose.model('User', new mongoose.Schema({}, { strict: false }));
  
  const totalInstalls = await AppInstall.countDocuments();
  const totalUsers = await User.countDocuments();
  console.log('Total AppInstalls in DB:', totalInstalls);
  console.log('Total Users in DB:', totalUsers);

  const mobileInstalls = await AppInstall.countDocuments({ platform: { $in: ['android', 'ios'] } });
  const mobileWithUser = await AppInstall.countDocuments({ platform: { $in: ['android', 'ios'] }, userId: { $ne: null } });
  const mobileWithoutUser = await AppInstall.countDocuments({ platform: { $in: ['android', 'ios'] }, userId: null });
  const webUsers = await AppInstall.countDocuments({ platform: 'web' });
  const webWithUser = await AppInstall.countDocuments({ platform: 'web', userId: { $ne: null } });
  console.log({ mobileInstalls, mobileWithUser, mobileWithoutUser, webUsers, webWithUser });

  // Group installs by date (YYYY-MM-DD in IST)
  const installsByDate = await AppInstall.aggregate([
    {
      $project: {
        dateIST: {
          $dateToString: {
            date: '$installedAt',
            timezone: '+05:30',
            format: '%Y-%m-%d'
          }
        },
        platform: 1,
        source: 1,
        userId: 1
      }
    },
    {
      $group: {
        _id: '$dateIST',
        count: { $sum: 1 },
        withUser: { $sum: { $cond: [{ $ne: ['$userId', null] }, 1, 0] } },
        withoutUser: { $sum: { $cond: [{ $eq: ['$userId', null] }, 1, 0] } }
      }
    },
    { $sort: { _id: -1 } },
    { $limit: 10 }
  ]);
  console.log('Installs by Date (IST):', JSON.stringify(installsByDate, null, 2));

  // Also check User creations by date
  const usersByDate = await User.aggregate([
    {
      $project: {
        dateIST: {
          $dateToString: {
            date: '$createdAt',
            timezone: '+05:30',
            format: '%Y-%m-%d'
          }
        }
      }
    },
    {
      $group: {
        _id: '$dateIST',
        count: { $sum: 1 }
      }
    },
    { $sort: { _id: -1 } },
    { $limit: 10 }
  ]);
  console.log('Users created by Date (IST):', JSON.stringify(usersByDate, null, 2));

  await mongoose.disconnect();
}
check().catch(console.error);
