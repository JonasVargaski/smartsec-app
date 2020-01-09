import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  background: #7560ec;
  height: 142px;
  align-self: stretch;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-self: stretch;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 15px;
`;

export const ActionButton = styled.TouchableOpacity`
  margin-right: 5px;
  padding: 4px 7px;
`;

export const Description = styled.Text`
  margin: 22px 0 0 60px;
  font-weight: bold;
  font-size: 22px;
  color: #fff;
`;

export const Serial = styled.Text`
  line-height: 20px;
  margin-left: 60px;
  font-size: 18px;
  color: #e5e5e5;
`;

export const Firmware = styled.Text`
  text-align: right;
  font-size: 14px;
  color: #fff;
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin: 8px auto 0;
  color: #444;
`;

export const Content = styled.ScrollView`
  margin: 7px 5px 0 12px;
`;
