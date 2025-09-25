export interface QuoteFormData {
  from: string;
  to: string;
  freightType: string;
  containerType: string;
  containerQty: number;
  company: string;
  email: string;
  phone: string;
  specialRequirements: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SubscribeFormData {
  email: string;
}
