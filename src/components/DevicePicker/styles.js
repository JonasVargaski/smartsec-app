import styled from 'styled-components/native';
import MyPicker from '~/components/Picker';

export const Container = styled.View``;

export const PickerLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin: 0 0 2px 2px;
`;

export const Picker = styled(MyPicker)`
  margin-bottom: 8px;
`;
