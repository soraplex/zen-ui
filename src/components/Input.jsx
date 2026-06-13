// import React from "react";
// import styled from "@emotion/styled";
// import { useTheme } from "@emotion/react";

// const getToken = (theme, token) => {
//   if (!token || !token.includes(".")) return token;
//   const [colorName, shade] = token.split(".");
//   return theme.colors[colorName]?.[shade] || token;
// };

// const getResponsive = (value) => {
//   if (!value || !Array.isArray(value)) return null;

//   const sm = value[0];
//   const md = value[1] || sm;
//   const lg = value[2] || md;

//   return `
//     font-size: ${sm};
//     @media (min-width: 768px) { font-size: ${md}; }
//     @media (min-width: 1024px) { font-size: ${lg}; }
//   `;
// };

// const StyledInput = styled.input((props) => ({
//   display: "block",
//   width: "100%",
//   padding: props.theme.space[2] + " " + props.theme.space[3],
//   fontFamily: props.theme.fonts.body,
//   fontSize: Array.isArray(props.sizeProp) ? props.sizeProp[0] : props.sizeProp || "14px",
//   borderRadius: props.theme.radii.md,
//   border: "1px solid " + (props.borderProp || "#e5e7eb"),
//   backgroundColor: props.bgProp || "#ffffff",
//   color: props.textProp || "#1f2937",
//   outline: "none",
//   transition: "all 0.2s ease",
//   "&::placeholder": {
//     color: props.placeholderProp || "#9ca3af",
//   },
//   "&:focus": {
//     borderColor: props.focusProp || "#3b82f6",
//     boxShadow: "0 0 0 3px " + (props.ringProp || "rgba(59, 130, 246, 0.1)"),
//   },
//   "&:disabled": {
//     backgroundColor: props.theme.colors.gray[100],
//     cursor: "not-allowed",
//     opacity: 0.6,
//   },
// }));

// export const Input = ({
//   placeholder,
//   value,
//   onChange,
//   type = "text",
//   color,
//   bg,
//   size = "md",
//   disabled = false,
//   ...props
// }) => {
//   const theme = useTheme();

//   const colorVal = color ? getToken(theme, color) : null;

//   return (
//     <StyledInput
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       disabled={disabled}
//       theme={theme}
//       bgProp={bg ? getToken(theme, bg) : null}
//       borderProp={colorVal ? colorVal + "20" : null}
//       focusProp={colorVal ? colorVal : null}
//       ringProp={colorVal ? colorVal + "20" : null}
//       placeholderProp={colorVal ? colorVal + "60" : null}
//       sizeProp={size}
//       {...props}
//     />
//   );
// };

// src/components/Input.jsx
import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const getToken = (theme, token) => {
  if (!token || !token.includes(".")) return token;
  const [colorName, shade] = token.split(".");
  const colorObj = theme.colors[colorName];
  return colorObj ? colorObj[shade] : token;
};

const StyledInput = styled.input((props) => ({
  display: "block",
  width: "100%",
  padding: props.theme.space[2] + " " + props.theme.space[3],
  fontFamily: props.theme.fonts.body,
  fontSize: props.ftsz || "14px",
  borderRadius: props.theme.radii.md,
  border: "1px solid " + (props.brdcol || "#e5e7eb"),
  backgroundColor: props.bgcol || "#ffffff",
  color: props.txtcol || "#1f2937",
  outline: "none",
  "&:focus": {
    borderColor: props.fbrdcol || "#3b82f6",
  },
}));

export const Input = ({ placeholder, value, onChange, type, color, size, disabled, ...props }) => {
  const theme = useTheme();
  const baseColor = color ? getToken(theme, color) : null;

  return (
    <StyledInput
      theme={theme}
      type={type || "text"}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      ftsz={size}
      brdcol={baseColor ? baseColor + "30" : null}
      fbrdcol={baseColor || null}
      {...props}
    />
  );
};
