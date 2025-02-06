import React from 'react';

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre..."
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="10"
        placeholder="Note minimale"
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;