export class Membership {
  constructor(
    public readonly userId: string,
    public readonly organizationId: string,
    public readonly roleId: string,
    public readonly joinedAt: Date = new Date()
  ) {}
}