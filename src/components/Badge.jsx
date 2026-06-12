import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const getToken = (theme, token) => {
  if (!token || !token.includes(".")) return token;
  const [colorName, shade] = token.split(".");
  return theme.colors[colorName]?.[shade] || token;
};

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${(props) => props.theme.space[1]} ${(props) => props.theme.space[2]};
  font-size: 12px;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.body};
  border-radius: ${(props) => props.theme.radii.full};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};

  ${(props) => props.customStyles}
`;

export const Badge = ({ children, color = "gray.500", ...props }) => {
  const theme = useTheme();

  const bgColor = getToken(theme, color) + "20"; // Adds 20 for light background
  const textColor = getToken(theme, color);

  return (
    <StyledBadge bgColor={bgColor} textColor={textColor} {...props}>
      {children}
    </StyledBadge>
  );
};
