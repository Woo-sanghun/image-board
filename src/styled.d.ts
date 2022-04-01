import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: {
      whiteMode: string;
      darkMode: string;
    };
    textColor: {
      whiteMode: string;
      darkMode: string;
    };
  }
}
