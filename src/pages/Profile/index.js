import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { updateProfileRequest } from '~/store/modules/user/actions';

import Background from '~/components/Background';
import {
  Container,
  Title,
  Avatar,
  Form,
  Input,
  Separator,
  SubmitButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector(state => state.user);

  const emailRef = useRef();
  const passwordRef = useRef();
  const oldPasswordRef = useRef();
  const confimPasswordRef = useRef();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    setOldPassword('');
    setPassword('');
    setConfirmPassword('');
  }, [profile]);

  function handleSubmit() {
    dispatch(
      updateProfileRequest({
        name,
        email,
        oldPassword,
        password,
        confirmPassword,
      })
    );
  }

  return (
    <Background>
      <Container>
        <Title>Meu perfil</Title>
        <Avatar source={profile.avatar?.url} />

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
            onSubmitEditing={() => oldPasswordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <Separator />

          <Input
            icon="lock-outline"
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Sua senha atual"
            ref={oldPasswordRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <Input
            icon="lock-outline"
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Sua nova senha"
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confimPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />

          <Input
            icon="lock-outline"
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            placeholder="Confirmação de senha"
            ref={confimPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Atualizar perfil
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
