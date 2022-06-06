import {FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Container, Form, Avatar } from "./styles";



export function Profile () {
return(
  <Container>
    <header>
      <a href="/">
        <FiArrowLeft />

      </a>
    </header>

    <Form>
      <Avatar>
        <img 
        src="https://github.com/Luiz-Ricardo-Lopes.png"
         alt="Imagem de Luiz " />

         <label htmlFor="avatar">
           <FiCamera />
           <input 
           id="avatar"
           type="file" />
         </label>
      </Avatar>
      <Input  
      placeholder="Name"
      type="text"
      icon={FiUser}/>

      <Input  
      placeholder="E-mail"
      type="text"
      icon={FiMail}/>

      <Input  
      placeholder="Senha atual"
      type="password"
      icon={FiLock}/>

      <Input  
      placeholder="Nova senha"
      type="password"
      icon={FiLock}/>

      <Button title="Salvar" />

    </Form>
  </Container>
)
}