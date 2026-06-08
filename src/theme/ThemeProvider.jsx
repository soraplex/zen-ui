import React, { createContext, useContext, useMemo } from 'react';
import { baseTokens, tokensToCSSVars } from './tokens';

const ThemeContext = createContext({
  tokens: baseTokens,
  colorMode: 'light',
});

export function ThemeProvider({
  children,
  tokens = baseTokens,
  colorMode = 'light',
}) {
  const value = useMemo(() => ({ tokens, colorMode }), [tokens, colorMode]);
  const cssVars = tokensToCSSVars(tokens);

  const style = Object.entries(cssVars).reduce(
    (acc, [name, value]) => ({ ...acc, [name]: value }),
    {}
  );

  return (
    <ThemeContext.Provider value={value}>
      <div style={style}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
