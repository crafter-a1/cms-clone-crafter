
import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'primereact/editor';
import { FormattedMessage } from 'react-intl';
import { Typography } from '@strapi/design-system/Typography';
import { Stack } from '@strapi/design-system/Stack';
import { Field, FieldLabel, FieldError } from '@strapi/design-system/Field';
import useField from '../../hooks/useField';

export const RichTextEditor = ({
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

  const editorHeader = (
    <span className="ql-formats">
      <button className="ql-bold" aria-label="Bold"></button>
      <button className="ql-italic" aria-label="Italic"></button>
      <button className="ql-underline" aria-label="Underline"></button>
      <button className="ql-strike" aria-label="Strike"></button>
      <select className="ql-header" defaultValue="0" aria-label="Header">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="0">Normal</option>
      </select>
      <button className="ql-blockquote" aria-label="Blockquote"></button>
      <button className="ql-code-block" aria-label="Code Block"></button>
      <button className="ql-list" value="ordered" aria-label="Ordered List"></button>
      <button className="ql-list" value="bullet" aria-label="Bullet List"></button>
      <button className="ql-link" aria-label="Insert Link"></button>
      <button className="ql-image" aria-label="Insert Image"></button>
      <button className="ql-clean" aria-label="Clean Formatting"></button>
    </span>
  );

  return (
    <Field name={name} error={error} hint={hint}>
      <Stack spacing={1}>
        <FieldLabel required={required}>{label}</FieldLabel>
        <div className="p-fluid">
          <Editor
            id={name}
            name={name}
            value={value || ''}
            onTextChange={(e) => handleChange(e.htmlValue)}
            className={error ? 'p-invalid' : ''}
            headerTemplate={editorHeader}
            style={{ height: '320px' }}
          />
        </div>
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

RichTextEditor.propTypes = {
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

export default RichTextEditor;
