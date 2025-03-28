
import React from 'react';
import { Typography } from '@strapi/design-system';
import PropTypes from 'prop-types';
import { InputText } from 'primereact/inputtext';
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

const TextFieldInput = ({
  description,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  required,
  value,
  placeholder,
}) => {
  const handleChange = (e) => {
    onChange({ target: { name, value: e.target.value } });
  };

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
        <InputText
          id={name}
          name={name}
          value={value || ''}
          onChange={handleChange}
          placeholder={placeholder}
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

TextFieldInput.defaultProps = {
  description: null,
  error: null,
  labelAction: null,
  required: false,
  value: '',
  placeholder: '',
};

TextFieldInput.propTypes = {
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
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextFieldInput;
