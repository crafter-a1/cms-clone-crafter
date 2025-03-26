
import React from 'react';
import { Box } from '@strapi/design-system';

const DropdownIcon = () => {
  return (
    <Box background="neutral200" borderRadius="50%" height={6} width={6}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </Box>
  );
};

export default DropdownIcon;
