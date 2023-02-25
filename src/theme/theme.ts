import { extendTheme } from "@chakra-ui/react";

export const defaultTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  fonts: {
    body: "Poppins, sans-serif, Inter",
    heading: "Poppins, sans-serif, Inter",
  },
  styles: {
    global: {
      a: {
        textDecoration: "underline",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          outline: "none",
        },
        borderRadius: "3px",
        fontWeight: "400",
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "500",
      },
    },
    Link: {
      baseStyle: {
        textDecoration: "underline",
        _hover: {
          color: "gray.300",
        },
      },
    },
  },
  colors: {
    marvel: {
      red: "#e23636",
      yellow: "#f78f3f",
      blue: "#518cca",
      gray: "#504a4a",
      black: "#000000",
    },
  },
  shadows: {
    outline: "none",
  },
});
