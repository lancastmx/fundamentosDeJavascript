export const passwordResetTemplate = (name: string, url: string) => `
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; color: #333; line-height: 1.5;">
  <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
    <h2 style="color: #d9534f;">Recuperación de Contraseña</h2>
    <p>Hola <strong>${name}</strong>,</p>
    <p>Recibimos una solicitud para restablecer la contraseña de tu cuenta en <strong>Kyclops Studio</strong>.</p>
    <p>Para elegir una nueva contraseña, haz clic en el siguiente botón:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${url}" style="background: #d9534f; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold;">Restablecer Contraseña</a>
    </div>
    <p style="font-size: 0.9em; color: #666;">Este enlace expirará en 1 hora por razones de seguridad.</p>
    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
    <p style="font-size: 0.8em; color: #999;">Si tú no solicitaste este cambio, puedes ignorar este correo de forma segura. Tu contraseña actual seguirá funcionando.</p>
  </div>
</body>
</html>
`;