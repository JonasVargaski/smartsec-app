import styled from 'styled-components/native';
import { Platform } from 'react-native';

import TInput from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.select({
    ios: 'padding',
    android: null,
  }),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
`;

export const ImageLogo = styled.Image`
  width: 90px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const Input = styled(TInput)`
  margin-bottom: 13px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 17px;
`;

export const SignLinkText = styled.Text`
  color: #666;
  font-weight: bold;
  font-size: 16px;
`;
