
import React from 'react';
import PropTypes from 'prop-types';
import { MultiSelect as PrimeMultiSelect } from 'primereact/multiselect';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

const StyledMultiSelectWrapper = styled.div`
  .p-multiselect {
    width: 100%;
  }
`;

const MultiSelect = ({
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
  
  // Extract options from the attribute configuration
  const options = attribute?.options || [];
  const formattedOptions = options.map(option => ({
    label: option.label || option,
    value: option.value || option,
  }));

  return (
    <StyledMultiSelectWrapper>
      <PrimeMultiSelect
        id={name}
        value={value || []}
        options={formattedOptions}
        onChange={(e) => {
          onChange({ target: { name, value: e.value } });
        }}
        display="chip"
        placeholder={label}
        required={required}
        disabled={disabled}
        className={error ? 'p-invalid' : ''}
        aria-describedby={`${name}-help`}
      />
      {error && <small id={`${name}-help`} className="p-error">{error}</small>}
      {description && <small id={`${name}-help`}>{description?.id ? formatMessage(description) : description}</small>}
    </StyledMultiSelectWrapper>
  );
};

MultiSelect.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  attribute: PropTypes.object.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  intlLabel: PropTypes.object,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

MultiSelect.defaultProps = {
  value: [],
  required: false,
  error: null,
  disabled: false,
  intlLabel: null,
  description: null,
};

export default MultiSelect;
