import React from 'react';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  TextButton,
  Logo,
} from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <Container>
      <Logo source={logo} />
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Insira seu E-mail"
        />

        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Insira sua Senha"
        />
        <SubmitButton>
          <TextButton>Acessar</TextButton>
        </SubmitButton>
      </Form>
    </Container>
  );
}
