import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserReview from './UserReview.js'; // Ruta corregida
import ReviewForm from './ReviewForm.js'; // Ruta corregida

const UserReviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log("placeId:", placeId);
    // Lógica para obtener las reseñas basada en placeId
  }, [placeId]);

  const addReview = (review) => {
    console.log("Nuevo review añadido:", review);
    setReviews([...reviews, review]);
  };

  return (
    <div className="user-reviews">
      <h2>Opiniones de Usuarios</h2>
      {reviews.map((review, index) => (
        <UserReview key={index} review={review} />
      ))}
      <ReviewForm onAddReview={addReview} />
    </div>
  );
};

// Validación de las props
UserReviews.propTypes = {
  placeId: PropTypes.string.isRequired, // Añade la validación de placeId
};

export default UserReviews;
