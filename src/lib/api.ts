const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'https://pos.chita.co.tz'

export interface ApiEnvelope<T> {
  success: boolean
  message?: string
  data: T
  errors?: Record<string, string>
}

export interface PlanFeature {
  id: string
  featureName: string
  featureValue: string
  isEnabled: boolean
}

export interface Plan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  annualPrice: number
  trialDays: number
  isActive: boolean
  isDefault: boolean
  maxBranches: number
  maxUsers: number
  sortOrder: number
  features: PlanFeature[]
}

export interface RegisterBusinessPayload {
  businessName: string
  businessPhone?: string
  businessAddress?: string
  businessType?: string
  planId?: string
  billingCycle: 'MONTHLY' | 'ANNUAL'
  startWithTrial: boolean
  ownerFirstName: string
  ownerLastName: string
  ownerEmail: string
  ownerPassword: string
  ownerPhone?: string
}

export interface DemoPayload {
  name: string
  email: string
  phone?: string
  businessName?: string
  message?: string
}

export interface DemoAccessResponse {
  loginEmail: string
  loginPassword: string
  loginPath: string
  note: string
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    ...options,
  })
  const json: ApiEnvelope<T> = await res.json()
  if (!res.ok) throw new Error(json.message ?? `Request failed (${res.status})`)
  return json.data
}

export interface BusinessType {
  id: string
  code: string
  label: string
  description?: string
  isActive: boolean
  sortOrder: number
}

export const api = {
  getPlans: () => request<Plan[]>('/api/plans'),

  getBusinessTypes: () => request<BusinessType[]>('/api/business-types'),

  registerBusiness: (payload: RegisterBusinessPayload) =>
    request('/api/public/onboarding/register-business', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  requestDemo: (payload: DemoPayload) =>
    request<DemoAccessResponse>('/api/public/onboarding/request-demo', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
}
