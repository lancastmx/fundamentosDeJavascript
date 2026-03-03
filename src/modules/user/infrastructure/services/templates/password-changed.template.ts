export const passwordChangedTemplate = (name: string, date: string) => `
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; color: #333; line-height: 1.5;">
  <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
    <h2 style="color: #28a745;">¡Contraseña Actualizada!</h2>
    <p>Hola <strong>${name}</strong>,</p>
    <p>Te informamos que la contraseña de tu cuenta de <strong>Kyclops Studio</strong> ha sido cambiada exitosamente el <strong>${date}</strong>.</p>
    <p>Si fuiste tú, no necesitas hacer nada más. ¡Tu cuenta está segura!</p>
    <div style="background: #fff3cd; padding: 15px; border-radius: 4px; margin-top: 20px;">
      <p style="margin: 0; color: #856404; font-size: 0.9em;">
        <strong>¿No fuiste tú?</strong> Si no realizaste este cambio, por favor ponte en contacto con nuestro equipo de soporte inmediatamente o intenta recuperar tu acceso.
      </p>
    </div>
    <p style="margin-top: 20px; font-size: 0.8em; color: #999;">Saludos,<br>El equipo de Kyclops Studio</p>
  </div>
</body>
</html>
`;