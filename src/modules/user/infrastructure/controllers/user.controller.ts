import type { Request, Response } from 'express';
import { User } from '../../domain/user.entity.js';
import { UserRepository } from '../../domain/user.repository.js';

export class UserController {
  private repository = new UserRepository();

  async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, profile } = req.body;

      // 1. Creamos la entidad (El cerebro con lógica de Prayser)
      const newUser = new User(
        crypto.randomUUID(), // ID temporal
        email,
        password,
        profile
      );

      // 2. Usamos el repositorio (El traductor que ya configuramos)
      await this.repository.save(newUser);

      res.status(201).json({
        message: "✅ Usuario registrado con éxito en Prayser",
        user: { email: newUser.email, profile: newUser.profile }
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}