import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto"; // Importing a modern font

const colors = {
  brand: {
    900: "#0D1B2A",
    800: "#1B263B",
    700: "#415A77",
    600: "#778DA9",
    500: "#E0E1DD",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
