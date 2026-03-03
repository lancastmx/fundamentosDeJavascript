import express from 'express';
import { connectDB } from './database.js';
import { userRouter } from '../modules/user/infrastructure/user.routes.js';
import { logger } from '../modules/shared/infrastructure/logger.js';

export async function startServer() {
  const app = express();
  app.use(express.json()); // Clave para que Insomnia funcione

  // Rutas de Prayser
  app.use('/users', userRouter);

  try {
    await connectDB();
    app.listen(3000, () => {
      logger.info("🚀 Servidor de Prayser en http://localhost:3000");
    });
  } catch (e) {
    logger.error("Error al iniciar", "Server", e);
  }
}