import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 20px 25px 0 25px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'stretch',
})`
  max-height: 110px;
  max-width: 110px;
  margin: 0 auto;
`;

export const Form = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: -32px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 45px;
  background-color: #eee;
  border-radius: 4px;
  padding: 0px 17px;
  margin-top: 20px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled(RectButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgb(69, 122, 183);
  border-radius: 4px;
  margin-top: 38px;
  padding: 0 12px;
  height: 43px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`;
