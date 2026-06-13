// // src/components/Flex.jsx
// import React from "react";
// import styled from "@emotion/styled";
// import { css } from "@emotion/react";
// import { useTheme } from "@emotion/react";

// const getResponsiveValue = (value) => {
//   if (!value) return "";
//   if (Array.isArray(value)) {
//     const [sm, md, lg] = value;
//     return css`
//       ${sm ? `flex-direction: ${sm};` : ""}
//       @media (min-width: 768px) {
//         ${md || sm ? `flex-direction: ${md || sm};` : ""}
//       }
//       @media (min-width: 1024px) {
//         ${lg || md || sm ? `flex-direction: ${lg || md || sm};` : ""}
//       }
//     `;
//   }
//   return css`
//     flex-direction: ${value};
//   `;
// };

// const StyledFlex = styled.div`
//   display: flex;
//   ${(props) => props.$direction && getResponsiveValue(props.$direction)}
//   ${(props) =>
//     props.$justify &&
//     css`
//       justify-content: ${props.$justify};
//     `}
//   ${(props) =>
//     props.$align &&
//     css`
//       align-items: ${props.$align};
//     `}
//   ${(props) =>
//     props.$gap &&
//     css`
//       gap: ${props.$gap};
//     `}
//   ${(props) =>
//     props.$wrap &&
//     css`
//       flex-wrap: ${props.$wrap};
//     `}
// `;

// export const Flex = ({ children, direction, justify, align, gap, wrap, ...props }) => {
//   return (
//     <StyledFlex $direction={direction} $justify={justify} $align={align} $gap={gap} $wrap={wrap} {...props}>
//       {children}
//     </StyledFlex>
//   );
// };

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
      {...props}
    >
      {children}
    </Box>
  );
};