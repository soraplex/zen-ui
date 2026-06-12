import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";
import { Box } from "./Box";
import { Text } from "./Text";

const getToken = (theme, token) => {
  if (!token || !token.includes(".")) return token;
  const [colorName, shade] = token.split(".");
  return theme.colors[colorName]?.[shade] || token;
};

const AlertContainer = styled(Box)`
  border-left: 4px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
`;

export const Alert = ({
  children,
  title,
  status = "info", // info, success, warning, error
  ...props
}) => {
  const theme = useTheme();

  const statusColors = {
    info: { bg: theme.colors.blue[50], border: theme.colors.blue[500], text: theme.colors.blue[700] },
    success: { bg: theme.colors.green[50], border: theme.colors.green[500], text: theme.colors.green[700] },
    warning: { bg: theme.colors.yellow[50], border: theme.colors.yellow[500], text: theme.colors.yellow[700] },
    error: { bg: theme.colors.red[50], border: theme.colors.red[500], text: theme.colors.red[700] },
  };

  const colors = statusColors[status] || statusColors.info;

  return (
    <AlertContainer p={4} borderRadius="md" bgColor={colors.bg} borderColor={colors.border}>
      {title && (
        <Text fontWeight="600" color={colors.text} mb={title && children ? 1 : 0}>
          {title}
        </Text>
      )}
      <Text color={colors.text}>{children}</Text>
    </AlertContainer>
  );
};