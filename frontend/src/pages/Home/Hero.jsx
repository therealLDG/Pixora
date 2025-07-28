import React, { useState } from "react";
import Images from "./Images";

export default function Hero() {
  // 1. Use state to store the user's input prompt
  const [prompt, setPrompt] = useState("");

  // 2. Use state to store the URL of the image to display
  const [imageUrl, setImageUrl] = useState([]);

  // 3. (Optional but recommended) Use state to track loading
  const [isLoading, setIsLoading] = useState(false);

  // 4. This function will handle the API call
  const generateAndShowImage = async () => {
    if (!prompt) {
      alert("Please enter a prompt!");
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/images/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: prompt }), // Send the prompt to the backend
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate image.");
      }

      const data = await response.json();
      setImageUrl((prevUrls) => [data.imageUrl, ...prevUrls]);
      console.log(imageUrl);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading, regardless of success or error
      setPrompt("");
    }
  };

  return (
        <>
    <div className="home-hero-container">
      <div className="home-hero-image">
        <div className="image-backdrop">
          {/* This img src is now controlled by React state */}
          <img src="/images/cozy cat.jpeg" alt={prompt || "AI generated art"} />
        </div>
      </div>

      <div className="home-hero-content">
        <h1>AI Art Generator:</h1>
        <p style={{ fontSize: "2.5rem", fontWeight: "500" }}>
          All the best AI Art models in one place
        </p>
        <p style={{ fontWeight: "500" }}>
          Create amazing artworks in seconds using our AI Art Generator. Use
          Flux, DALL-e 3, Google Imagen, Stable Diffusion, Ideogram and more.
          Try our AI art generator no
        </p>

        <div className="hero-home-input">
          <input
            type="text"
            placeholder="E.g. A cat wearing sunglasses by the pool"
            value={prompt} // Bind the input's value to state
            onChange={(e) => setPrompt(e.target.value)} // Update state on every keystroke
            disabled={isLoading} // Disable input while loading
          />
          <button
            onClick={generateAndShowImage}
            className="btn btn-dark" style={{backgroundColor:"#e9506d",border:"none"}}
            disabled={isLoading}
          >
            {/* Show a different message while loading */}
            {isLoading ? (
              "Creating..."
            ) : (
              <>
                Create <i className="fa-solid fa-arrow-right"></i>
              </>
            )}
          </button>
        </div>
        <p style={{ color: "#bcc1c3", fontWeight: "500" }}>
          No payment or credit card required
        </p>
      </div>
    </div>
    <Images images={imageUrl} isLoading={isLoading}/>
</>
  );
}
