
import React from 'react';
import PropTypes from 'prop-types';
import { Button as PrimeButton } from 'primereact/button';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

const StyledButtonWrapper = styled.div`
  .p-button {
    margin: 5px 0;
  }
`;

const Button = ({
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
  const label = intlLabel?.id ? formatMessage(intlLabel) : (value || name);
  
  // Strapi custom fields need to handle the value
  // For a button, we'll use the value as the button label
  // and implement a basic click handler that updates the value

  const handleClick = () => {
    // For a button, we could toggle states or increment a counter
    // Here we'll just timestamp the last click
    const newValue = `Clicked at ${new Date().toLocaleTimeString()}`;
    onChange({ target: { name, value: newValue } });
  };

  return (
    <StyledButtonWrapper>
      <PrimeButton
        id={name}
        label={label}
        onClick={handleClick}
        disabled={disabled}
        className={error ? 'p-invalid' : ''}
        aria-describedby={`${name}-help`}
      />
      {error && <small id={`${name}-help`} className="p-error">{error}</small>}
      {description && <small id={`${name}-help`}>{description?.id ? formatMessage(description) : description}</small>}
    </StyledButtonWrapper>
  );
};

Button.propTypes = {
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

Button.defaultProps = {
  value: '',
  required: false,
  error: null,
  disabled: false,
  intlLabel: null,
  description: null,
};

export default Button;
