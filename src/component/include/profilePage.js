import React, {useEffect, useState} from 'react';
import './profilePage.css';
function ProfilePage({doctor}){
  let theRating = [];
  let rating = parseFloat(doctor.rating);
  let i = 1;
  for(; i <= rating;i++){
    theRating.push(<span className="icon-star"><i className="fa-solid fa-star"></i></span>);
  }
  if(rating - i + 1 > 0.1){
    theRating.push(<span className="icon-star"><i className="fa-solid fa-star-half-stroke"></i></span>);
  }
  while (theRating.length < 5){
    theRating.push(<span className="icon-star"><i className="fa-regular fa-star"></i></span>);
  }
  return (
    <div className="profile-page">
      <main className="profile-main">
        <h2 className='doctor-name'> <i className="fa-solid fa-address-card"></i> {doctor.name}</h2>
        <div className="profile-details">
          <div className='profile-detail'><span className="icon-phone"><i className="fa-solid fa-phone"></i> Téléphone:</span> {doctor.tele} </div>
          <div className='profile-detail'><span className="icon-speciality"><i className="fa-solid fa-stethoscope"></i> Spécialité:</span> {doctor.speciality} </div>
          <div className='profile-detail'><span className="icon-price"><i className="fa-solid fa-tag"></i> Prix:</span> {doctor.consultation_price} </div>
          <div className='profile-detail'><span className="icon-availability"><i className="fa-solid fa-clock"></i> Disponibilité:</span> {doctor.hours_of_work} </div>
          <div className='profile-detail'><span className="icon-location"><i className="fa-solid fa-location-dot"></i> Localisation:</span> {doctor.localisation} </div>
        </div>
        <div className='description-line'></div>
        <p className="profile-description">
          {doctor.description}
        </p>
        <div className="profile-rating">
          {theRating}
        </div> 
      </main>
    </div>
  );
};

export default ProfilePage;