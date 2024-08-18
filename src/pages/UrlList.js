// src/pages/UrlList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const response = await axios.get('http://localhost:5000/urls');
      setUrls(response.data);
    };
    fetchUrls();
  }, []);

  return (
    <div>
      <h2>Created URLs</h2>
      <table>
        <thead>
          <tr>
            <th>Long URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url.shortUrl}>
              <td>{url.longUrl}</td>
              <td>{url.shortUrl}</td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlList;
