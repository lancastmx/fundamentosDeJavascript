export const verificationEmailTemplate = (name: string, url: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    .button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
    }
  </style>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6;">
  <div style="max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
    <h2 style="color: #333;">¡Bienvenido a Kyclops Studio!</h2>
    <p>Hola <strong>${name}</strong>,</p>
    <p>Gracias por registrarte. Para activar tu cuenta y empezar a gestionar tu organización, por favor confirma tu correo haciendo clic en el siguiente botón:</p>
    <div style="margin: 30px 0;">
      <a href="${url}" class="button">Verificar mi cuenta</a>
    </div>
    <p>Si el botón no funciona, copia y pega este enlace en tu navegador:</p>
    <p>${url}</p>
    <hr>
    <p style="font-size: 0.8em; color: #777;">Si no creaste esta cuenta, puedes ignorar este correo.</p>
  </div>
</body>
</html>
`;