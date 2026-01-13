import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Fuel, LifeBuoy } from 'lucide-react';
import './VehicleCard.css';

const VehicleCard = ({ car }) => {
    const { id, name, type, image, transmission, passengers, fuel, price, featured } = car;

    const handleImageError = (e) => {
        e.target.src = 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop';
        e.target.onerror = null;
    };

    return (
        <div className={`card vehicle-card ${featured ? 'featured' : ''}`}>
            <div className="card-image-wrapper">
                <img
                    src={image}
                    alt={name}
                    className="card-image"
                    loading="lazy"
                    onError={handleImageError}
                />
                <span className="vehicle-tag">{type}</span>
            </div>

            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="transmission-badge">{transmission}</p>

                <div className="vehicle-specs">
                    <div className="spec-item">
                        <Users size={16} />
                        <span>{passengers} Seats</span>
                    </div>
                    <div className="spec-item">
                        <Fuel size={16} />
                        <span>{fuel}</span>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="price-info">
                        <span className="price-label">Daily Rate</span>
                        <span className="card-price">${price}</span>
                    </div>
                    <Link to={`/listings/${id}`} className="btn btn-primary btn-sm">
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VehicleCard;
