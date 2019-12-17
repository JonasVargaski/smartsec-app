import React, { useRef } from 'react';
import { Keyboard } from 'react-native';
import Background from '~/components/Background';

import {
  Container,
  ImageLogo,
  Form,
  Input,
  SubmitButton,
  TextButton,
  SignLink,
  SignLinkText,
} from './styles';

import logo from '~/assets/logo.png';

export default function SignUp({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit() {
    Keyboard.dismiss();
  }

  return (
    <Background>
      <Container>
        <ImageLogo source={logo} />
        <Form>
          <Input
            icon="person-outline"
            autoCorrect={false}
            placeholder="Nome Completo"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <Input
            icon="mail-outline"
            keyboardType="email-adress"
            placeholder="Digite seu E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <Input
            icon="lock-outline"
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>
            <TextButton>Cadastrar</TextButton>
          </SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        >
          <SignLinkText>Já tenho Conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
