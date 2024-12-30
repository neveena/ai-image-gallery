import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateImages = async () => {
    if (!prompt) return alert('Please enter a prompt');
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          prompt,
          n: 3, // Generate 3 images for the gallery
          size: '1024x1024',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Using environment variable
          },
        }
      );
      const urls = response.data.data.map((item: { url: string }) => item.url);
      setImages((prevImages) => [...prevImages, ...urls]); // Append new images to gallery
    } catch (error) {
      console.error('Error generating images:', error);
      alert('Failed to generate images. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>AI Image Gallery</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a prompt"
        style={{ width: '300px', padding: '10px', marginBottom: '10px' }}
      />
      <br />
      <button
        onClick={generateImages}
        style={{ padding: '10px 20px', marginBottom: '20px' }}
        disabled={isLoading}
      >
        {isLoading ? 'Generating...' : 'Generate Images'}
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Generated ${index}`} style={{ width: '300px' }} />
        ))}
      </div>
    </div>
  );
};

export default App;
