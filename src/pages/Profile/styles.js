import styled from 'styled-components/native';
import Button from '~/components/Button';
import TInput from '~/components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Avatar = styled.Image``;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;

export const Form = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  align-self: stretch;
`;

export const Input = styled(TInput)`
  margin-bottom: 13px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
`;
