import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
    fontWeightMedium: 400,
    h1: {
      fontFamily: ["Jost", "sans-serif"].join(","),
      fontSize: 48,
      fontWeight: 400,
    },
    h2: {
      fontFamily: ["Jost", "sans-serif"].join(","),
      fontSize: 24,
      fontWeight: 400,
    },
    h3: {
      fontFamily: ["Jost", "sans-serif"].join(","),
      fontSize: 24,
      fontWeight: 700,
    },
    h4: {
      fontSize: 16,
      fontFamily: ["Jost", "sans-serif"].join(","),
      fontWeight: 700,
    },
    h5: {
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: 0.5,
      fontFamily: ["Jost", "sans-serif"].join(","),
    },
    h6: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.5,
      fontFamily: ["Jost", "sans-serif"].join(","),
    },
    subtitle1: {
      fontSize: 18,
      fontWeight: 400,
      fontFamily: ["Jost", "sans-serif"].join(","),
    },
    body1: {
      fontFamily: ["Jost", "sans-serif"].join(","),
      fontSize: 18,
      lineHeight: 1.56,
    },
    button: {
      fontSize: 16,
      fontWeight: 500,
      fontFamily: ["Jost", "sans-serif"].join(","),
      lineHeight: 1,
      textTransform: "initial",
      letterSpacing: 0.3,
    },
    caption: {
      letterSpacing: 0.55,
      fontSize: 12,
      fontFamily: ["Jost", "sans-serif"].join(","),
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#E6007E",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#004996",
      contrastText: "#FFFFFF",
      light: "#e7eef7",
    },
    accent: {
      main: "#29c4d2",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#0C233B",
      secondary: "#747F8B",
    },
    background: {
      body: "#F4F7FB",
    },
    devider: "#D2DFEF",
  },
  shadows: ["none", "0px 1px 4px 0px rgba(2,82,163,0.08)"],
});

export default theme;
