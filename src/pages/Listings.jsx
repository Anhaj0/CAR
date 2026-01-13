import React, { useEffect } from 'react';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';

const Listings = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-20 pb-20">
            <div className="container">
                <header className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-primary">Our Vehicle Fleet</h1>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        Choose from our wide range of well-maintained vehicles for your self-drive or chauffeur-driven journey in Sri Lanka.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vehicles.map(car => (
                        <div key={car.id} className="h-full">
                            <VehicleCard car={car} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Listings;
