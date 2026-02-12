import React from "react";
import Image from "next/image";
import "./banner.css";
import { containerClass } from "@/lib/variables";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className={containerClass + " banner-container"}>
        {/* Left Content */}
        <div className="banner-content">
          <h1 className="banner-title">
            Selection of the World's Best Sellers
          </h1>
          <p className="banner-description">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia.
          </p>
          <button className="banner-cta">Shop Now</button>
        </div>

        {/* Right Image */}
        <div className="banner-image-wrapper">
          <div className="banner-image-container">
            <Image
              src="/images/banner-book.png"
              alt="Best Selling Books"
              width={600}
              height={400}
              className="banner-book-image"
              priority
            />
            {/* Decorative floating elements */}
            <div className="floating-element element-1"></div>
            <div className="floating-element element-2"></div>
            <div className="floating-element element-3"></div>
            <div className="floating-element element-4"></div>
            <div className="floating-element element-5"></div>
            <div className="floating-element element-6"></div>
          </div>
        </div>
      </div>

      {/* Background SVG */}
      <div className="banner-bg-svg">
        <Image
          src="/images/banner-bg.svg"
          alt=""
          fill
          className="banner-bg-image"
          priority
        />
      </div>

      {/* Background decorative shapes */}
      <div className="banner-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Banner;
