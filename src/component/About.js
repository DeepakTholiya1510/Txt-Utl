import React from 'react';

export default function About() {
  return (
    <div className="container">
      <div className="image-section">
        <img 
          src={`${process.env.PUBLIC_URL}/photo_2024-06-12_22-55-43.jpg`} 
          alt="Sample" 
          className="image"
        />
      </div>
      <div className="text-section">
        <h1>𝔹𝔸𝕃𝔸𝕁𝕀</h1>
        <h2>𝚜𝚝𝚘𝚗𝚎 & 𝚌𝚞𝚝𝚝𝚒𝚗𝚐𝚜</h2>
        <p>This is a sample text that is displayed on the right part of the screen.</p>
      </div>
    </div>
  );
}
