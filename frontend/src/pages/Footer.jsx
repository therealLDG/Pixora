import React from "react";

export default function Footer() {
  return (
    <div className="footerContainer" style={{ backgroundColor: "#252b30" }}>
      <div className="row pt-5">
        <div className="col"></div>
        <div className="col">
          <h1 style={{ color: "#dee2e3", fontSize: "1.5rem" }}>🤖NightCafe</h1>
          <ul style={{ listStyle: "none", color: "#9ba1a4" }}>
            <li>About NightCafe</li>
            <li>Feedback / Support</li>
            <li>Knowledge Base</li>
            <li>Pricing</li>
            <li>Careers</li>
            <li>Gift Cards</li>
            <li>Press Kit</li>
            <li>Affiliate Program</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="col">
          <h1 style={{ color: "#dee2e3", fontSize: "1.5rem" }}>🚀 Features</h1>
          <ul style={{ listStyle: "none", color: "#9ba1a4" }}>
            <li>AI Art Generator</li>
            <li>Stable Diffusion Image Generator</li>
            <li>Stable Diffusion SDXL 1.0</li>
            <li>Flux Image Generator</li>
            <li>Flux Kontext AI</li>
            <li> HiDream Image Generator</li>
            <li>DALL·E 3 Image Generator</li>
            <li>Ideogram 2.0 Image Generator</li>
            <li>Imagen Image Generator</li>
            <li>AI Image Generator</li>
            <li>AI Selfie Generator</li>
            <li>AI Avatar Generator</li>
            <li>Photo to Painting Online</li>
            <li>Creative Upscaler</li>
            <li>Image to Video AI Generator</li>
            <li>Text to Video AI Generator</li>
            <li>AI Tools</li>
          </ul>
        </div>
        <div className="col">
          <h1 style={{ color: "#dee2e3", fontSize: "1.5rem" }}>
            🔒 Secure Payments
          </h1>
          <ul style={{ listStyle: "none", color: "#9ba1a4" }}>
            <li>
              PCI compliant payments powered by Paddle and PayPal and Shopify
            </li>
          </ul>
        </div>
        <div className="col"></div>
      </div>
      <div className="row p-5">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col-2" style={{ color: "#9ba1a4", fontSize:"0.8rem" }}>
          Copyright © NightCafe Studio Pty Ltd
        </div>
        <div className="col" style={{ color: "#9ba1a4", fontSize:"0.8rem"  }}>
          Community Standards
        </div>
        <div className="col" style={{ color: "#9ba1a4", fontSize:"0.8rem" }}>
          Acknowledgements
        </div>
        <div className="col" style={{ color: "#9ba1a4", fontSize:"0.8rem" }}>
          {" "}
          Privacy Policy
        </div>
        <div className="col" style={{ color: "#9ba1a4" , fontSize:"0.8rem"}}>
          Terms of Service
        </div>
        <div className="col" style={{ color: "#9ba1a4", fontSize:"0.8rem" }}>
          Refund Policy
        </div>
        <div className="col" style={{ color: "#9ba1a4", fontSize:"0.8rem" }}>
          Sitemap
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    </div>
  );
}
