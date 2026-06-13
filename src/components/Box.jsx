
// import React from 'react';
// import styled from '@emotion/styled';
// import { useTheme } from '@emotion/react';

// const getToken = (theme, token) => {
//   if (!token || !token.includes('.')) return token;
//   const [colorName, shade] = token.split('.');
//   return theme.colors[colorName]?.[shade] || token;
// };

// const getResponsive = (value, theme) => {
//   if (!value) return null;
//   if (!Array.isArray(value)) return theme.space[value] || value;
  
//   const sm = theme.space[value[0]] || value[0];
//   const md = theme.space[value[1]] || value[1] || sm;
//   const lg = theme.space[value[2]] || value[2] || md;
  
//   return [
//     'padding: ' + sm,
//     '@media (min-width: 768px) { padding: ' + md + '; }',
//     '@media (min-width: 1024px) { padding: ' + lg + '; }'
//   ].join(' ');
// };

// const StyledBox = styled.div(props => ({
//   display: props.display || 'block',
//   flexDirection: props.flexDir || 'row',
//   justifyContent: props.justify || 'flex-start',
//   alignItems: props.align || 'stretch',
//   gap: props.theme.space[props.gap] || props.gap || '0',
//   backgroundColor: props.bgColor,
//   color: props.colorVal,
//   width: props.width,
//   height: props.height,
//   minHeight: props.minH,
//   borderRadius: props.theme.radii[props.radius] || props.radius,
//   boxShadow: props.shadow,
//   opacity: props.opacity,
//   textAlign: props.alignText,
//   position: props.position,
//   top: props.top,
//   right: props.right,
//   bottom: props.bottom,
//   left: props.left,
//   zIndex: props.zIndex,
//   overflow: props.overflow,
//   cursor: props.cursor,
// }));

// export const Box = ({ 
//   children, 
//   bg, 
//   color, 
//   p, 
//   px, 
//   py, 
//   m, 
//   mx, 
//   my, 
//   mb,
//   gap,
//   display,
//   flexDirection,
//   justifyContent,
//   alignItems,
//   flexWrap,
//   width,
//   height,
//   minH,
//   borderRadius,
//   boxShadow,
//   opacity,
//   textAlign,
//   position,
//   top,
//   right,
//   bottom,
//   left,
//   zIndex,
//   overflow,
//   cursor,
//   ...props 
// }) => {
//   const theme = useTheme();
  
//   // Handle responsive padding
//   const getP = (val) => {
//     if (!val) return null;
//     if (!Array.isArray(val)) return theme.space[val] || val;
//     const sm = theme.space[val[0]] || val[0];
//     const md = theme.space[val[1]] || val[1] || sm;
//     const lg = theme.space[val[2]] || val[2] || md;
//     return sm + '; ' + 
//       '@media (min-width: 768px) { padding: ' + md + '; } ' +
//       '@media (min-width: 1024px) { padding: ' + lg + '; }';
//   };
  
//   // Handle responsive margin
//   const getM = (val) => {
//     if (!val) return null;
//     if (!Array.isArray(val)) return theme.space[val] || val;
//     const sm = theme.space[val[0]] || val[0];
//     const md = theme.space[val[1]] || val[1] || sm;
//     const lg = theme.space[val[2]] || val[2] || md;
//     return sm + '; ' + 
//       '@media (min-width: 768px) { margin: ' + md + '; } ' +
//       '@media (min-width: 1024px) { margin: ' + lg + '; }';
//   };
  
//   return (
//     <StyledBox 
//       theme={theme}
//       display={display}
//       flexDir={flexDirection}
//       justify={justifyContent}
//       align={alignItems}
//       gap={gap}
//       bgColor={bg ? getToken(theme, bg) : null}
//       colorVal={color ? getToken(theme, color) : null}
//       width={width}
//       height={height}
//       minH={minH}
//       radius={borderRadius}
//       shadow={boxShadow}
//       opacity={opacity}
//       alignText={textAlign}
//       position={position}
//       top={top}
//       right={right}
//       bottom={bottom}
//       left={left}
//       zIndex={zIndex}
//       overflow={overflow}
//       cursor={cursor}
//       {...props}
//     >
//       <style>
//         {p ? '.p { padding: ' + getP(p) + '; }' : ''}
//         {m ? '.m { margin: ' + getM(m) + '; }' : ''}
//       </style>
//       {children}
//     </StyledBox>
//   );
// };

import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const getToken = (theme, token) => {
  if (!token || !token.includes(".")) return token;
  const [colorName, shade] = token.split(".");
  return theme.colors[colorName]?.[shade] || token;
};

const getResponsive = (value, theme) => {
  if (!value) return null;
  if (!Array.isArray(value)) return theme.space[value] || value;

  const sm = theme.space[value[0]] || value[0];
  const md = theme.space[value[1]] || value[1] || sm;
  const lg = theme.space[value[2]] || value[2] || md;

  return [
    "padding: " + sm,
    "@media (min-width: 768px) { padding: " + md + "; }",
    "@media (min-width: 1024px) { padding: " + lg + "; }",
  ].join(" ");
};

const StyledBox = styled.div((props) => ({
  display: props.display || "block",
  flexDirection: props.flexDir || "row",
  justifyContent: props.justify || "flex-start",
  alignItems: props.align || "stretch",
  gap: props.theme.space[props.gap] || props.gap || "0",
  backgroundColor: props.bgColor,
  color: props.colorVal,
  width: props.width,
  height: props.height,
  minHeight: props.minH,
  borderRadius: props.theme.radii[props.radius] || props.radius,
  boxShadow: props.shadow,
  opacity: props.opacity,
  textAlign: props.alignText,
  position: props.position,
  top: props.top,
  right: props.right,
  bottom: props.bottom,
  left: props.left,
  zIndex: props.zIndex,
  overflow: props.overflow,
  cursor: props.cursor,
}));

export const Box = ({
  children,
  bg,
  color,
  p,
  px,
  py,
  m,
  mx,
  my,
  mb,
  gap,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  width,
  height,
  minH,
  borderRadius,
  boxShadow,
  opacity,
  textAlign,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  overflow,
  cursor,
  ...props
}) => {
  const theme = useTheme();

  // Handle responsive padding
  const getP = (val) => {
    if (!val) return null;
    if (!Array.isArray(val)) return theme.space[val] || val;
    const sm = theme.space[val[0]] || val[0];
    const md = theme.space[val[1]] || val[1] || sm;
    const lg = theme.space[val[2]] || val[2] || md;
    return (
      sm +
      "; " +
      "@media (min-width: 768px) { padding: " +
      md +
      "; } " +
      "@media (min-width: 1024px) { padding: " +
      lg +
      "; }"
    );
  };

  // Handle responsive margin
  const getM = (val) => {
    if (!val) return null;
    if (!Array.isArray(val)) return theme.space[val] || val;
    const sm = theme.space[val[0]] || val[0];
    const md = theme.space[val[1]] || val[1] || sm;
    const lg = theme.space[val[2]] || val[2] || md;
    return (
      sm +
      "; " +
      "@media (min-width: 768px) { margin: " +
      md +
      "; } " +
      "@media (min-width: 1024px) { margin: " +
      lg +
      "; }"
    );
  };

  return (
    <StyledBox
      theme={theme}
      display={display}
      flexDir={flexDirection}
      justify={justifyContent}
      align={alignItems}
      gap={gap}
      bgColor={bg ? getToken(theme, bg) : null}
      colorVal={color ? getToken(theme, color) : null}
      width={width}
      height={height}
      minH={minH}
      radius={borderRadius}
      shadow={boxShadow}
      opacity={opacity}
      alignText={textAlign}
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      zIndex={zIndex}
      overflow={overflow}
      cursor={cursor}
      {...props}
    >
      <style>
        {p ? ".p { padding: " + getP(p) + "; }" : ""}
        {m ? ".m { margin: " + getM(m) + "; }" : ""}
      </style>
      {children}
    </StyledBox>
  );
};
