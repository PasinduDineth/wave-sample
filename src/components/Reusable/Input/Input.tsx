import React from 'react';
import './Input.scss';

interface InputProps {
  label: string;
  value?: string ;
  name: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, value, onChange, error, name  }, ref) => {
  return (
    <div className='input-field-wrapper'>
        <label htmlFor={name}>{label}</label>
        <input ref={ref} onChange={onChange} value={value} 
         id={name}
         name={name}
         autoComplete="false"
        />
        {error && <p>{error}</p>}
    </div>
  );
}
)

export default Input;