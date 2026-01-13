import React, { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold mb-6 text-primary">About LankaRental</h1>
                        <p className="text-xl text-muted">
                            Your trusted partner for exploring the beauty of Sri Lanka safely and comfortably.
                        </p>
                    </div>

                    <div className="mb-16">
                        <img
                            src="https://images.unsplash.com/photo-1596706059902-8959d0738d01?q=80&w=1200&auto=format&fit=crop"
                            alt="Sri Lanka Road Trip"
                            className="w-full rounded-xl shadow-lg mb-8 h-96 object-cover"
                        />

                        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                        <p className="text-muted mb-6 leading-relaxed">
                            Founded in 2015, LankaRental started with a simple mission: to provide tourists and locals with high-quality vehicles without the hassle and hidden costs often associated with car rentals. We realized that travelers wanted transparency, reliability, and safety above all else.
                        </p>
                        <p className="text-muted mb-6 leading-relaxed">
                            Today, we have grown into one of Colombo’s most trusted rental services, offering a diverse fleet ranging from economical city cars to luxury SUVs. Whether you are driving down the coast to Galle or climbing the hills to Kandy, our vehicles are maintained to the highest standards ensuring your journey is smooth and interruption-free.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                            <p className="text-muted">
                                To deliver the most reliable vehicle rental experience in Sri Lanka through uncompromising safety standards, transparent pricing, and exceptional customer support.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4">Why We Are Different</h3>
                            <ul className="space-y-2 text-muted">
                                <li>• No hidden fees or surprise charges</li>
                                <li>• 24/7 breakdown assistance island-wide</li>
                                <li>• Vehicles under 5 years old</li>
                                <li>• Comprehensive insurance included</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
