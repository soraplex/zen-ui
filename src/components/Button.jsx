import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useTheme } from "@emotion/react";

// Helper: Resolve "blue.500" -> "#3b82f6"
const getToken = (theme, token) => {
  if (!token || !token.includes(".")) return token;
  const [colorName, shade] = token.split(".");
  return theme.colors[colorName]?.[shade] || token;
};

// Helper: Get padding based on size
const getPadding = (theme, size) => {
  if (!size)
    return css`
      padding: ${theme.space[2]} ${theme.space[4]};
    `;

  // Static size (not an array)
  if (!Array.isArray(size)) {
    if (size === "sm")
      return css`
        padding: ${theme.space[2]} ${theme.space[3]};
        font-size: 12px;
      `;
    if (size === "lg")
      return css`
        padding: ${theme.space[4]} ${theme.space[6]};
        font-size: 18px;
      `;
    return css`
      padding: ${theme.space[2]} ${theme.space[4]};
      font-size: 14px;
    `;
  }

  // Responsive array: ['sm', 'md', 'lg']
  const [sm, md, lg] = size;

  const getPadSize = (s) => {
    if (s === "sm") return `${theme.space[2]} ${theme.space[3]}`;
    if (s === "lg") return `${theme.space[4]} ${theme.space[6]}`;
    return `${theme.space[2]} ${theme.space[4]}`;
  };

  return css`
    padding: ${getPadSize(sm)};
    font-size: 14px;

    @media (min-width: 768px) {
      padding: ${getPadSize(md || sm)};
      font-size: 14px;
    }

    @media (min-width: 1024px) {
      padding: ${getPadSize(lg || md || sm)};
      font-size: 16px;
    }
  `;
};

// 1. The Styled Component
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.body};
  font-weight: 600;
  border-radius: ${(props) => props.theme.radii.md};
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  /* Dynamic Background Color */
  ${(props) =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
      color: white;
    `}

  /* Responsive Padding */
  ${(props) => getPadding(props.theme, props.size)}

  /* Variants */
  ${(props) =>
    props.variant === "outline" &&
    css`
      background-color: transparent;
      border: 2px solid ${props.bgColor || "#ccc"};
      color: ${props.bgColor || "#333"};

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `}

  ${(props) =>
    props.variant === "ghost" &&
    css`
      background-color: transparent;
      color: ${props.bgColor || "#333"};

      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    `}

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  /* Mobile touch target */
  min-height: 44px;

  @media (min-width: 768px) {
    min-height: auto;
  }

  ${(props) => props.customStyles}
`;

// 2. The Actual Component
export const Button = ({ children, color, bg, size = "md", variant = "solid", fullWidth = false, ...props }) => {
  const theme = useTheme();

  // Resolve "blue.500" to hex code
  const bgColor = getToken(theme, color || bg);

  return (
    <StyledButton bgColor={bgColor} size={size} variant={variant} fullWidth={fullWidth} {...props}>
      {children}
    </StyledButton>
  );
};