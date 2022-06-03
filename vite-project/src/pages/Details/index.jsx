import {Container, Links, Content} from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details (){


  return(
    <Container>
      <Header/> 

      <main>
        <Content>     
      <ButtonText title="Excluir nota" />

      <h1>Introdução ao React</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eveniet molestiae fugiat modi perspiciatis dolorem porro natus ducimus adipisci tempora minus eaque consectetur, blanditiis inventore aspernatur aliquid distinctio iusto in!</p>

      <Section title="Links úteis">
        <Links>
          <li> <a href="#">https://www.rocketseat.com.br/</a> </li>
          <li> <a href="#">https://www.rocketseat.com.br/</a> </li>
          
        </Links>
        </Section>   

        <Section title="Marcadores">
          <Tag title="express" />
          <Tag title="nodejs" />
        </Section>
     
      <Button title="Voltar"/>

      </Content>
      </main>
      
     
      
    </Container>
  )
}