export interface Product {
  title: string;
  description: string;
  info?: string;
  items?: string[];
}
export interface Service {
  title: string;
  description: string;
  items?: string[];
  unsafe?: string;
  subdued?: string;
}
