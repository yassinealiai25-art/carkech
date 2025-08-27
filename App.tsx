import React, { useState, useEffect } from 'react';
import type { View, Car } from './types';
import { CARS, TESTIMONIALS, WHY_US_ITEMS, SERVICES } from './constants';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CarCard } from './components/CarCard';
import { ChevronLeftIcon, ChevronRightIcon, CheckCircleIcon, PhoneIcon, WhatsappIcon } from './components/icons';

const Hero: React.FC<{ onViewCars: () => void }> = ({ onViewCars }) => (
    <div className="relative h-[60vh] min-h-[400px] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/marrakech/1920/1080')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white p-4">
                <h1 className="text-4xl md:text-6xl font-bold font-cinzel mb-4">Explorez Marrakech avec Style</h1>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Votre aventure commence ici. Louez le véhicule parfait pour un voyage inoubliable.</p>
                <button 
                  onClick={onViewCars}
                  className="bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-400 transition-colors duration-300 transform hover:scale-105">
                    Voir nos voitures
                </button>
            </div>
        </div>
    </div>
);

const FeaturedCars: React.FC<{ onSelectCar: (car: Car) => void }> = ({ onSelectCar }) => (
    <div className="bg-slate-100 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-cinzel text-center text-slate-800 mb-2">Nos Voitures Phares</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Une sélection de nos véhicules les plus populaires, parfaits pour toutes vos envies d'évasion.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CARS.slice(0, 3).map(car => (
                    <CarCard key={car.id} car={car} onSelectCar={onSelectCar} />
                ))}
            </div>
        </div>
    </div>
);

const WhyChooseUs: React.FC = () => (
    <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold font-cinzel text-center text-slate-800 mb-12">Pourquoi nous choisir ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {WHY_US_ITEMS.map(item => (
                    <div key={item.id} className="p-6">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-500 mx-auto mb-4">
                           <item.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                        <p className="text-slate-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1));
    };
    
    useEffect(() => {
        const timer = setTimeout(nextSlide, 5000);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="bg-slate-100 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold font-cinzel text-slate-800 mb-12">Ce que disent nos clients</h2>
                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden relative h-64">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <div key={testimonial.id} className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="flex flex-col items-center justify-center h-full">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4"/>
                                    <p className="text-slate-600 italic mb-4">"{testimonial.quote}"</p>
                                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-slate-200">
                        <ChevronLeftIcon className="w-6 h-6 text-slate-700"/>
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-slate-200">
                        <ChevronRightIcon className="w-6 h-6 text-slate-700"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

const HomePage: React.FC<{ setView: (view: View) => void, onSelectCar: (car: Car) => void }> = ({ setView, onSelectCar }) => (
    <>
        <Hero onViewCars={() => setView('cars')} />
        <FeaturedCars onSelectCar={onSelectCar} />
        <WhyChooseUs />
        <Testimonials />
    </>
);

const CarListPage: React.FC<{ onSelectCar: (car: Car) => void }> = ({ onSelectCar }) => {
    const [filteredCars, setFilteredCars] = useState<Car[]>(CARS);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        if (filter === 'all') {
            setFilteredCars(CARS);
        } else {
            setFilteredCars(CARS.filter(car => car.type === filter));
        }
    }, [filter]);

    const carTypes: Car['type'][] = ['Citadine', 'Berline', 'SUV', 'Luxe'];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold font-cinzel text-center text-slate-800 mb-4">Notre Flotte</h1>
            <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">Choisissez parmi notre large sélection de véhicules pour trouver celui qui correspond parfaitement à vos besoins.</p>
            <div className="flex justify-center space-x-2 md:space-x-4 mb-10">
                <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full font-semibold transition-colors ${filter === 'all' ? 'bg-amber-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'}`}>Tous</button>
                {carTypes.map(type => (
                     <button key={type} onClick={() => setFilter(type)} className={`px-4 py-2 rounded-full font-semibold transition-colors ${filter === type ? 'bg-amber-500 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'}`}>{type}</button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredCars.map(car => (
                    <CarCard key={car.id} car={car} onSelectCar={onSelectCar} />
                ))}
            </div>
        </div>
    );
};

const CarDetailsPage: React.FC<{ car: Car, onBack: () => void }> = ({ car, onBack }) => {
    const phoneNumber = "+212612345678";
    const whatsappMessage = encodeURIComponent(`Bonjour, je suis intéressé(e) par la location de la ${car.name}.`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    const phoneUrl = `tel:${phoneNumber}`;

    return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button onClick={onBack} className="flex items-center text-slate-600 hover:text-amber-500 font-semibold mb-8">
            <ChevronLeftIcon className="w-5 h-5 mr-2" /> Retour à la liste
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
                <img src={car.image} alt={car.name} className="w-full h-auto object-cover rounded-lg shadow-lg"/>
            </div>
            <div className="lg:col-span-2">
                <h1 className="text-4xl font-bold font-cinzel text-slate-800 mb-2">{car.name}</h1>
                <p className="text-lg text-slate-500 mb-4">{car.brand} - {car.type}</p>
                <p className="text-4xl font-bold text-slate-900 mb-6">{car.pricePerDay} DH <span className="text-lg font-normal text-slate-500">/jour</span></p>
                
                <div className="space-y-3 mb-6">
                    {car.features.map(feature => (
                        <div key={feature} className="flex items-center text-slate-700">
                            <CheckCircleIcon className="w-5 h-5 mr-3 text-green-500"/>
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-100 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800">Réservez ce véhicule</h3>
                    <div className="space-y-4">
                       <a 
                            href={whatsappUrl}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
                            <WhatsappIcon className="w-5 h-5 mr-3" />
                            Réserver par WhatsApp
                        </a>
                        <a 
                            href={phoneUrl}
                            className="w-full flex items-center justify-center bg-slate-800 text-white py-3 px-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-300">
                             <PhoneIcon className="w-5 h-5 mr-3" />
                            Réserver par Appel
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

const ServicesPage: React.FC = () => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold font-cinzel text-center text-slate-800 mb-4">Nos Services Additionnels</h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Pour rendre votre expérience encore plus agréable, nous proposons une gamme de services sur mesure.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SERVICES.map(service => (
                <div key={service.id} className="bg-white p-8 rounded-lg shadow-lg flex items-start">
                    <div className="flex-shrink-0 mr-6">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-amber-500">
                            <service.icon className="w-8 h-8" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
                        <p className="text-slate-600">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const AboutPage: React.FC = () => (
    <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                     <h1 className="text-4xl font-bold font-cinzel text-slate-800 mb-4">À Propos de Marrakech Wheels</h1>
                     <p className="text-slate-600 mb-4">Fondée par des passionnés de voyage et d'automobile, Marrakech Wheels est née d'une volonté simple : offrir une expérience de location de voiture exceptionnelle au cœur du Maroc. Nous croyons que la liberté de découvrir les paysages magnifiques, les villes impériales et les trésors cachés du royaume commence avec le bon véhicule.</p>
                     <p className="text-slate-600 mb-4">Notre mission est de vous fournir plus qu'une simple voiture. Nous vous offrons un service fiable, transparent et personnalisé, avec une flotte de véhicules modernes et parfaitement entretenus. De l'accueil chaleureux à l'aéroport à l'assistance 24/7, notre équipe est dédiée à rendre votre voyage inoubliable.</p>
                     <p className="text-slate-600">Bienvenue à Marrakech. Bienvenue chez Marrakech Wheels.</p>
                </div>
                 <div>
                    <img src="https://picsum.photos/seed/aboutus/800/600" alt="Équipe de Marrakech Wheels" className="rounded-lg shadow-xl"/>
                </div>
            </div>
        </div>
    </div>
);

const ContactPage: React.FC = () => (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold font-cinzel text-center text-slate-800 mb-4">Contactez-nous</h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Une question ? Une demande spécifique ? N'hésitez pas à nous contacter. Notre équipe est là pour vous aider.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-600">Prénom</label>
                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2"/>
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-slate-600">Nom</label>
                            <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2"/>
                        </div>
                    </div>
                     <div className="mt-4">
                        <label className="block text-sm font-medium text-slate-600">Email</label>
                        <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2"/>
                    </div>
                     <div className="mt-4">
                        <label className="block text-sm font-medium text-slate-600">Message</label>
                        <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2"></textarea>
                    </div>
                    <button type="submit" className="mt-6 w-full bg-slate-800 text-white py-3 px-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-300">
                        Envoyer
                    </button>
                </form>
            </div>
            <div className="h-full min-h-[400px]">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.17912444585!2d-8.077983601557345!3d31.63460241926634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96175e51%3A0x5950b6534f876b5!2sMarrakesh%2C%20Morocco!5e0!3m2!1sen!2sus!4v1684334333222!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg shadow-lg"></iframe>
            </div>
        </div>
    </div>
);


function App() {
    const [currentView, setCurrentView] = useState<View>('home');
    const [selectedCar, setSelectedCar] = useState<Car | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentView, selectedCar]);

    const handleSetView = (view: View) => {
        setSelectedCar(null);
        setCurrentView(view);
    };

    const handleSelectCar = (car: Car) => {
        setSelectedCar(car);
    };

    const handleBackToList = () => {
        setSelectedCar(null);
        setCurrentView('cars');
    }

    const renderContent = () => {
        if (selectedCar) {
            return <CarDetailsPage car={selectedCar} onBack={handleBackToList} />;
        }
        switch (currentView) {
            case 'home':
                return <HomePage setView={handleSetView} onSelectCar={handleSelectCar} />;
            case 'cars':
                return <CarListPage onSelectCar={handleSelectCar} />;
            case 'services':
                return <ServicesPage />;
            case 'about':
                return <AboutPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage setView={handleSetView} onSelectCar={handleSelectCar} />;
        }
    };

    return (
        <div className="bg-slate-50 text-slate-700">
            <Header currentView={currentView} setView={handleSetView} />
            <main>
                {renderContent()}
            </main>
            <Footer />
        </div>
    );
}

export default App;