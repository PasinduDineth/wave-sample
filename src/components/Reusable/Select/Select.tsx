import React from 'react';
import './Select.scss';
interface IOptions {
  id: number;
  name: string;
  code: string;
}

interface SelectProps {
  label: string;
  defaultValue?: string;
  options: IOptions[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  disabled?: boolean;
  name: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, defaultValue, options, onChange, disabled, name  }, ref) => {
    return (
      <div className='select-field-wrapper'>
        <label htmlFor={name}>{label}</label>
        <select defaultValue={defaultValue} disabled={disabled} ref={ref} onChange={onChange} id={name} name={name} autoComplete="false">
          {options.map((value) => (
            <option key={value.id} value={value.code}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
