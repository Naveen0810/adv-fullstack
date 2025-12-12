import React from "react";
import ImageCarousel from "./bootstrapcomponents/ImageCarousel";
import ImageGrid from "./bootstrapcomponents/ImageGrid";
import "./styles/home.css"; 
export default function Home() {
  return (
    <div className="home-page">
      <h2 className="home-title">Welcome to My Page</h2>
      <ImageCarousel />
      <div className="hr-sep"></div>
      <div className="image-grid">
        <ImageGrid />
      </div>
    </div>
  );
}

