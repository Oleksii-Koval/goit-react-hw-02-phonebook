import React from 'react';
import css from './FilterContacts.module.css';

const FilterContacts = ({ onFilter, children }) => {
  return (
    <div className={css.filterContainer}>
      <h2 className={css.title}>Find contacts by name</h2>
      <label className={css.label}>
        <input type="text" onChange={onFilter} className={css.input} />
      </label>
      {children}
    </div>
  );
};
export default FilterContacts;
