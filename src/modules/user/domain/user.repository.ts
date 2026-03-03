import bcrypt from 'bcrypt'; 
import { UserModel } from '../infrastructure/models/user.model.js';
import type { User } from './user.entity.js';

export class UserRepository {
  async save(user: User): Promise<void> {
    const profileData = user.profile;
    
    // 🛡️ Encriptamos aquí para evitar problemas con los hooks de Mongoose
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(user.passwordHash, salt);

    await UserModel.updateOne(
      { email: user.email },
      { 
        $set: { 
          email: user.email,
          passwordHash: encryptedPassword, // Guardamos el hash real
          profile: {
            firstName: profileData.firstName,
            lastName: profileData.lastName,
            phoneNumber: profileData.phoneNumber,
            avatarUrl: profileData.avatarUrl
          },
          status: user.getStateName(),
          role: 'SELLER'
        }
      },
      { upsert: true }
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    const userDoc = await UserModel.findOne({ email });
    return null; 
  }
}