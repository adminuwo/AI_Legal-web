import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  const db = mongoose.connection.db;

  const nonIndiaCountries = ['Albania', 'Guyana', 'Liberia', 'Kenya', 'South Africa', 'Philippines', 'United Kingdom', 'Nepal', 'Iran', 'China'];
  const users = await db.collection('users').find({
    country: { $in: nonIndiaCountries }
  }).toArray();

  console.log(`Found ${users.length} users with non-India countries:`);
  users.forEach(u => {
    console.log({
      name: u.name || u.fullName,
      email: u.email,
      phone: u.phone,
      country: u.country,
      countryCode: u.countryCode,
      legalJurisdiction: u.legalJurisdiction,
      deviceOS: u.deviceOS,
      signupPlatform: u.signupPlatform,
      provider: u.provider,
      createdAt: u.createdAt
    });
  });

  process.exit(0);
}

run().catch(console.error);
