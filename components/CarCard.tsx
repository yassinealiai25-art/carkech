import React from 'react';
import type { Car } from '../types';
import { UsersIcon, CogIcon } from './icons';

interface CarCardProps {
    car: Car;
    onSelectCar: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onSelectCar }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
            <div className="relative">
                <img src={car.image} alt={car.name} className="w-full h-56 object-cover" />
                <div className="absolute top-0 right-0 bg-amber-500 text-white font-bold py-1 px-3 m-2 rounded-full text-sm">{car.type}</div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold font-cinzel text-slate-800 mb-2">{car.name}</h3>
                <div className="flex items-center text-slate-600 mb-4 space-x-4">
                    <div className="flex items-center">
                        <UsersIcon className="w-5 h-5 mr-2 text-amber-500" />
                        <span>{car.seats} Places</span>
                    </div>
                    <div className="flex items-center">
                        <CogIcon className="w-5 h-5 mr-2 text-amber-500" />
                        <span>{car.transmission}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-slate-900">
                        {car.pricePerDay} DH <span className="text-sm font-normal text-slate-500">/jour</span>
                    </p>
                    <button 
                        onClick={() => onSelectCar(car)}
                        className="bg-slate-800 text-white py-2 px-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-300 transform group-hover:scale-105">
                        Voir plus
                    </button>
                </div>
            </div>
        </div>
    );
};