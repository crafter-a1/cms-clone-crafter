
import React from 'react';
import { Typography } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Dropdown } from 'primereact/dropdown';
import styled from 'styled-components';
import DropdownIcon from '../DropdownIcon';

const StyledDropdown = styled(Dropdown)`
  width: 100%;
  height: 2.5rem;
  border: 1px solid #dcdce4;
  border-radius: 4px;
  background-color: #ffffff;
  outline: none;
  
  &:focus {
    border-color: #4945ff;
    box-shadow: 0 0 0 2px rgba(73, 69, 255, 0.2);
  }
  
  &.p-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TextFieldComponent = ({
  attribute,
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  options,
  required,
  value,
}) => {
  const { formatMessage } = useIntl();
  const label = intlLabel.id
    ? formatMessage(
        { id: intlLabel.id, defaultMessage: intlLabel.defaultMessage },
        { ...intlLabel.values }
      )
    : name;

  const hint = description
    ? formatMessage(
        { id: description.id, defaultMessage: description.defaultMessage },
        { ...description.values }
      )
    : '';

  const formattedOptions = options.map((option) => ({
    label: option.label,
    value: option.value,
  }));

  const handleChange = (e) => {
    onChange({
      target: {
        name,
        value: e.value,
        type: attribute.type,
      },
    });
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <Typography variant="pi" fontWeight="bold" textColor="neutral800">
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </Typography>
      {description && (
        <Typography variant="pi" textColor="neutral600">
          {hint}
        </Typography>
      )}
      <div style={{ marginTop: '0.5rem' }}>
        <StyledDropdown
          name={name}
          value={value}
          options={formattedOptions}
          onChange={handleChange}
          disabled={disabled}
          placeholder="Select an option"
          dropdown
          dropdownIcon={<DropdownIcon />}
          className={error ? 'p-invalid' : ''}
        />
      </div>
      {error && (
        <Typography variant="pi" textColor="danger600">
          {error}
        </Typography>
      )}
    </div>
  );
};

TextFieldComponent.defaultProps = {
  description: null,
  disabled: false,
  error: '',
  labelAction: null,
  required: false,
  value: '',
  options: [],
};

TextFieldComponent.propTypes = {
  attribute: PropTypes.object.isRequired,
  description: PropTypes.shape({
    id: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
    values: PropTypes.object,
  }),
  disabled: PropTypes.bool,
  error: PropTypes.string,
  intlLabel: PropTypes.shape({
    id: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
    values: PropTypes.object,
  }).isRequired,
  labelAction: PropTypes.element,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ),
  required: PropTypes.bool,
  value: PropTypes.any,
};

export default TextFieldComponent;
