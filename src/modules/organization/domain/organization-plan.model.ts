export const ORGANIZATION_PLANS = {
  BASIC: {
    name: 'Plan Básico',
    maxInvitations: 15,
    isDefault: true
  },
  PRO: {
    name: 'Plan Pro',
    maxInvitations: 100,
    isDefault: false
  }
};

// El export debe estar aquí
export type PlanType = keyof typeof ORGANIZATION_PLANS;