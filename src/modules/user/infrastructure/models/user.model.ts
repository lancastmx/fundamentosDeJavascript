import { Schema, model, type Document } from 'mongoose';
import bcrypt from 'bcrypt';
import type { UserProfile } from '../../domain/user-profile.model.js'; 

interface IUserDocument extends Document {
  email: string;
  passwordHash: string;
  profile: UserProfile;
  role: string;
}

const UserSchema = new Schema<IUserDocument>({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  // Definimos la estructura interna para que no se guarden fuera
  profile: {
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
    avatarUrl: { type: String }
  },
  role: { type: String, default: 'SELLER' }
});

UserSchema.pre<IUserDocument>('save', async function () {
  if (!this.isModified('passwordHash')) return;
  const salt = await bcrypt.genSalt(10);
  this.passwordHash = await bcrypt.hash(this.passwordHash, salt);
});

export const UserModel = model<IUserDocument>('User', UserSchema);