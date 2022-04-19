/* eslint-disable react/require-default-props */
import { ReactNode } from "react";

import { SecundaryTitle } from "./style";

type PropsTitle = {
  children: ReactNode;
  primaryColor?: boolean;
  secundaryColor?: boolean;
};

export function Title({
  children,
  primaryColor,
  secundaryColor,
}: PropsTitle): JSX.Element {
  return (
    <SecundaryTitle primaryColor={primaryColor} secundaryColor={secundaryColor}>
      {children}
    </SecundaryTitle>
  );
}
