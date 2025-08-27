
export type View = 'home' | 'cars' | 'services' | 'contact' | 'about';

export interface Car {
  id: number;
  name: string;
  brand: string;
  type: 'Citadine' | 'SUV' | 'Luxe' | 'Berline';
  pricePerDay: number;
  seats: number;
  transmission: 'Automatique' | 'Manuelle';
  image: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  location: string;
  avatar: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WhyUsItem {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}
