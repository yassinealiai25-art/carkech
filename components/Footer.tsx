
import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from './icons';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-gray-300">
            <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold font-cinzel text-amber-500 mb-4">Marrakech Wheels</h3>
                        <p className="text-sm">Explorez Marrakech et le Maroc avec style et confort. Votre aventure commence ici, avec le véhicule parfait pour vos besoins.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold font-cinzel text-white mb-4">Contactez-nous</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPinIcon className="w-5 h-5 mr-3 mt-1 text-amber-500 flex-shrink-0" />
                                <span>123 Rue de la Palmeraie, Marrakech, Maroc</span>
                            </li>
                            <li className="flex items-center">
                                <PhoneIcon className="w-5 h-5 mr-3 text-amber-500" />
                                <a href="tel:+212500000000" className="hover:text-amber-500">+212 5 00 00 00 00</a>
                            </li>
                            <li className="flex items-center">
                                <MailIcon className="w-5 h-5 mr-3 text-amber-500" />
                                <a href="mailto:contact@marrakechwheels.com" className="hover:text-amber-500">contact@marrakechwheels.com</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                         <h3 className="text-lg font-semibold font-cinzel text-white mb-4">Plan du site</h3>
                         <ul className="space-y-2">
                             <li><a href="#" className="hover:text-amber-500">Accueil</a></li>
                             <li><a href="#" className="hover:text-amber-500">Nos Voitures</a></li>
                             <li><a href="#" className="hover:text-amber-500">Services</a></li>
                             <li><a href="#" className="hover:text-amber-500">Contact</a></li>
                             <li><a href="#" className="hover:text-amber-500">Mentions Légales</a></li>
                         </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Marrakech Wheels. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};
