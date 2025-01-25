"use client";

import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const products = [
  {
    id: 1,
    name: "Modern Sofa",
    category: "Living Room",
    price: "$1,299",
    image: "/product-1.jpg",
  },
  {
    id: 2,
    name: "Dining Table",
    category: "Dining Room",
    price: "$899",
    image: "/product-2.jpg",
  },
  {
    id: 3,
    name: "Accent Chair",
    category: "Living Room",
    price: "$499",
    image: "/product-3.jpg",
  },
  {
    id: 4,
    name: "Floor Lamp",
    category: "Lighting",
    price: "$199",
    image: "/product-4.jpg",
  },
  {
    id: 5,
    name: "Coffee Table",
    category: "Living Room",
    price: "$399",
    image: "/product-5.jpg",
  },
  {
    id: 6,
    name: "Bed Frame",
    category: "Bedroom",
    price: "$899",
    image: "/product-6.jpg",
  },
  {
    id: 7,
    name: "Bookshelf",
    category: "Storage",
    price: "$299",
    image: "/product-7.jpg",
  },
  {
    id: 8,
    name: "Desk",
    category: "Office",
    price: "$499",
    image: "/product-8.jpg",
  },
];

const categories = [
  "All",
  "Living Room",
  "Dining Room",
  "Bedroom",
  "Office",
  "Lighting",
  "Storage",
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="products-container">
      <div className="products-header">
        <h1>Our Products</h1>
        <div className="products-search">
          <IoSearchOutline className="search-icon" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="products-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category ? "active-category" : "category"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <div className="product-footer">
                <span>{product.price}</span>
                <button className="view-details">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
