
import React from 'react';

const ConditionalField = ({ 
  condition, 
  children,
  fallback = null
}) => {
  // `condition` can be either a boolean or a function that returns a boolean
  const shouldRender = typeof condition === 'function' ? condition() : condition;
  
  return shouldRender ? children : fallback;
};

export default ConditionalField;
