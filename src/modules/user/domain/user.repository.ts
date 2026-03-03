import { UserModel } from '../infrastructure/models/user.model.js';
import type { User } from './user.entity.js';

export class UserRepository {
  /**
   * Guarda o actualiza un usuario del dominio en la base de datos.
   */
  async save(user: User): Promise<void> {
    const profileData = user.profile; // Obtenemos el perfil real del cerebro

    await UserModel.updateOne(
      { email: user.email }, // Criterio de búsqueda
      { 
        // No enviamos passwordHash aquí si ya existe, para no sobreescribir con texto plano
        profile: {
          firstName: profileData.firstName,
          lastName: profileData.lastName,
          phoneNumber: profileData.phoneNumber,
          avatarUrl: profileData.avatarUrl
        },
        status: user.getStateName(),
        role: 'SELLER' // Valor por defecto para Massive
      },
      { upsert: true } // Si no existe, lo crea. Si existe, lo actualiza.
    );
  }

  async findByEmail(email: string): Promise<User | null> {
    // Aquí luego implementaremos la lógica para convertir de DB a Clase User
    return null; 
  }
}