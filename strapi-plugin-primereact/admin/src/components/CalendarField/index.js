
import React from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'primereact/calendar';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@strapi/design-system/Typography';
import { Stack } from '@strapi/design-system/Stack';
import { Field, FieldLabel, FieldError } from '@strapi/design-system/Field';
import useField from '../../hooks/useField';

export const CalendarField = ({
  name,
  intlLabel,
  required = false,
  description,
  error,
  onChange,
  attribute,
  value,
  options = {},
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

  // Convert string dates to Date objects
  const dateValue = value ? new Date(value) : null;

  // Default calendar options
  const calendarOptions = {
    showTime: true,
    showSeconds: false,
    hourFormat: '24',
    ...options,
  };

  return (
    <Field name={name} error={error} hint={hint}>
      <Stack spacing={1}>
        <FieldLabel required={required}>{label}</FieldLabel>
        <Calendar
          id={name}
          name={name}
          value={dateValue}
          onChange={(e) => handleChange(e.value ? e.value.toISOString() : null)}
          className={error ? 'p-invalid' : ''}
          required={required}
          showIcon
          showTime={calendarOptions.showTime}
          showSeconds={calendarOptions.showSeconds}
          hourFormat={calendarOptions.hourFormat}
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

CalendarField.propTypes = {
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
  options: PropTypes.shape({
    showTime: PropTypes.bool,
    showSeconds: PropTypes.bool,
    hourFormat: PropTypes.string,
  }),
};

export default CalendarField;
