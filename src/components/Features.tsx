import React from "react";
import Image from "next/image";

const Features = () => {
  const products = [
    { name: "Modern Sofa", price: "$1,299", image: "/product-1.jpg" },
    { name: "Dining Table", price: "$899", image: "/product-2.jpg" },
    { name: "Accent Chair", price: "$499", image: "/product-3.jpg" },
    { name: "Floor Lamp", price: "$199", image: "/product-4.jpg" },
  ];

  return (
    <div className="features-section">
      <div className="features-container">
        <h2 className="features-title">Featured Products</h2>
        <div className="features-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image-wrapper">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  className="product-image"
                />
              </div>
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
