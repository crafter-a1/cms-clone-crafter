
import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'primereact/dropdown';
import { Typography } from '@strapi/design-system';
import styled from 'styled-components';

const LabelTypography = styled(Typography)`
  font-weight: 600;
  color: #32324d;
`;

const Description = styled(Typography)`
  color: #666687;
`;

const Error = styled(Typography)`
  color: #d02b20;
  padding-top: 4px;
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const DropdownIcon = ({
  description,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  required,
  value,
  options,
}) => {
  const handleChange = (e) => {
    onChange({ target: { name, value: e.value } });
  };

  // Ensure the options format is correct for PrimeReact Dropdown
  const formattedOptions = options.map((option) => ({
    label: option.label || option.name || option,
    value: option.value !== undefined ? option.value : option,
  }));

  return (
    <InputContainer>
      <LabelTypography variant="pi" fontWeight="bold" textColor="neutral800" as="label" htmlFor={name}>
        {intlLabel.defaultMessage}
        {required && <span style={{ color: '#d02b20' }}>&nbsp;*</span>}
      </LabelTypography>
      {labelAction && <span>{labelAction}</span>}
      {description && (
        <Description variant="pi" as="p">
          {description.defaultMessage}
        </Description>
      )}
      <div style={{ marginTop: '0.5rem' }}>
        <Dropdown
          id={name}
          name={name}
          value={value}
          options={formattedOptions}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
      {error && (
        <Error variant="pi" as="p">
          {error}
        </Error>
      )}
    </InputContainer>
  );
};

DropdownIcon.defaultProps = {
  description: null,
  error: null,
  labelAction: null,
  required: false,
  value: '',
  options: [],
};

DropdownIcon.propTypes = {
  description: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }),
  error: PropTypes.string,
  intlLabel: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }).isRequired,
  labelAction: PropTypes.element,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.any,
  options: PropTypes.array,
};

export default DropdownIcon;
