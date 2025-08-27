
import React, { useState } from 'react';
import type { View } from '../types';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
    currentView: View;
    setView: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (view: View) => {
        setView(view);
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" onClick={() => handleNavClick('home')} className="text-2xl font-bold font-cinzel text-amber-500">
                           Marrakech Wheels
                        </a>
                    </div>

                    <nav className="hidden md:block">
                        <ul className="flex items-baseline space-x-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href="#"
                                        onClick={() => handleNavClick(link.view)}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                                            currentView === link.view
                                                ? 'bg-amber-500 text-slate-900'
                                                : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_LINKS.map((link) => (
                            <li key={link.name}>
                                <a
                                    href="#"
                                    onClick={() => handleNavClick(link.view)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                                        currentView === link.view ? 'bg-amber-500 text-slate-900' : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};
