export const invitationEmailTemplate = (orgName: string, inviterName: string, url: string) => `
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; color: #333;">
  <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee;">
    <h2>¡Te han invitado a colaborar!</h2>
    <p>Hola,</p>
    <p><strong>${inviterName}</strong> te ha invitado a unirte a la organización <strong>${orgName}</strong> en Kyclops Studio.</p>
    <p>Al aceptar, podrás colaborar en los proyectos y catálogos de la empresa.</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="${url}" style="background: #28a745; color: white; padding: 12px 25px; text-decoration: none; border-radius: 4px;">Aceptar Invitación</a>
    </div>
    <p style="font-size: 0.8em; color: #999;">Esta invitación expira en 7 días.</p>
  </div>
</body>
</html>
`;