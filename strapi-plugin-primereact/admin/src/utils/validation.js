
/**
 * Validates input based on Strapi field configuration
 * @param {*} value The value to validate
 * @param {Object} attribute The attribute configuration from Strapi
 * @returns {Object} { isValid, error }
 */
export const validateField = (value, attribute) => {
  if (!attribute) {
    return { isValid: true, error: null };
  }

  // Check required
  if (attribute.required && (value === null || value === undefined || value === '')) {
    return { 
      isValid: false, 
      error: { id: 'validation.required', defaultMessage: 'This value is required' } 
    };
  }

  // For string fields
  if (attribute.type === 'string') {
    // Validate minLength
    if (attribute.minLength && value.length < attribute.minLength) {
      return { 
        isValid: false, 
        error: { 
          id: 'validation.minLength', 
          defaultMessage: `This value must be at least ${attribute.minLength} characters` 
        } 
      };
    }

    // Validate maxLength
    if (attribute.maxLength && value.length > attribute.maxLength) {
      return { 
        isValid: false, 
        error: { 
          id: 'validation.maxLength', 
          defaultMessage: `This value must be at most ${attribute.maxLength} characters` 
        } 
      };
    }

    // Validate regex pattern if defined
    if (attribute.regex && !new RegExp(attribute.regex).test(value)) {
      return { 
        isValid: false, 
        error: { 
          id: 'validation.regex', 
          defaultMessage: 'This value does not match the required pattern' 
        } 
      };
    }
  }

  // For numeric fields
  if (attribute.type === 'integer' || attribute.type === 'float') {
    const numValue = Number(value);
    
    // Validate min
    if (attribute.min !== undefined && numValue < attribute.min) {
      return { 
        isValid: false, 
        error: { 
          id: 'validation.min', 
          defaultMessage: `This value must be greater than or equal to ${attribute.min}` 
        } 
      };
    }

    // Validate max
    if (attribute.max !== undefined && numValue > attribute.max) {
      return { 
        isValid: false, 
        error: { 
          id: 'validation.max', 
          defaultMessage: `This value must be less than or equal to ${attribute.max}` 
        } 
      };
    }
  }

  return { isValid: true, error: null };
};
