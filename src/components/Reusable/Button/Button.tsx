import React from 'react';
import "./Button.scss"

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', disabled = false, onClick, children }) => {
  return (
    <button type={type} disabled={disabled} className='button-element' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
