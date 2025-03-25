
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Message } from 'primereact/message';

const InputWithAffixes = ({ 
  name, 
  value, 
  onChange, 
  label, 
  error, 
  description,
  required,
  prefix,
  suffix,
  type = 'text', // 'text' or 'number'
  numberOptions = {} // mode, currency, locale, etc. for InputNumber
}) => {
  const handleChange = (e) => {
    const newValue = type === 'number' ? e.value : e.target.value;
    onChange({ target: { name, value: newValue } });
  };

  return (
    <div className="p-field">
      <label htmlFor={name} className={required ? 'required-field' : ''}>
        {label}
      </label>
      <span className="p-input-icon-left p-input-icon-right">
        {prefix && <i className="pi pi-prefix">{prefix}</i>}
        
        {type === 'text' ? (
          <InputText
            id={name}
            name={name}
            value={value || ''}
            onChange={handleChange}
            className={error ? 'p-invalid' : ''}
          />
        ) : (
          <InputNumber
            id={name}
            name={name}
            value={value || null}
            onValueChange={handleChange}
            mode={numberOptions.mode || 'decimal'}
            currency={numberOptions.currency || 'USD'}
            locale={numberOptions.locale || 'en-US'}
            className={error ? 'p-invalid' : ''}
          />
        )}
        
        {suffix && <i className="pi pi-suffix">{suffix}</i>}
      </span>
      {description && <small className="p-d-block">{description}</small>}
      {error && <Message severity="error" text={error} />}
    </div>
  );
};

export default InputWithAffixes;
