import React from 'react';
import { Link } from 'react-router-dom';
import VehicleCard from '../components/VehicleCard';
import { vehicles } from '../data/vehicles';
import { ArrowRight, Shield, Clock, Map } from 'lucide-react';
import './Home.css';

const Home = () => {
    const featuredVehicles = vehicles.filter(v => v.featured);

    return (
        <div className="home-page">
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-container justify-center">
                    <div className="hero-column hero-content text-center max-w-4xl mx-auto">
                        <h1 className="hero-title text-primary">Explore Sri Lanka with Reliable Car Rentals</h1>
                        <p className="hero-subtitle text-muted">
                            Self-drive and chauffeur-driven vehicles for a safe and memorable journey.
                            Trusted by locals and tourists alike.
                        </p>
                        <div className="hero-actions justify-center">
                            <Link to="/listings" className="btn btn-primary btn-lg">View Details / Book Now</Link>
                            <a href="https://wa.me/94771234567" className="btn btn-whatsapp btn-lg">WhatsApp Us</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Vehicles */}
            <section className="section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Popular Vehicles</h2>
                        <p className="section-desc">Choose from our most requested cars for your trip.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                        {featuredVehicles.map(car => (
                            <VehicleCard key={car.id} car={car} />
                        ))}
                    </div>

                    <div className="text-center mt-lg">
                        <Link to="/listings" className="btn btn-secondary">
                            View All Vehicles <ArrowRight size={16} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Why Choose LankaRental?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-lg text-center feature-grid">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Shield size={48} />
                            </div>
                            <h3>Safe & Secure</h3>
                            <p>All vehicles are regularly inspected and fully insured for your peace of mind.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Clock size={48} />
                            </div>
                            <h3>24/7 Support</h3>
                            <p>We are just a phone call away, anytime you need assistance during your rental.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <Map size={48} />
                            </div>
                            <h3>Island-wide Delivery</h3>
                            <p>We can deliver your vehicle to the airport or your hotel anywhere in Colombo.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section bg-primary text-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
                        <div>
                            <h2 className="section-title text-white">More Than Just Rentals</h2>
                            <p className="mb-md opacity-90">
                                Whether you prefer to drive yourself or relax in the back seat, we have a solution for you.
                            </p>
                            <ul className="service-list">
                                <li>Self-Drive Rentals</li>
                                <li>Chauffeur Driven Cars</li>
                                <li>Airport Transfers</li>
                                <li>Wedding Hires</li>
                            </ul>
                            <Link to="/services" className="btn btn-outline-white mt-md">Explore Services</Link>
                        </div>
                        <div className="service-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop"
                                alt="Driving in Sri Lanka"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
