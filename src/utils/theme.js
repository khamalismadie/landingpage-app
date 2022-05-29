import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#fff3e0",
    200: "#ffe0b2",
    300: "#ffcc80",
    400: "#ffb74d",
    500: "#ffa726",
    600: "#ff9800",
    700: "#fb8c00",
    800: "f57c00",
    900: "#ef6c00"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;