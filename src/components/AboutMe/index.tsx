import { Title } from "../Title";
import { Wave } from "../Wave";
import { About } from "./style";

export function AboutMe(): JSX.Element {
  return (
    <About id="about">
      <Wave firstWave />
      <article>
        <Title primaryColor>Sobre mim</Title>
        <div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, vero
              veniam. Laboriosam optio accusamus nesciunt neque exercitationem
              quibusdam adipisci ex.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              nobis earum! Omnis cumque dolorem eos molestias nulla. Deleniti,
              enim explicabo.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              temporibus molestiae pariatur incidunt nam molestias debitis modi
              aliquam nesciunt, atque unde necessitatibus consequatur, dolore
              neque quas perspiciatis libero veniam officiis facilis! Ad impedit
              maiores veritatis et nobis dolores, maxime atque dolorum,
            </p>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              doloremque consequatur, temporibus perspiciatis mollitia eaque
              ducimus accusamus ipsa reiciendis quibusdam facilis sunt
              distinctio, voluptatem animi repe
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              officiis quasi culpa unde excepturi assumen lo
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              nesciunt consequatur debitis commodi quaerat, asperiores at ullam
              id rerum mollitia?
            </p>
          </div>
        </div>
      </article>
      <Wave secundWave />
    </About>
  );
}
