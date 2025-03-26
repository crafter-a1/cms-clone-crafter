
import React from 'react';
import styled from 'styled-components';

const StyledPrimeReactIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const PluginIcon = () => {
  return (
    <StyledPrimeReactIcon>
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 2L2 7L12 12L22 7L12 2Z" 
          fill="currentColor"
        />
        <path 
          d="M2 17L12 22L22 17" 
          fill="currentColor"
        />
        <path 
          d="M2 12L12 17L22 12" 
          fill="currentColor"
        />
      </svg>
    </StyledPrimeReactIcon>
  );
};

export default PluginIcon;
