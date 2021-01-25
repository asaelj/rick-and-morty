import React from 'react';
import '../../assets/components/Input.css';

const Input = ({ onChange }) => (
  <div className="filter">
    <input
      className="filter__input"
      type="text"
      placeholder="Nombre de personaje"
      onChange={onChange}
      />
  </div>
);

export default Input;
