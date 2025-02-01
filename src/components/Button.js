import React from 'react';

function Button({ onClick, text, type = 'button', className = '' }) {
  return (
    <button onClick={onClick} type={type} className={`btn ${className}`}>
      {text}
    </button>
  );
}

export default Button;
