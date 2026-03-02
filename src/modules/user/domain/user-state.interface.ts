import type { User } from './user.entity.js';

export interface UserState {
  getName(): string;
  activate(user: User): void;
  suspend(user: User): void;
}