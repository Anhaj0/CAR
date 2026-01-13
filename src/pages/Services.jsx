import React, { useEffect } from 'react';
import { Car, UserCheck, Plane, Calendar } from 'lucide-react';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: 1,
            title: "Self-Drive Rentals",
            icon: <Car size={48} />,
            description: "Enjoy the freedom of exploring Sri Lanka at your own pace. Our self-drive cars are well-maintained, insured, and come with unlimited mileage options.",
            features: ["Valid International Driving Permit required", "Full insurance coverage", "24/7 Roadside assistance"]
        },
        {
            id: 2,
            title: "Car with Driver",
            icon: <UserCheck size={48} />,
            description: "Relax and let our professional drivers handle the traffic. Perfect for tourists who want a stress-free journey with a knowledgeable local guide.",
            features: ["Experienced, English-speaking drivers", "Fuel included in quote", "Flexible itineraries"]
        },
        {
            id: 3,
            title: "Airport Transfers",
            icon: <Plane size={48} />,
            description: "Start your trip smoothly with our reliable airport pickup and drop-off service. We track your flight to ensure we are there when you arrive.",
            features: ["Meet & Greet service", "Fixed pricing (no hidden costs)", "Comfortable AC vehicles"]
        },
        {
            id: 4,
            title: "Long-Term Rentals",
            icon: <Calendar size={48} />,
            description: "staying in Sri Lanka for a month or more? Get our special long-term rates for corporate or personal use.",
            features: ["Significant discounts", "Regular maintenance included", "Replacement vehicle guarantee"]
        }
    ];

    return (
        <div className="pt-20 pb-20">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-4 text-primary">Our Services</h1>
                    <p className="text-xl text-muted max-w-2xl mx-auto">
                        Comprehensive transport solutions tailored to your needs in Sri Lanka.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {services.map(service => (
                        <div key={service.id} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="text-accent mb-6 bg-blue-50 w-20 h-20 flex items-center justify-center rounded-full">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-muted mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-700">
                                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
