export class Permission {
  constructor(
    public readonly id: string,          // ej: 'user:create'
    public readonly name: string,        // ej: 'Crear Usuarios'
    public readonly description: string  // ej: 'Permite invitar nuevos miembros'
  ) {}
}