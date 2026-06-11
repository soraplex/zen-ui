import { useTheme } from "@emotion/react";

/**
 * Parses a token string like "blue.500" into the actual color value
 */
export const getToken = (theme, tokenString) => {
  if (!tokenString || !tokenString.includes(".")) return tokenString;

  const [tokenName, shade] = tokenString.split(".");

  // Look up in theme colors (or return raw if not found)
  return theme.colors[tokenName]?.[shade] || tokenString;
};

export const useToken = (props) => {
  const theme = useTheme();

  // This is a basic hook you would use inside your components
  // to resolve "color" props
  const resolve = (propValue) => getToken(theme, propValue);

  return { theme, resolve };
};