import React from 'react';

const FilterContacts = ({ onFilter }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <label>
        <input type="text" onChange={onFilter} />
      </label>
    </div>
  );
};

export default FilterContacts;
