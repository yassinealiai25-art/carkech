import type { Car, Testimonial, Service, WhyUsItem } from './types';
import { CarIcon, ClockIcon, GlobeIcon, ShieldCheckIcon, CheckCircleIcon, MapPinIcon } from './components/icons';

export const NAV_LINKS: { name: string; view: any }[] = [
    { name: 'Accueil', view: 'home' },
    { name: 'Nos Voitures', view: 'cars' },
    { name: 'Services', view: 'services' },
    { name: 'À Propos', view: 'about' },
    { name: 'Contact', view: 'contact' },
];

export const CARS: Car[] = [
  {
    id: 1,
    name: 'Dacia Duster',
    brand: 'Dacia',
    type: 'SUV',
    pricePerDay: 450,
    seats: 5,
    transmission: 'Manuelle',
    image: 'https://picsum.photos/seed/duster/800/600',
    features: ['Climatisation', 'GPS', 'Bluetooth'],
  },
  {
    id: 2,
    name: 'Range Rover Evoque',
    brand: 'Land Rover',
    type: 'Luxe',
    pricePerDay: 1200,
    seats: 5,
    transmission: 'Automatique',
    image: 'https://picsum.photos/seed/evoque/800/600',
    features: ['Toit Panoramique', 'Sièges en cuir', 'Système audio Meridian'],
  },
  {
    id: 3,
    name: 'Renault Clio',
    brand: 'Renault',
    type: 'Citadine',
    pricePerDay: 300,
    seats: 5,
    transmission: 'Manuelle',
    image: 'https://picsum.photos/seed/clio/800/600',
    features: ['Économe en carburant', 'Facile à garer', 'Apple CarPlay'],
  },
  {
    id: 4,
    name: 'Peugeot 3008',
    brand: 'Peugeot',
    type: 'SUV',
    pricePerDay: 550,
    seats: 5,
    transmission: 'Automatique',
    image: 'https://picsum.photos/seed/3008/800/600',
    features: ['i-Cockpit', 'Aide à la conduite', 'Grand coffre'],
  },
  {
    id: 5,
    name: 'Mercedes-Benz Classe C',
    brand: 'Mercedes-Benz',
    type: 'Luxe',
    pricePerDay: 1500,
    seats: 5,
    transmission: 'Automatique',
    image: 'https://picsum.photos/seed/cclass/800/600',
    features: ['Intérieur luxueux', 'Technologie MBUX', 'Confort de conduite'],
  },
  {
    id: 6,
    name: 'Volkswagen Golf 8',
    brand: 'Volkswagen',
    type: 'Berline',
    pricePerDay: 600,
    seats: 5,
    transmission: 'Automatique',
    image: 'https://picsum.photos/seed/golf8/800/600',
    features: ['Digital Cockpit', 'IQ.DRIVE', 'Connectivité avancée'],
  },
   {
    id: 7,
    name: 'Hyundai i10',
    brand: 'Hyundai',
    type: 'Citadine',
    pricePerDay: 250,
    seats: 4,
    transmission: 'Manuelle',
    image: 'https://picsum.photos/seed/i10/800/600',
    features: ['Compacte', 'Économe', 'Idéale pour la ville'],
  },
  {
    id: 8,
    name: 'BMW X5',
    brand: 'BMW',
    type: 'Luxe',
    pricePerDay: 1800,
    seats: 7,
    transmission: 'Automatique',
    image: 'https://picsum.photos/seed/x5/800/600',
    features: ['xDrive', 'Suspension pneumatique', 'Live Cockpit Professional'],
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Thomas L.',
    location: 'Paris, France',
    quote: 'Service impeccable et voiture très propre. La livraison à l\'aéroport était un vrai plus. Je recommande vivement pour un séjour à Marrakech !',
    avatar: 'https://picsum.photos/seed/avatar1/100/100'
  },
  {
    id: 2,
    name: 'Fatima Z.',
    location: 'Casablanca, Maroc',
    quote: 'Un grand choix de véhicules et des prix très compétitifs. L\'équipe est très professionnelle et à l\'écoute. Mon expérience a été parfaite.',
    avatar: 'https://picsum.photos/seed/avatar2/100/100'
  },
  {
    id: 3,
    name: 'David S.',
    location: 'London, UK',
    quote: 'The booking process was smooth and easy. The car was exactly as described. Excellent customer service, they were available 24/7 for any questions.',
    avatar: 'https://picsum.photos/seed/avatar3/100/100'
  }
];

export const WHY_US_ITEMS: WhyUsItem[] = [
    {
        id: 1,
        title: 'Service Client 24/7',
        description: 'Notre équipe est disponible à toute heure pour répondre à vos besoins et assurer votre tranquillité d\'esprit.',
        icon: ClockIcon
    },
    {
        id: 2,
        title: 'Large Choix de Véhicules',
        description: 'De la citadine économique au SUV de luxe, nous avons la voiture parfaite pour votre aventure marocaine.',
        icon: CarIcon
    },
    {
        id: 3,
        title: 'Prix Compétitifs',
        description: 'Nous offrons des tarifs transparents et attractifs pour vous garantir le meilleur rapport qualité-prix.',
        icon: ShieldCheckIcon
    },
    {
        id: 4,
        title: 'Livraison Partout à Marrakech',
        description: 'Recevez votre voiture directement à l\'aéroport, à votre hôtel ou riad pour un maximum de confort.',
        icon: GlobeIcon
    }
];

export const SERVICES: Service[] = [
    {
        id: 1,
        title: 'Livraison à l\'aéroport',
        description: 'Commencez votre séjour sans stress. Nous vous attendons à votre arrivée à l\'aéroport de Marrakech-Ménara avec le véhicule de votre choix.',
        icon: MapPinIcon
    },
    {
        id: 2,
        title: 'Chauffeur Privé',
        description: 'Explorez la ville et ses environs en toute sérénité avec nos chauffeurs professionnels et expérimentés qui connaissent la région sur le bout des doigts.',
        icon: CheckCircleIcon
    },
    {
        id: 3,
        title: 'Siège Bébé & Rehausseur',
        description: 'Voyagez en toute sécurité avec vos enfants. Nous mettons à votre disposition des sièges adaptés à tous les âges sur simple demande.',
        icon: CheckCircleIcon
    },
    {
        id: 4,
        title: 'Assistance 24/7',
        description: 'Un imprévu sur la route ? Notre service d\'assistance est disponible 24 heures sur 24 et 7 jours sur 7 pour vous aider où que vous soyez.',
        icon: ClockIcon
    }
];