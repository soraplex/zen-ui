// // src/components/Alert.jsx
// import React from 'react';
// import styled from '@emotion/styled';
// import { useTheme } from '@emotion/react';
// import { Box } from './Box';
// import { Text } from './Text';

// const AlertContainer = styled.div(props => ({
//   padding: props.theme.space[3],
//   borderRadius: props.theme.radii.md,
//   borderLeft: '4px solid ' + props.borderCol,
//   backgroundColor: props.bgCol,
// }));

// export const Alert = ({ children, title, status = 'info', ...props }) => {
//   const theme = useTheme();

//   const colors = {
//     info: { bg: '#eff6ff', border: '#3b82f6', text: '#1d4ed8' },
//     success: { bg: '#f0fdf4', border: '#22c55e', text: '#15803d' },
//     warning: { bg: '#fefce8', border: '#eab308', text: '#a16207' },
//     error: { bg: '#fef2f2', border: '#ef4444', text: '#b91c1c' },
//   };

//   const c = colors[status] || colors.info;

//   return (
//     <AlertContainer bgCol={c.bg} borderCol={c.border}>
//       {title && <Text fontWeight="600" color={c.text}>{title}</Text>}
//       <Text color={c.text}>{children}</Text>
//     </AlertContainer>
//   );
// };

// src/components/Alert.jsx
import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { Text } from "./Text";

const getToken = (theme, token) => {
  if (!token || !token.includes(".")) return token;
  const [colorName, shade] = token.split(".");
  const colorObj = theme.colors[colorName];
  return colorObj ? colorObj[shade] : token;
};

const AlertContainer = styled.div((props) => ({
  padding: props.theme.space[3],
  borderRadius: props.theme.radii.md,
  borderLeft: "4px solid " + props.brdcol,
  backgroundColor: props.bgcol,
}));

export const Alert = ({ children, title, status = "info", ...props }) => {
  const theme = useTheme();

  const statusColors = {
    info: { bg: theme.colors.water[50], border: theme.colors.water[500], text: theme.colors.water[700] },
    success: { bg: theme.colors.life[50], border: theme.colors.life[500], text: theme.colors.life[700] },
    warning: { bg: theme.colors.thunder[50], border: theme.colors.thunder[500], text: theme.colors.thunder[700] },
    error: { bg: theme.colors.fire[50], border: theme.colors.fire[500], text: theme.colors.fire[700] },
  };

  const colors = statusColors[status] || statusColors.info;

  return (
    <AlertContainer theme={theme} bgcol={colors.bg} brdcol={colors.border}>
      {title && (
        <Text fontWeight="600" color={colors.text}>
          {title}
        </Text>
      )}
      <Text color={colors.text}>{children}</Text>
    </AlertContainer>
  );
};
