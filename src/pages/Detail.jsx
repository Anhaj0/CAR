import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles } from '../data/vehicles';
import { Users, Fuel, Settings, Calendar, CheckCircle } from 'lucide-react';

const Detail = () => {
    const { id } = useParams();
    const car = vehicles.find(v => v.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!car) {
        return (
            <div className="container section text-center">
                <h2>Vehicle not found</h2>
                <Link to="/listings" className="btn btn-primary mt-md">Back to Fleet</Link>
            </div>
        );
    }

    return (
        <div className="section">
            <div className="container">
                <Link to="/listings" className="text-muted mb-md block">&larr; Back to Fleet</Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                    <div className="detail-image-wrapper">
                        <img src={car.image} alt={car.name} className="detail-image rounded-lg shadow-md" />
                    </div>

                    <div className="detail-content">
                        <h1 className="text-4xl font-bold mb-sm">{car.name}</h1>
                        <div className="flex items-center gap-sm mb-lg">
                            <span className="badge bg-primary text-white p-2 rounded">{car.type}</span>
                            <span className="text-accent font-bold text-2xl">${car.price} <span className="text-sm text-muted">/ day</span></span>
                        </div>

                        <p className="text-muted mb-lg text-lg line-height-relaxed">
                            {car.description}
                        </p>

                        <div className="specs-grid grid grid-cols-2 gap-md mb-xl">
                            <div className="spec-card p-4 border rounded-md">
                                <Users className="text-accent mb-2" />
                                <div className="text-sm text-muted">Capacity</div>
                                <div className="font-bold">{car.passengers} Passengers</div>
                            </div>
                            <div className="spec-card p-4 border rounded-md">
                                <Settings className="text-accent mb-2" />
                                <div className="text-sm text-muted">Transmission</div>
                                <div className="font-bold">{car.transmission}</div>
                            </div>
                            <div className="spec-card p-4 border rounded-md">
                                <Fuel className="text-accent mb-2" />
                                <div className="text-sm text-muted">Fuel Type</div>
                                <div className="font-bold">{car.fuel}</div>
                            </div>
                            <div className="spec-card p-4 border rounded-md">
                                <Calendar className="text-accent mb-2" />
                                <div className="text-sm text-muted">Minimum Rental</div>
                                <div className="font-bold">2 Days</div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-md">Rental Terms</h3>
                        <ul className="mb-xl space-y-2">
                            <li className="flex gap-sm"><CheckCircle size={18} className="text-green" /> <span>Refundable Deposit: $100</span></li>
                            <li className="flex gap-sm"><CheckCircle size={18} className="text-green" /> <span>Daily Mileage Limit: 100km</span></li>
                            <li className="flex gap-sm"><CheckCircle size={18} className="text-green" /> <span>Extra Mileage: $0.30/km</span></li>
                        </ul>

                        <div className="actions flex gap-md flex-col md:flex-row">
                            <a href={`https://wa.me/94771234567?text=I'm interested in booking the ${car.name}`} className="btn btn-whatsapp flex-1 text-center">
                                Book via WhatsApp
                            </a>
                            <a href="tel:+94771234567" className="btn btn-secondary flex-1 text-center">
                                Call to Enquire
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
