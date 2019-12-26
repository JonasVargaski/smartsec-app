import styled from 'styled-components/native';
import MyPicker from '~/components/Picker';
import MyCard from '~/components/Card';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Scroll = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 15 },
})`
  flex: 1;
`;

export const PickerLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin: 0 0 2px 2px;
`;

export const Picker = styled(MyPicker)`
  margin-bottom: 8px;
`;

export const Card = styled(MyCard)`
  padding: 7px 13px;
  height: 132px;
  margin: 10px 0;
`;

export const Row = styled.View`
  flex: 1;
  padding: 0 13px;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Col = styled.View``;

export const Label = styled.Text`
  text-align: right;
  font-size: 20px;
  color: #222;
`;

export const Value = styled.Text`
  font-size: 32px;
  text-align: right;
  color: #444;
`;

export const Separator = styled.View`
  background: #eee;
  height: 1px;
  align-self: stretch;
  margin-top: 6px;
`;

export const Description = styled.Text`
  text-align: left;
  padding: 2px 0 1px 7px;
  font-size: 15px;
  color: rgb(169, 169, 169);
`;
