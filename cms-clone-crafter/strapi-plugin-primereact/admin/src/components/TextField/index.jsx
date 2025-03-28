
import React from 'react';
import { InputText } from 'primereact/inputtext';
import styled from 'styled-components';

const StyledInputText = styled(InputText)`
  width: 100%;
  font-weight: 400;
  font-size: 0.875rem;
  border-radius: 4px;
  border: 1px solid #dcdce4;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  outline: none;
  transition: all 0.15s ease-in-out;

  &:focus {
    border-color: #4945ff;
    box-shadow: 0 0 0 2px rgba(73, 69, 255, 0.2);
  }

  &:disabled {
    background-color: #f6f6f9;
    color: #666687;
  }

  &.p-invalid {
    border-color: #d02b20;
  }
`;

const TextField = ({
  description,
  disabled = false,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  placeholder,
  required = false,
  value,
  ...rest
}) => {
  const handleChange = (e) => {
    onChange({
      target: {
        name,
        value: e.target.value,
      },
    });
  };

  return (
    <div className="field">
      {intlLabel && (
        <label htmlFor={name} className={error ? 'p-error' : ''}>
          {intlLabel.defaultMessage}
          {required && <span className="required">*</span>}
          {labelAction && <span>{labelAction}</span>}
        </label>
      )}
      <StyledInputText
        id={name}
        name={name}
        value={value || ''}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        className={error ? 'p-invalid' : ''}
        {...rest}
      />
      {error && <small className="p-error">{error}</small>}
      {description && <small className="description">{description.defaultMessage}</small>}
    </div>
  );
};

export default TextField;
