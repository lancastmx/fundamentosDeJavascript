import { connectDB } from './infrastructure/database.js';
import { UserModel } from './modules/user/infrastructure/models/user.model.js';
import mongoose from 'mongoose';

async function testPrayser() {
  await connectDB();
  try {
    const user = new UserModel({
      email: "admin@prayser.com", // Email del proyecto actual
      passwordHash: "password123",
      profile: {
        firstName: "Admin",
        lastName: "Prayser"
      }
    });

    await user.save();
    console.log("✅ Usuario de Prayser guardado correctamente.");
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

testPrayser();