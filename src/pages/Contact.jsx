import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section">
            <div className="container">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-6 text-primary">Contact Us</h1>
                    <p className="text-xl text-muted">
                        Have questions? We are here to help you plan your journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-full text-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
                                    <p className="text-muted mb-1">+94 77 123 4567</p>
                                    <p className="text-muted">+94 11 234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-full text-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <p className="text-muted">info@lankarental.com</p>
                                    <p className="text-muted">bookings@lankarental.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-full text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Location</h3>
                                    <p className="text-muted">
                                        123 Galle Road,<br />
                                        Colombo 03,<br />
                                        Sri Lanka
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a href="https://wa.me/94771234567" className="btn btn-whatsapp w-full flex items-center justify-center gap-2">
                                <MessageCircle size={20} /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6">Send an Enquiry</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Your Name</label>
                                <input type="text" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email Address</label>
                                <input type="email" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone Number</label>
                                <input type="tel" placeholder="+94 77..." />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Message</label>
                                <textarea rows="4" placeholder="I am interested in..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
