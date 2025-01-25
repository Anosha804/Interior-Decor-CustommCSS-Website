import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <Image
          src="/hero.jpg"
          alt="Modern interior"
          fill
          className="heroImage"
          priority
        />
        <div className="overlay" />
        <div className="heroContent">
          <h1 className="heroTitle">Transform Your Space</h1>
          <p className="heroDescription">
            Create the home of your dreams with our expert interior design
            services and curated collection of furniture.
          </p>
          <Link href="/contact" className="heroButton">
            Get Started
            <RiArrowRightLine className="heroButtonIcon" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Hero;
