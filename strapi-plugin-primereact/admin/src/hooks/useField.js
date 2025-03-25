
import { useCallback } from 'react';
import { useIntl } from 'react-intl';

const useField = ({ name, attribute, onChange, value, error, required = false }) => {
  const { formatMessage } = useIntl();
  
  const getValue = useCallback(() => {
    if (value === null || value === undefined) {
      return '';
    }
    
    return value;
  }, [value]);
  
  const handleChange = useCallback((newValue) => {
    onChange({ target: { name, value: newValue, type: attribute.type } });
  }, [name, onChange, attribute.type]);
  
  return {
    name,
    value: getValue(),
    error,
    required,
    handleChange,
    formatMessage,
  };
};

export default useField;
