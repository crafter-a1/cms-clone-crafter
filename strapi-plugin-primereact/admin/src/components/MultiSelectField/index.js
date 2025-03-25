
import React from 'react';
import PropTypes from 'prop-types';
import { MultiSelect } from 'primereact/multiselect';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@strapi/design-system/Typography';
import { Stack } from '@strapi/design-system/Stack';
import { Field, FieldLabel, FieldError } from '@strapi/design-system/Field';
import useField from '../../hooks/useField';

export const MultiSelectField = ({
  name,
  intlLabel,
  required = false,
  description,
  error,
  onChange,
  attribute,
  value,
  options,
}) => {
  const { handleChange, formatMessage } = useField({
    name,
    attribute,
    onChange,
    value,
    error,
    required,
  });

  const label = intlLabel.id ? formatMessage(intlLabel) : name;
  const hint = description?.id ? formatMessage(description) : description;

  // Convert the value to expected format for MultiSelect
  const selectedValues = Array.isArray(value) ? value : [];

  return (
    <Field name={name} error={error} hint={hint}>
      <Stack spacing={1}>
        <FieldLabel required={required}>{label}</FieldLabel>
        <MultiSelect
          id={name}
          name={name}
          value={selectedValues}
          options={options || []}
          onChange={(e) => handleChange(e.value)}
          className={error ? 'p-invalid' : ''}
          optionLabel="label"
          optionValue="value"
          display="chip"
          filter
          required={required}
        />
        {error && (
          <FieldError>
            <FormattedMessage id={error} defaultMessage={error} />
          </FieldError>
        )}
        {hint && (
          <Typography variant="pi" as="p">
            {hint}
          </Typography>
        )}
      </Stack>
    </Field>
  );
};

MultiSelectField.propTypes = {
  name: PropTypes.string.isRequired,
  intlLabel: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }).isRequired,
  required: PropTypes.bool,
  description: PropTypes.shape({
    id: PropTypes.string,
    defaultMessage: PropTypes.string,
  }),
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  attribute: PropTypes.object.isRequired,
  value: PropTypes.array,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
};

export default MultiSelectField;
