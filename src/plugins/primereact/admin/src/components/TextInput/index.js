
import React from 'react';
import PropTypes from 'prop-types';
import { InputText } from 'primereact/inputtext';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  .p-inputtext {
    width: 100%;
    padding: 0.75rem;
    border-radius: 4px;
  }
`;

const TextInput = ({
  value,
  onChange,
  name,
  attribute,
  required,
  error,
  disabled,
  intlLabel,
  description,
}) => {
  const { formatMessage } = useIntl();
  const label = intlLabel?.id ? formatMessage(intlLabel) : name;

  return (
    <StyledInputWrapper>
      <InputText
        id={name}
        value={value || ''}
        onChange={(e) => {
          onChange({ target: { name, value: e.target.value } });
        }}
        placeholder={label}
        required={required}
        disabled={disabled}
        className={error ? 'p-invalid' : ''}
        aria-describedby={`${name}-help`}
      />
      {error && <small id={`${name}-help`} className="p-error">{error}</small>}
      {description && <small id={`${name}-help`}>{description?.id ? formatMessage(description) : description}</small>}
    </StyledInputWrapper>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  attribute: PropTypes.object.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  intlLabel: PropTypes.object,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

TextInput.defaultProps = {
  value: '',
  required: false,
  error: null,
  disabled: false,
  intlLabel: null,
  description: null,
};

export default TextInput;
