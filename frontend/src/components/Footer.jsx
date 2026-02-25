import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
   const navigate=useNavigate()
  return (
    <footer className="footer-section mt-2 pt-3">
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Car Rent</h5>
            <p className=" text-white  small">
              Premium car rental service with a wide selection of luxury and
              everyday vehicles for all your needs.
            </p>

            <div className="d-flex gap-3 mt-3">
              <TiSocialFacebook className="footer-icon" />
              <TiSocialInstagram className="footer-icon" />
              <TiSocialTwitter className="footer-icon" />
              <FaEnvelope className="footer-icon" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/CarDetails")}>Cars</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Book Now</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Resources</h5>
            <ul className="list-unstyled footer-links">
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-6 col-lg-3">
            <h5 className="fw-bold mb-3">Contact</h5>
            <p className="small">
              <FaMapMarkerAlt className="me-2" />
              Kharar, Punjab
            </p>
            <p className="small">
              <FaPhoneAlt className="me-2" />
              +91 98765 43210
            </p>
            <p className="small">
              <FaEnvelope className="me-2" />
              amanthakur.v18@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className="my-4" />

        <div className="  text-center pb-3 small text-white ">
          © {new Date().getFullYear()} Car Rent. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
