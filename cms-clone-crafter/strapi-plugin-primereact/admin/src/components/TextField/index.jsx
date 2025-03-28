
import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import DropdownIcon from '../DropdownIcon';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

const TextField = ({
  attribute,
  onChange,
  name,
  value,
  intlLabel,
  description,
  placeholder,
  disabled,
  error,
  required
}) => {
  const fieldType = attribute?.type || 'string';
  const fieldOptions = attribute?.options || [];
  
  // Properly format options for Dropdown if options exist
  const dropdownOptions = Array.isArray(fieldOptions) 
    ? fieldOptions.map(option => ({
        label: option.label || option,
        value: option.value || option
      }))
    : [];

  // Handle change based on field type
  const handleChange = (e) => {
    if (fieldType === 'select') {
      onChange({ target: { name, value: e.value } });
    } else {
      onChange(e);
    }
  };

  // Define placeholder text
  const placeholderText = placeholder || intlLabel?.defaultMessage || name;

  // Style for wrapping the component to match Strapi UI
  const wrapperStyle = {
    marginBottom: '16px',
    maxWidth: '100%'
  };
  
  // Label style to match Strapi's label styling
  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 500,
    fontSize: '0.75rem',
    color: error ? '#d02b20' : '#32324d'
  };
  
  // Description style
  const descriptionStyle = {
    fontSize: '0.75rem',
    color: '#666687',
    marginTop: '4px'
  };
  
  // Error message style
  const errorStyle = {
    fontSize: '0.75rem',
    color: '#d02b20',
    marginTop: '4px'
  };

  return (
    <div style={wrapperStyle}>
      {intlLabel && (
        <label htmlFor={name} style={labelStyle}>
          {intlLabel.defaultMessage}
          {required && <span style={{ color: '#d02b20' }}> *</span>}
        </label>
      )}
      
      {fieldType === 'select' ? (
        <Dropdown
          id={name}
          name={name}
          value={value}
          options={dropdownOptions}
          onChange={handleChange}
          placeholder={placeholderText}
          disabled={disabled}
          required={required}
          className={error ? 'p-invalid' : ''}
          dropdownIcon={<DropdownIcon />}
          style={{ width: '100%' }}
        />
      ) : (
        <InputText
          id={name}
          name={name}
          value={value || ''}
          onChange={handleChange}
          placeholder={placeholderText}
          disabled={disabled}
          required={required}
          className={error ? 'p-invalid' : ''}
          style={{ width: '100%' }}
        />
      )}
      
      {description && <div style={descriptionStyle}>{description}</div>}
      {error && <div style={errorStyle}>{error}</div>}
    </div>
  );
};

export default TextField;
