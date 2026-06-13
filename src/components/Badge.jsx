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

// src/components/Badge.jsx
import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const getToken = (theme, token) => {
  if (!token || !token.includes('.')) return token;
  const [colorName, shade] = token.split('.');
  const colorObj = theme.colors[colorName];
  return colorObj ? colorObj[shade] : token;
};

const StyledBadge = styled.span(props => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: props.theme.space[1] + ' ' + props.theme.space[2],
  fontSize: props.ftsz || '12px',
  fontWeight: '600',
  fontFamily: props.theme.fonts.body,
  borderRadius: props.theme.radii.full,
  backgroundColor: props.bgcol,
  color: props.txtcol,
}));

export const Badge = ({ children, color, size, ...props }) => {
  const theme = useTheme();
  const baseColor = color ? getToken(theme, color) : theme.colors.gray[500];
  
  return (
    <StyledBadge 
      theme={theme}
      bgcol={baseColor + '20'}
      txtcol={baseColor}
      ftsz={size === 'sm' ? '10px' : size === 'lg' ? '14px' : '12px'}
      {...props}
    >
      {children}
    </StyledBadge>
  );
};