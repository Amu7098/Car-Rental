import React from "react";
import { cityList } from "../assets/assets";
import { useState } from "react";

function Banner() {
  const [pickupLocation, setPickupLocation] = useState("");
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Luxury Cars On Rent</h1>
        <div className="row container mt-4">
          <div className="col-lg-3">
            <select
              required
              className="form-select"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              id=""
            >
              <option value="">Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="text-white mt-2 text-center fw-bold">
              {pickupLocation ? pickupLocation : "Please Select Location"}
            </p>
            <div className="mt-4">
              <input type="date" id="return-date" className="form-control" />
              <p className="text-white mt-2 text-center fw-bold">Return Date</p>
            </div>
          </div>
          <div className="col-lg-3">
            <input type="date" id="pickup-date" className="form-control" />
            <p className="text-white mt-2 fw-bold">Pick Up Date</p>
            <button className="btn btn-primary mt-2 fw-bold w-50 fs-5  rounded-pill shadow px-4 py-2 hover-scale">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
