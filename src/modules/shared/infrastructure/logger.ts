export const logger = {
  info: (msg: string, data?: any) => {
    // Si la variable de entorno NO es producción, imprime.
    // Si es producción, la función no hace NADA (borrado lógico en ejecución).
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[LOG]: ${msg}`, data || '');
    }
  }
};