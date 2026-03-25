import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../assets/images/logo.svg"
import h1 from "../assets/images/h1.png"

export default function Footer() {
  return (
    <>
      <div className="footer-section py-5">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 mb-4">
                <figure><img src={logo} alt="Logo" /></figure>
              <div className="healthyme-title d-flex align-items-center">
              <a href="#"><h3>HealthyMe</h3></a>
              <img src={h1} alt="plus" className="plus-icon" />
            </div>
              <p className="footer-desc">
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
              </p>

              <div className="social-icons d-flex gap-3">
                <FaFacebookF />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
                <FaYoutube />
              </div>
            </div>

            {/* Product */}
            <div className="col-lg-2 col-md-6 col-6 mb-4">
              <h5 className="footer-title">Product</h5>
              <ul className="footer-links">
                <li>Features</li>
                <li>Pricing</li>
                <li>Case studies</li>
                <li>Reviews</li>
                <li>Updates</li>
              </ul>
            </div>

            {/* Company */}
            <div className="col-lg-2 col-md-6 col-6 mb-4">
              <h5 className="footer-title">Company</h5>
              <ul className="footer-links">
                <li>About</li>
                <li>Contact us</li>
                <li>Careers</li>
                <li>Culture</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Support */}
            <div className="col-lg-2 col-md-6 col-6 mb-4">
              <h5 className="footer-title">Support</h5>
              <ul className="footer-links">
                <li>Getting started</li>
                <li>Help center</li>
                <li>Server status</li>
                <li>Report a bug</li>
                <li>Chat support</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6 col-6 mb-4">
              <h5 className="footer-title">Contacts us</h5>
              <ul className="footer-links">
                <li>contact@company.com</li>
                <li>(414) 687 - 5892</li>
                <li>794 Mcallister St.<br />San Francisco, 94102</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="footer-bottom py-3">
        <div className="container d-flex justify-content-between flex-wrap">
          <p className="mb-0">Copyright © 2022</p>
          <p className="mb-0">
            All Rights Reserved | <span className="link">Terms and Conditions</span> | <span className="link">Privacy Policy</span>
          </p>
        </div>
      </footer>
    </>
  );
}