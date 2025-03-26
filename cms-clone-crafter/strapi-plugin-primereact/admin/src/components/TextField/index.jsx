
import React from 'react';
import { Typography } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { InputText } from 'primereact/inputtext';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const TextField = ({
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  placeholder,
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

  const errorMessage = error
    ? formatMessage({ id: error, defaultMessage: error })
    : null;

  const handleChange = (e) => {
    onChange({
      target: {
        name,
        value: e.target.value,
      },
    });
  };

  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {required && '*'}
      </Label>
      <InputText
        id={name}
        name={name}
        value={value || ''}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={error ? 'p-invalid' : ''}
        style={{ width: '100%' }}
      />
      {hint && (
        <Typography variant="pi" as="p">
          {hint}
        </Typography>
      )}
      {error && (
        <Typography variant="pi" textColor="danger600" as="p">
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

TextField.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  intlLabel: {},
  labelAction: null,
  placeholder: null,
  required: false,
  value: '',
};

TextField.propTypes = {
  description: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
    values: PropTypes.object,
  }),
  disabled: PropTypes.bool,
  error: PropTypes.string,
  intlLabel: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
    values: PropTypes.object,
  }),
  labelAction: PropTypes.node,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default TextField;
