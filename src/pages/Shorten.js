// src/pages/Shorten.js
import React, { useState } from 'react';
import axios from 'axios';

const Shorten = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    try {
      const response = await axios.post('http://localhost:5000/shorten', { longUrl });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <h2>Shorten URL</h2>
      <input type="text" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} placeholder="Long URL" />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && <p>Short URL: {shortUrl}</p>}
    </div>
  );
};

export default Shorten;
