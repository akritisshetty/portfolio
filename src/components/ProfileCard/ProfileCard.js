import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, title, imageUrl, linkedin, github }) => {
  return (
    <div className="profile-card">
      <img src={imageUrl} alt={name} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-title">{title}</p>
      <div className="profile-links">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
};

export default ProfileCard;