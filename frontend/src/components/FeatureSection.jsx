import React from "react";
import { dummyCarData } from "../assets/assets";
import { useNavigate } from 'react-router-dom';


function FeatureSection() {
  const navigate = useNavigate()
  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold mb-2">Featured Vehicles</h2>
      <h6 className="text-center text-muted mb-5">
        Explore our selection of premium vehicles available for your every need
      </h6>

      <div className="row g-4">
        {dummyCarData.map((car) => (
          <div className="col-md-6 col-lg-4" key={car.id}>
            <div
              className="card h-100 shadow-sm border-0 rounded-4 vehicle-card"
              onClick={() => {
                navigate(`car-details/${car.id}`);
              }}
              style={{ cursor: "pointer" }}
            >
              {/* Image */}
              <div className="overflow-hidden rounded-top-4">
                <img
                  src={car.image}
                  className="card-img-top img-fluid vehicle-img"
                  alt={car.model}
                />
              </div>

              <div className="card-body d-flex flex-column">
                {/* Title */}
                <h5 className="fw-bold mb-2">
                  {car.brand} {car.model}
                </h5>

                {/* Details Row */}
                <div className="row small text-muted mb-2">
                  <div className="col-6">🚗 {car.seating_capacity} Seats</div>
                  <div className="col-6">⛽ {car.fuel_type}</div>
                </div>

                <div className="row small text-muted mb-3">
                  <div className="col-6">⚙ {car.transmission}</div>
                  <div className="col-6">📍 {car.location}</div>
                </div>

                {/* Description */}
                <p className="text-muted small flex-grow-1">
                  {car.description}
                </p>

                {/* Price & Availability */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div>
                    <h6 className="mb-0 fw-bold text-dark">
                      ₹{car.pricePerDay}
                    </h6>
                    <small className="text-muted">per day</small>
                  </div>

                  {car.isAvailable ? (
                    <span className="badge bg-success px-3 py-2 rounded-pill">
                      Available
                    </span>
                  ) : (
                    <span className="badge bg-secondary px-3 py-2 rounded-pill">
                      Unavailable
                    </span>
                  )}
                </div>

                {/* Button */}
                <button className="btn btn-dark w-100 mt-3 rounded-pill">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
