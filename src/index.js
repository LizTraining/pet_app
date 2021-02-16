import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#80e8dd",
      main: "#4db6ac",
      dark: "#00857c"
    },
    secondary: {
      light: "#e4ffff",
      main: "#b1ddd9",
      dark: "#81aba8"
    } 
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);