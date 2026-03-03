import { Permission } from './permission.entity.js';
import { Role } from './role.entity.js';

/**
 * 1. LISTA ATÓMICA DE PERMISOS
 * Definimos qué acciones existen en el sistema.
 */
export const PERMISSIONS = {
  // Perfil y Usuario
  UPDATE_PROFILE: new Permission('profile:update', 'Actualizar Perfil', 'Permite cambiar datos personales y avatar.'),
  
  // Catálogos y Ventas (Core del negocio)
  MANAGE_CATALOG: new Permission('catalog:manage', 'Gestionar Catálogo', 'Crear, editar y eliminar productos o servicios.'),
  VIEW_REPORTS: new Permission('reports:view', 'Ver Reportes', 'Visualizar estadísticas de ventas y rendimiento.'),

  // Gestión de Organización (Multi-tenant)
  INVITE_USER: new Permission('user:invite', 'Invitar Usuarios', 'Enviar invitaciones para unirse a la organización.'),
  MANAGE_MEMBERS: new Permission('members:manage', 'Gestionar Miembros', 'Cambiar roles o revocar membresías.'),
  UPDATE_ORG: new Permission('org:update', 'Actualizar Organización', 'Cambiar nombre, logo y datos de la empresa.'),

  // Nivel Owner
  MANAGE_BILLING: new Permission('billing:manage', 'Gestionar Facturación', 'Cambiar planes y métodos de pago.'),
  DELETE_ORG: new Permission('org:delete', 'Eliminar Organización', 'Borrar permanentemente la organización y sus datos.')
};

/**
 * 2. DEFINICIÓN DE ROLES CON JERARQUÍA
 * Siguiendo el Roadmap: OWNER -> ADMIN -> SUPERVISOR -> SELLER
 */
export const SYSTEM_ROLES: Role[] = [
  // Nivel Base: Solo ve sus cosas y su perfil
  new Role(
    'SELLER', 
    'Vendedor', 
    [PERMISSIONS.UPDATE_PROFILE]
  ),

  // Nivel Supervisor: Gestiona el catálogo y ve reportes
  new Role(
    'SUPERVISOR', 
    'Supervisor', 
    [PERMISSIONS.MANAGE_CATALOG, PERMISSIONS.VIEW_REPORTS], 
    'SELLER' // Hereda de Vendedor
  ),

  // Nivel Admin: Gestiona el equipo y la info de la empresa
  new Role(
    'ADMIN', 
    'Administrador', 
    [PERMISSIONS.INVITE_USER, PERMISSIONS.MANAGE_MEMBERS, PERMISSIONS.UPDATE_ORG], 
    'SUPERVISOR' // Hereda de Supervisor
  ),

  // Nivel Máximo: Control total y dinero
  new Role(
    'OWNER', 
    'Dueño', 
    [PERMISSIONS.MANAGE_BILLING, PERMISSIONS.DELETE_ORG], 
    'ADMIN' // Hereda de Administrador
  )
];