import DevImg from "../../assets/img/dev-image.webp";
import {
  Apresentation,
  Emphasis,
  TextGradient,
  MainTtile,
  Description,
} from "./style";

export function Overview(): JSX.Element {
  return (
    <Apresentation>
      <Emphasis>
        <MainTtile>
          Olá, sou{" "}
          <TextGradient colorOne="#00C6FB" colorSecund="#005BEA">
            Ruan Signori
          </TextGradient>
          . <br />
          Sou um desenvolvedor Web <br />
          <TextGradient colorOne="#009EFD" colorSecund="#2AF598">
            Full Stack
          </TextGradient>
          .
        </MainTtile>
        <Description>
          Sou imensamente apaixonado por tecnologia. Estudo principalmente
          Desenvolvimento web, mas pretendo me aprofundar cada vez mais na área
          da programação.
        </Description>
        <button type="button">Saiba Mais</button>
      </Emphasis>
      <img src={DevImg} alt="Imagem de um desenvolvedor" loading="lazy" />
    </Apresentation>
  );
}
