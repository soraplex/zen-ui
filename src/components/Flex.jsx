// src/components/Flex.jsx
import React from 'react';
import { Box } from './Box';

export const Flex = ({ children, direction, justify, align, gap, wrap, ...props }) => {
  return (
    <Box 
      display="flex"
      flexDirection={direction}
      justifyContent={justify}
      alignItems={align}
      gap={gap}
      flexWrap={wrap}
      {...props}
    >
      {children}
    </Box>
  );
};