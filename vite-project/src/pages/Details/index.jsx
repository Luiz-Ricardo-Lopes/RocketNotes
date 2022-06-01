import {Container} from "./styles"

import { Button } from "../../components/button"

export function Details (){


  return(
    <Container>
      <h1>Hello World!</h1>
      <span>Luiz Ricardo</span>

      <Button title="Entrar" loading/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
     
      
    </Container>
  )
}