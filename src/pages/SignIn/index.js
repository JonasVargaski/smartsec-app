import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Keyboard } from 'react-native';
import isValid, { Yup } from '~/util/validate';

import { signInRequest } from '~/store/modules/auth/actions';

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

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória'),
  });

  const loading = useSelector(state => state.auth.loading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    if (isValid(schema, { email, password })) {
      dispatch(signInRequest(email, password));

      Keyboard.dismiss();
    }
  }

  return (
    <Background>
      <Container>
        <ImageLogo source={logo} />
        <Form>
          <Input
            icon="mail-outline"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Digite seu E-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
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
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            <TextButton>Acessar</TextButton>
          </SubmitButton>
        </Form>

        <SignLink
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          <SignLinkText>Criar Conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
