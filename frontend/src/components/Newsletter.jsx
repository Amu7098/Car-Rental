import React from "react";

function Newsletter() {
  return (
    <div className="newsletter-section py-5 mt-4">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Never Miss a Deal</h2>

        <p className="text-muted mb-4">
          Subscribe to get the latest offers, new arrivals, and exclusive
          discounts
        </p>

        <form className="newsletter-form d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="form-control newsletter-input"
          />

          <button className="btn btn-dark px-4 rounded-pill">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
