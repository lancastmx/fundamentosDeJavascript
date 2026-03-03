export const config = {
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'kyclops_secret_2026',
    tokenExpiresIn: '1h',
  },
  smtp: {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    user: process.env.SMTP_USER || 'tu_correo@kyclops.com',
    pass: process.env.SMTP_PASS || 'tu_password_de_aplicacion',
  },
  server: {
    port: process.env.PORT || 3000,
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  }
};