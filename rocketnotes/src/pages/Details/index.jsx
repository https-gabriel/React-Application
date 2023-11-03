import { Container, Links, Content } from "./styles.js";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { Button } from '../../components/Button';
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header/>

      <main>
        <Content>
        <ButtonText title={"Excluir nota"}/>
        
        <h1>
          Introducao ao React
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, numquam est sunt corrupti aut ex quas dolore sint quidem recusandae doloribus ipsam quaerat quibusdam molestias. Distinctio, natus corrupti. Magnam, dolorem.
        </p>
        <Section title={"Links uteis"}>
          <Links>
            <li><a href="#"> https://github.com/SoftEngineerGabriel</a></li>
            <li><a href="#"> https://github.com/SoftEngineerGabriel</a></li>
          </Links>
        </Section>

        <Section title={"Marcadores"}>
          <Tag title={"Express"}/>
          <Tag title={"Node"}/>
        </Section>

        <Button title="Voltar"/>
      </Content>
      </main>
    </Container>
  )
};
