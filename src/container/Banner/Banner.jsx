import React, { useState, useEffect } from 'react';
import { AppWrap } from '../../wrapper';
import { client } from '../../client';
import './Banner.css'; // Import the CSS file for styling

const Banner = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const query = '*[_type == "banner"]';

    client
      .fetch(query)
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setBanner(data[0]);
        } else {
          console.error('No banner data found.');
        }
      })
      .catch((error) => console.error('Error fetching banner:', error));
  }, []);

  if (!banner) {
    return null;
  }

  const bannerStyle = {
    backgroundImage: `url(${'https://cdn.sanity.io/images/66v7us5f/production/29f788aaf0602c667ab3c4c936527d24fad0f34d-1664x951.png'})`,
  };

  return (
    <div className="banner" style={bannerStyle}>
      <a href="http://localhost:3000/#contact"><button className="buttons1">{banner.buttonText}</button></a>
    </div>
  );
};

export default AppWrap(Banner, 'home');

