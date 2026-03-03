export interface IUserProps {
  email: string;
  passwordHash: string;
  role: string;
  lastEmailChangeAt?: Date;
}