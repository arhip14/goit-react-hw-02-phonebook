import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <label>Filter contacts by name:</label>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
