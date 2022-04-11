/* eslint-disable react/require-default-props */
import { ReactNode } from "react";

import { ElipseComponent, Children } from "./style";

type BackgroundProps = {
  children: ReactNode;
};

export function Elipse({ children }: BackgroundProps): JSX.Element {
  return (
    <>
      <ElipseComponent gradient="#085fce91, #00fff075" position="0%, 130%" />
      <ElipseComponent gradient="#085fce7a, #00fff085" position="200%, 100%" />
      <ElipseComponent gradient="#085fce91, #00fff075" position="200%, 400%" />
      <Children>{children}</Children>
    </>
  );
}
