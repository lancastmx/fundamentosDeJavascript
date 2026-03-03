/**
 * Interfaz flexible para los atributos del usuario.
 * Modifica este archivo para añadir campos específicos (Logo, Cédula, etc.).
 */
export interface UserProfile {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  avatarUrl?: string;    
  staffPhotoUrl?: string; 
  companyLogoUrl?: string;
  preferences?: Record<string, any>;
}