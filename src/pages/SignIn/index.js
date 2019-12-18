import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

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

  const loading = useSelector(state => state.auth.loading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
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

SignIn.propTypes = {
  navigation: PropTypes.shape.isRequired,
  navigate: PropTypes.func.isRequired,
};
