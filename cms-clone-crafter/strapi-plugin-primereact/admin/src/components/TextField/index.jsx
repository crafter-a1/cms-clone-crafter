
import React from 'react';
import { Typography } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Dropdown } from 'primereact/dropdown';

const TextField = ({
  description,
  error,
  intlLabel,
  name,
  onChange,
  options,
  placeholder,
  required,
  value,
}) => {
  const { formatMessage } = useIntl();
  const displayName = intlLabel.id
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
    ? formatMessage(
      { id: error, defaultMessage: error },
      )
    : '';

  const placeholder_txt = placeholder
    ? formatMessage(
      { id: placeholder.id, defaultMessage: placeholder.defaultMessage },
      { ...placeholder.values }
    )
    : '';

  return (
    <div>
      <label htmlFor={name}>
        <Typography variant="pi" fontWeight="bold">
          {displayName}
          {required && <span style={{ color: 'red' }}>*</span>}
        </Typography>
      </label>
      <div>
        <Dropdown
          id={name}
          name={name}
          value={value}
          options={options}
          onChange={(e) => {
            onChange({ target: { name, value: e.value, type: 'select' } });
          }}
          placeholder={placeholder_txt}
          optionValue="value"
          optionLabel="label"
        />
      </div>
      {hint && (
        <Typography variant="pi" as="p">
          {hint}
        </Typography>
      )}
      {errorMessage && (
        <Typography variant="pi" as="p" color="danger600">
          {errorMessage}
        </Typography>
      )}
    </div>
  );
};

TextField.defaultProps = {
  description: null,
  error: null,
  intlLabel: {},
  options: [],
  placeholder: null,
  required: false,
  value: '',
};

TextField.propTypes = {
  description: PropTypes.shape({
    id: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
    values: PropTypes.object,
  }),
  error: PropTypes.string,
  intlLabel: PropTypes.shape({
    id: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
    values: PropTypes.object,
  }),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
  placeholder: PropTypes.shape({
    id: PropTypes.string.isRequired,
    defaultMessage: PropTypes.string.isRequired,
    values: PropTypes.object,
  }),
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default TextField;
