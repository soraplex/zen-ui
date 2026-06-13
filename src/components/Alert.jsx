import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

const getToken = (theme, token) => {
  if (!token || !token.includes(".")) return token;
  const [colorName, shade] = token.split(".");
  return theme.colors[colorName]?.[shade] || token;
};

const getResponsivePadding = (p, theme) => {
  if (!p) {
    return css`
      padding: ${theme.space[3]} ${theme.space[3]};
    `;
  }

  if (!Array.isArray(p)) {
    return css`
      padding: ${theme.space[p] || p};
    `;
  }

  const [sm, md, lg] = p;

  return css`
    padding: ${theme.space[sm] || sm || theme.space[3]};
    @media (min-width: 768px) {
      padding: ${theme.space[md || sm] || md || sm || theme.space[3]};
    }
    @media (min-width: 1024px) {
      padding: ${theme.space[lg || md || sm] || lg || md || sm || theme.space[3]};
    }
  `;
};

const getResponsiveFont = (fontSize) => {
  if (!fontSize) return "";
  if (!Array.isArray(fontSize))
    return css`
      font-size: ${fontSize};
    `;

  const [sm, md, lg] = fontSize;

  return css`
    font-size: ${sm};
    @media (min-width: 768px) {
      font-size: ${md || sm};
    }
    @media (min-width: 1024px) {
      font-size: ${lg || md || sm};
    }
  `;
};

const AlertContainer = styled.div`
  border-left: 4px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => props.theme.radii.md || "4px"};

  ${(props) => getResponsivePadding(props.$p, props.theme)}

  ${(props) =>
    props.$titleFont &&
    css`
      font-weight: 600;
      margin-bottom: ${props.$hasChildren ? "4px" : "0"};
    `}
`;

const AlertText = styled.p`
  color: ${(props) => props.color};
  margin: 0;
  font-family: ${(props) => props.theme.fonts.body};
  ${(props) => getResponsiveFont(props.$fontSize)}
`;

export const Alert = ({ children, title, status = "info", p, fontSize, ...props }) => {
  const theme = useTheme();

  const statusColors = {
    info: { bg: theme.colors.blue[50], border: theme.colors.blue[500], text: theme.colors.blue[700] },
    success: { bg: theme.colors.green[50], border: theme.colors.green[500], text: theme.colors.green[700] },
    warning: { bg: theme.colors.yellow[50], border: theme.colors.yellow[500], text: theme.colors.yellow[700] },
    error: { bg: theme.colors.red[50], border: theme.colors.red[500], text: theme.colors.red[700] },
  };

  const colors = statusColors[status] || statusColors.info;

  return (
    <AlertContainer
      theme={theme}
      $p={p}
      $titleFont={title}
      $hasChildren={children}
      bgColor={colors.bg}
      borderColor={colors.border}
      {...props}
    >
      {title && (
        <AlertText theme={theme} $titleFont={true} $hasChildren={children} color={colors.text}>
          {title}
        </AlertText>
      )}
      {children && (
        <AlertText theme={theme} $fontSize={fontSize} color={colors.text}>
          {children}
        </AlertText>
      )}
    </AlertContainer>
  );
};
