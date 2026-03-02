import os from 'node:os';

/**
 * Prueba de concepto: Sprint 2 - Core Domain
 * Validando entorno ESM y TSX
 */
const startApp = () => {
  const user = os.userInfo().username;
  const platform = os.platform();

  console.log("---------------------------------------");
  console.log("íº€ Â¡Hola Mundo desde TypeScript!");
  console.log("---------------------------------------");
  console.log(`í±¤ Usuario detectado: ${user}`);
  console.log(`í²» Plataforma: ${platform}`);
  console.log(`âœ… Entorno ESM: Activo`);
  console.log(`í³¦ Status: Listo para el Sprint 2`);
  console.log("---------------------------------------");
};

startApp();
