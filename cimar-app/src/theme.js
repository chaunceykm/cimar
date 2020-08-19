import { createMuiTheme } from "@material-ui/core/styles";

import "./app.css";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ba2214",
    },
    secondary: {
      main: "#D9cab3",
    },
    /* full color span for reference:
#90323d ===
#000000 ===
#D9cab3 ===
*/
  },
  typography: {
    fontFamily: "Noto Sans JP",
    body2: {
      fontFamily: "Roboto",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        padding: "7px",
      },
    },
  },
  props: {
    MuiButton: {
      disableRipple: true,
      variant: "contained",
      color: "primary",
    },
    MuiIconButton: {
      disableRipple: true,
      variant: "contained",
      color: "primary",
    },
    MuiCheckbox: {
      disableRipple: true,
    },
    MuiTextField: {
      variant: "outlined",
      InputLabelProps: {
        shrink: true,
      },
    },
    MuiPaper: {},
  },
});
