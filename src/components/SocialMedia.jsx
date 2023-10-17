import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/SinghAakash777"> <BsTwitter/></a>
    </div>
    <div><a href="https://www.facebook.com/planyortrip">
      <FaFacebookF /></a>
    </div>
    <div><a href="https://instagram.com/planyortrip?igshid=YmMyMTA2M2Y=">
      <BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
