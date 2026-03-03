// Importamos la constante (valor real)
import { ORGANIZATION_PLANS } from './organization-plan.model.js';
// Importamos el tipo (solo para TypeScript)
import type { PlanType } from './organization-plan.model.js';

export class Organization {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly ownerId: string,
    private _plan: PlanType = 'BASIC',
    public readonly createdAt: Date = new Date()
  ) {}

  public canInvite(currentInvitationsCount: number): boolean {
    const limit = ORGANIZATION_PLANS[this._plan].maxInvitations;
    return currentInvitationsCount < limit;
  }

  public get plan(): PlanType {
    return this._plan;
  }
}