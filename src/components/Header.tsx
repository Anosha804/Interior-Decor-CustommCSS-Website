"use client";

import { useState } from "react";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { LuSofa } from "react-icons/lu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header">
      <div className="container">
        <div className="navContent">
          <div className="logo">
            <Link href="/" className="logoLink">
              <LuSofa className="logoIcon" />
              <span className="logoText">InteriorCraft</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navLinks desktopNav">
            <Link href="/" className="navLink">
              Home
            </Link>
            <Link href="/products" className="navLink">
              Products
            </Link>
            <Link href="/services" className="navLink">
              Services
            </Link>
            <Link href="/about" className="navLink">
              About
            </Link>
            <Link href="/contact" className="navLink">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="mobileNavButton">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`menuButton ${isOpen ? "active" : ""}`}
            >
              {isOpen ? <IoMdClose className="icon" /> : <RiMenu3Line className="icon" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="mobileNav">
            <Link href="/" className="mobileNavLink" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/products" className="mobileNavLink" onClick={() => setIsOpen(false)}>
              Products
            </Link>
            <Link href="/services" className="mobileNavLink" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="/about" className="mobileNavLink" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="mobileNavLink" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
