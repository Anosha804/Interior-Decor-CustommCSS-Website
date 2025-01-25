import Image from 'next/image';
import { TiArrowRightThick } from "react-icons/ti";

const services = [
  {
    title: "Interior Design",
    description: "Complete interior design services for residential and commercial spaces. Our expert designers will work with you to create a space that reflects your style and meets your needs.",
    image: "/services-1.jpg",
    features: ["Space Planning", "Color Consultation", "Furniture Selection", "Project Management"]
  },
  {
    title: "Space Planning",
    description: "Optimize your space for both functionality and aesthetics. We create detailed floor plans and 3D visualizations to help you make the most of your space.",
    image: "/services-2.jpg",
    features: ["Floor Plans", "Traffic Flow Analysis", "Furniture Layout", "3D Visualization"]
  },
  {
    title: "Furniture Selection",
    description: "Let us help you choose the perfect furniture pieces for your space. We work with top manufacturers to provide high-quality, stylish furniture that fits your budget.",
    image: "/services-3.jpg",
    features: ["Custom Furniture", "Retail Sourcing", "Budget Planning", "Installation"]
  },
  {
    title: "Color Consultation",
    description: "Create the perfect atmosphere with our professional color consultation services. We'll help you choose colors that complement your space and create the desired mood.",
    image: "/services-4.jpg",
    features: ["Color Psychology", "Paint Selection", "Material Coordination", "Lighting Integration"]
  }
];

export default function Services() {
  return (
    <div className="services-container">
      {/* Hero Section */}
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Transform your space with our professional interior design services. We
          offer comprehensive solutions tailored to your needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="image-wrapper">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="service-image"
              />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <h4>Features:</h4>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <TiArrowRightThick className="icon" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
