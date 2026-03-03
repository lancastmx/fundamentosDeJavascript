import mongoose from 'mongoose';
import { config } from '../config.js';
import { logger } from '../modules/shared/infrastructure/logger.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.database.uri);
    logger.info(`✅ Conectado a la base de datos: ${mongoose.connection.name}`);
  } catch (error) {
    logger.error('❌ Error de conexión', 'Database', error);
    process.exit(1);
  }
};