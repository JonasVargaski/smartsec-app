import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ListDevices = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 12 },
})``;

export const Device = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 90px;
  margin: 8px 4px;
  background: #fff;
  border-radius: 4px;
  elevation: 5;
`;

export const Avatar = styled.View`
  height: 48px;
  width: 48px;
  border-radius: 24px;
  background: #7560ec;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const Column = styled.View``;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: bold;
  font-size: 18px;
  color: #333;
`;

export const Serial = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const Date = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #888;
  line-height: 18px;
`;

export const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  line-height: 28px;
  font-size: 20px;
  color: #999;
`;

export const AddButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  border-radius: 27px;
  background-color: #7560ec;
  position: absolute;
  bottom: 10px;
  right: 17px;
  elevation: 5;
`;
