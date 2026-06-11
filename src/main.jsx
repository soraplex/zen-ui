// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CustomProvider } from "./theme/Provider.jsx"; // add .jsx extension

document.body.style.backgroundColor = "#F4EFE6   ";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <App />
    </CustomProvider>
  </React.StrictMode>,
);
