import 'dotenv/config';

export const config = {
  // Configuración de Servidor
  server: {
    port: process.env.PORT || 3000,
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    env: process.env.NODE_ENV || 'development',
  },
  // Configuración de Base de Datos (Esto es lo que faltaba)
  database: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/massive',
  },
  // Configuración de Auth (Para que no te de error más adelante)
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'super-secret-key',
    tokenExpiresIn: '1h',
  },
  // Configuración de Email (Opcional por ahora)
  smtp: {
    host: process.env.SMTP_HOST || 'localhost',
    port: Number(process.env.SMTP_PORT) || 587,
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
};