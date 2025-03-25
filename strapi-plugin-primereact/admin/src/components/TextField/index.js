
import React from 'react';
import PropTypes from 'prop-types';
import { InputText } from 'primereact/inputtext';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@strapi/design-system/Typography';
import { Stack } from '@strapi/design-system/Stack';
import { Field, FieldLabel, FieldError } from '@strapi/design-system/Field';
import useField from '../../hooks/useField';

export const TextField = ({
  name,
  intlLabel,
  required = false,
  description,
  error,
  onChange,
  attribute,
  value,
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

  return (
    <Field name={name} error={error} hint={hint}>
      <Stack spacing={1}>
        <FieldLabel required={required}>{label}</FieldLabel>
        <InputText 
          id={name}
          name={name}
          value={value || ''}
          onChange={(e) => handleChange(e.target.value)}
          className={error ? 'p-invalid' : ''}
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

TextField.propTypes = {
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
  value: PropTypes.string,
};

export default TextField;
