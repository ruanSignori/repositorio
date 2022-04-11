/* eslint-disable @typescript-eslint/naming-convention */
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      text: string;
      gradient: string;
      backgroundSecundary: string;
    };
  }
}
