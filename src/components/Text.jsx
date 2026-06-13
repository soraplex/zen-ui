// // src/components/Text.jsx
// import React from 'react';
// import styled from '@emotion/styled';
// import { useTheme } from '@emotion/react';

// const getToken = (theme, token) => {
//   if (!token || !token.includes('.')) return token;
//   const [colorName, shade] = token.split('.');
//   return theme.colors[colorName]?.[shade] || token;
// };

// const StyledText = styled.p`
//   display: block;
//   font-family: ${(props) => props.theme.fonts.body};
//   margin: 0;
// `;

// export const Text = ({ 
//   children, 
//   color = 'gray.700', 
//   fontSize = '14px', 
//   fontWeight = '400',
//   textAlign,
//   style,
//   as = 'p',
//   ...props 
// }) => {
//   const theme = useTheme();
  
//   // Handle responsive fontSize
//   const getFontSize = (fs) => {
//     if (!fs || !Array.isArray(fs)) return fs;
//     return `
//       font-size: ${fs[0]};
//       @media (min-width: 768px) { font-size: ${fs[1] || fs[0]}; }
//       @media (min-width: 1024px) { font-size: ${fs[2] || fs[1] || fs[0]}; }
//     `;
//   };

//   const customStyle = {
//     color: getToken(theme, color),
//     fontSize: Array.isArray(fontSize) ? fontSize[0] : fontSize,
//     fontWeight: fontWeight,
//     textAlign: textAlign,
//     ...(style || {}),
//     ...(Array.isArray(fontSize) ? { fontSize: undefined } : {}),
//   };

//   const mediaStyles = Array.isArray(fontSize) ? getFontSize(fontSize) : '';

//   return (
//     <StyledText 
//       as={as}
//       style={customStyle}
//       {...props}
//     >
//       {mediaStyles && <style>{mediaStyles}</style>}
//       {children}
//     </StyledText>
//   );
// };

// src/components/Text.jsx
import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const getToken = (theme, token) => {
  if (!token || !token.includes('.')) return token;
  const [colorName, shade] = token.split('.');
  const colorObj = theme.colors[colorName];
  return colorObj ? colorObj[shade] : token;
};

const StyledText = styled.p(props => ({
  margin: 0,
  fontFamily: props.theme.fonts.body,
  fontSize: props.ftsz || '14px',
  color: props.col,
  fontWeight: props.ftwt || '400',
  textAlign: props.talign,
  lineHeight: props.lnht,
}));

export const Text = ({ children, color, fontSize, fontWeight, textAlign, lineHeight, as = 'p', ...props }) => {
  const theme = useTheme();
  const colorVal = color ? getToken(theme, color) : theme.colors.gray[700];
  
  return (
    <StyledText 
      as={as}
      theme={theme}
      ftsz={fontSize}
      ftwt={fontWeight}
      talign={textAlign}
      lnht={lineHeight}
      col={colorVal}
      {...props}
    >
      {children}
    </StyledText>
  );
};