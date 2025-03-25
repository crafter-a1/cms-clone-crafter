
import React from 'react';
import { InputMask as PrimeInputMask } from 'primereact/inputmask';
import { Message } from 'primereact/message';

const InputMask = ({ 
  name, 
  value, 
  onChange, 
  label, 
  error, 
  description,
  required,
  mask,
  slotChar = '_',
  autoClear = true
}) => {
  const handleChange = (e) => {
    onChange({ target: { name, value: e.target.value } });
  };

  return (
    <div className="p-field">
      <label htmlFor={name} className={required ? 'required-field' : ''}>
        {label}
      </label>
      <PrimeInputMask
        id={name}
        name={name}
        value={value || ''}
        onChange={handleChange}
        mask={mask || '(999) 999-9999'} // Default phone mask
        slotChar={slotChar}
        autoClear={autoClear}
        className={error ? 'p-invalid' : ''}
      />
      {description && <small className="p-d-block">{description}</small>}
      {error && <Message severity="error" text={error} />}
    </div>
  );
};

export default InputMask;
