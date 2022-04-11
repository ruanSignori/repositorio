import { SecundaryTitle } from "../SecundaryTitle/style";
import { Wave } from "../Wave";
import { About } from "./style";

export function AboutMe(): JSX.Element {
  return (
    <About id="about">
      <Wave firstWave />
      <article>
        <SecundaryTitle primaryColor>Sobre mim</SecundaryTitle>
        <div>
          <div>
            <p>
              Prazer, eu me chamo Ruan Signori, atualmente tenho 17 anos, estou
              no 3º ano do Ensino Médio, trabalho em uma Provedora de Internet.
            </p>
            <p>
              Nas horas vagas gosto muito de estudar programação, e almejo
              trabalhar nessa área algum dia.
            </p>
            <p>
              Eu iniciei meus estudos com programação em Maio de 2021, através
              de cursos gratuitos disponiblizados no canal do “Curso em vídeo”.
              Até hoje, admiro imensamente o trabalho que eles fazem pra quem
              está iniciando nessa área, como foi o meu caso.
            </p>
          </div>

          <div>
            <p>
              Mas meus estudos só subiram de nível de fato em Julho de 2021.
              Pois foi aonde comprei o meu curso: “Curso de JavaScript e
              TypeScript FullStack”, no qual o meu professor era o Luiz Otávio
              Miranda.
            </p>
            <p>
              A partir daí, fui me aprofundando cada vez mais em programação e
              Informática como um todo. E até agora, sinto muito orgulho do que
              eu já construi ou aprendi, e costumo seguir a metodologia “Never
              stop learning”.
            </p>
            <p>
              Pretendo terminar a escola esse ano, e conseguir focar na minha
              carreira como programador.
            </p>
          </div>
        </div>
      </article>
      <Wave secundWave />
    </About>
  );
}
