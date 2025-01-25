import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerGrid">
          <div className="footerColumn">
            <h3 className="footerTitle">InteriorCraft</h3>
            <p className="footerText">
              Transforming spaces into beautiful, functional environments that inspire and delight.
            </p>
          </div>
          <div className="footerColumn">
            <h3 className="footerTitle">Quick Links</h3>
            <ul className="footerLinks">
              <li><a href="/" className="footerLink">Home</a></li>
              <li><a href="/products" className="footerLink">Products</a></li>
              <li><a href="/services" className="footerLink">Services</a></li>
              <li><a href="/about" className="footerLink">About</a></li>
              <li><a href="/contact" className="footerLink">Contact</a></li>
            </ul>
          </div>
          <div className="footerColumn">
            <h3 className="footerTitle">Services</h3>
            <ul className="footerList">
              <li>Interior Design</li>
              <li>Space Planning</li>
              <li>Color Consultation</li>
              <li>Furniture Selection</li>
              <li>Project Management</li>
            </ul>
          </div>
          <div className="footerColumn">
            <h3 className="footerTitle">Contact Info</h3>
            <ul className="footerList">
              <li>XYZ Street</li>
              <li>Karachi, Pakistan</li>
              <li>Phone: +92 331-2234555</li>
              <li>Email: info@interiorcraft.com</li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>&copy; {new Date().getFullYear()} InteriorCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
