import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  const db = mongoose.connection.db;

  const res = await db.collection('appinstalls').aggregate([
    { $match: { installId: { $regex: '^ga4_uninst' } } },
    { $group: { _id: '$country', count: { $sum: 1 } } }
  ]).toArray();
  console.log('ga4_uninst breakdown:', res);

  const allTypes = await db.collection('appinstalls').aggregate([
    {
      $group: {
        _id: {
          country: '$country',
          isUser: { $ne: ['$userId', null] },
          idPrefix: { $substr: ['$installId', 0, 10] }
        },
        count: { $sum: 1 }
      }
    },
    { $sort: { '_id.country': 1, count: -1 } }
  ]).toArray();
  console.log('All types breakdown:', JSON.stringify(allTypes, null, 2));

  process.exit(0);
}

run().catch(console.error);
