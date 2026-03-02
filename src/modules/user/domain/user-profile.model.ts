/**
 * Interfaz flexible para los atributos del usuario.
 * Modifica este archivo para añadir campos específicos (Logo, Cédula, etc.).
 */
export interface UserProfile {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  avatarUrl?: string;     // Imagen de perfil personal
  staffPhotoUrl?: string; // Imagen del personal (SaaS B2B)
  companyLogoUrl?: string;// Logo de la empresa si es un contacto corporativo
  medicalId?: string;     // Ejemplo para industria médica
  preferences?: Record<string, any>; // Configuraciones personalizadas
}