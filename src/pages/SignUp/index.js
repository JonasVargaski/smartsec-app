import React, { useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { signUpRequest } from '~/store/modules/auth/actions';

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
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
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
            value={name}
            onChangeText={setName}
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

SignUp.propTypes = {
  navigation: PropTypes.shape.isRequired,
  navigate: PropTypes.func.isRequired,
};
