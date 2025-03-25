
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';

const InputRegex = ({ 
  name, 
  value, 
  onChange, 
  label, 
  error, 
  description,
  required,
  pattern,
  patternErrorMessage = 'Input does not match the required pattern'
}) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    
    if (pattern) {
      const regex = new RegExp(pattern);
      const valid = regex.test(newValue);
      setIsValid(valid);
      setErrorMessage(valid ? '' : patternErrorMessage);
    }
    
    onChange({ target: { name, value: newValue } });
  };

  return (
    <div className="p-field">
      <label htmlFor={name} className={required ? 'required-field' : ''}>
        {label}
      </label>
      <InputText
        id={name}
        name={name}
        value={value || ''}
        onChange={handleChange}
        className={!isValid || error ? 'p-invalid' : ''}
      />
      {description && <small className="p-d-block">{description}</small>}
      {!isValid && <Message severity="error" text={errorMessage} />}
      {error && <Message severity="error" text={error} />}
    </div>
  );
};

export default InputRegex;
