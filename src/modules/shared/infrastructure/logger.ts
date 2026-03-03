export const logger = {
  info: (msg: string, data?: any) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[INFO]: ${msg}`, data || '');
    }
  },
  // Agregamos ERROR (indispensable para la base de datos)
  error: (msg: string, context: string, error?: any) => {
    // Los errores se muestran siempre para poder arreglar fallos en la nube
    console.error(`[ERROR - ${context}]: ${msg}`, error || '');
  },
  // Agregamos WARN (lo que te está pidiendo TypeScript ahora)
  warn: (msg: string, data?: any) => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[WARN]: ${msg}`, data || '');
    }
  }
};