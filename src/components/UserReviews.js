import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import UserReview from './UserReview';
import ReviewForm from './ReviewForm';

const UserReviews = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    // Lógica para obtener reseñas
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/reviews?placeId=${placeId}`);
        if (!response.ok) {
          throw new Error('Error al obtener las reseñas');
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); // Termina el estado de carga
      }
    };

    fetchReviews();
  }, [placeId]); // `placeId` como dependencia para volver a ejecutar el efecto si cambia

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  if (loading) {
    return <div>Cargando reseñas...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="user-reviews">
      <h2>Opiniones de Usuarios</h2>
      {reviews.length === 0 ? (
        <p>No hay reseñas todavía.</p>
      ) : (
        reviews.map((review, index) => (
          <UserReview key={index} review={review} />
        ))
      )}
      <ReviewForm onAddReview={addReview} />
    </div>
  );
};

UserReviews.propTypes = {
  placeId: PropTypes.string.isRequired,
};

export default UserReviews;
