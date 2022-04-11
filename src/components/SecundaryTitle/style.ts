import styled from "styled-components";

type PropsSecundaryTitle = {
  primaryColor?: boolean;
  secundaryColor?: boolean;
};

export const SecundaryTitle = styled.p<PropsSecundaryTitle>`
  font-size: 4em;
  color: ${(props) =>
    (props.primaryColor && props.theme.colors.primary) ||
    (props.secundaryColor && props.theme.colors.text)};
`;
