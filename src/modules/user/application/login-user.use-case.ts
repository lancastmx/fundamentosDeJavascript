import { AuthService } from '../../auth/application/auth.service.js';

export class LoginUserUseCase {
  private authService = new AuthService();

  async execute(input: { email: string; passwordRaw: string }) {
    console.log(`[LoginUseCase] Validando credenciales para: ${input.email}`);

    // 1. Simulación de validación (En el futuro: buscar en DB y comparar Hash)
    // Por ahora, aceptamos cualquier password para este usuario
    if (input.email !== "lanca@kyclops.com") {
      throw new Error("Usuario no encontrado o contraseña incorrecta");
    }

    // 2. Generar Sesión OAuth2
    // Aquí recuperamos los datos que guardamos en el registro
    const session = this.authService.generateTokens({
      userId: "u-641c", // Vendría de la DB
      role: "OWNER",    // Vendría de la Membership
      orgId: "o-9eb2"   // Vendría de la Organization
    });

    return {
      status: "success",
      ...session
    };
  }
}