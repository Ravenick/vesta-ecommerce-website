export interface Plan {
  id: number;
  name: string;
  tag: string;
  beds: number;
  baths: number;
  sqft: string;
  price: number;
  image: string;
  description: string;
  features: string[];
}

export type PurchaseType = 'full' | 'preview';
