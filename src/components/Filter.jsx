import React from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
  flex-grow: 1;
`;

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <FilterWrapper>
      <label>Filter contacts by name:</label>
      <FilterInput
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Enter name to filter"
      />
    </FilterWrapper>
  );
};

export default Filter;
