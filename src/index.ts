import { RegisterUserUseCase } from './modules/user/application/register-user.use-case.js';
import { LoginUserUseCase } from './modules/user/application/login-user.use-case.js';

async function bootstrap() {
  console.log("🚀 KYCLOPS OAUTH2 FLOW: REGISTRO Y LOGIN\n");

  const register = new RegisterUserUseCase();
  const login = new LoginUserUseCase();

  try {
    // 1. REGISTRO (Creación de cuenta y empresa)
    const regResult = await register.execute({
      email: "lanca@kyclops.com",
      passwordHash: "hash_seguro",
      orgName: "Kyclops Studio"
    });
    console.log(`✅ Registro OK: Org "${regResult.organization.name}" creada.`);

    // 2. LOGIN (Obtención de Tokens)
    const auth = await login.execute({
      email: "lanca@kyclops.com",
      passwordRaw: "password123"
    });

    console.log("\n🔑 TOKENS GENERADOS (OAuth2):");
    console.log(` > AccessToken (JWT): ${auth.accessToken.substring(0, 20)}...`);
    console.log(` > RefreshToken: ${auth.refreshToken}`);
    console.log(` > Expira en: ${auth.expiresIn} segundos`);

    console.log("\n✅ Flujo de Identidad completado con éxito.");

  } catch (error: any) {
    console.error("❌ Error en el flujo:", error.message);
  }
}

bootstrap();