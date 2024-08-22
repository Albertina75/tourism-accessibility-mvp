import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ReviewForm = ({ onAddReview }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      onAddReview({ name, comment, rating });
      setName('');
      setComment('');
      setRating(1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Comentario:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Calificación:
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit">Añadir Reseña</button>
    </form>
  );
};

ReviewForm.propTypes = {
  onAddReview: PropTypes.func.isRequired,
};

export default ReviewForm;
