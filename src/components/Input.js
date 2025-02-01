import React from 'react';

function Input({ value, onChange, placeholder, type = 'text', name }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      name={name}
      className="input"
    />
  );
}

export default Input;
