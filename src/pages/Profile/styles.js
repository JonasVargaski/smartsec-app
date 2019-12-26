import styled from 'styled-components/native';
import Button from '~/components/Button';
import TInput from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Separator = styled.View`
  height: 1px;
  background: #e4e4e4;
  margin: 10px 0 22px;
`;

export const Form = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 25 },
})`
  align-self: stretch;
`;

export const Input = styled(TInput)`
  margin-bottom: 13px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #333;
`;
