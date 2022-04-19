import styled from "styled-components";

type PropsSecundaryTitle = {
  primaryColor?: boolean;
  secundaryColor?: boolean;
};

export const SecundaryTitle = styled.h3<PropsSecundaryTitle>`
  font-size: 4em;
  font-weight: 500;
  color: ${(props) =>
    (props.primaryColor && props.theme.colors.primary) ||
    (props.secundaryColor && props.theme.colors.text)};
`;
