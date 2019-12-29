import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ListDevices = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 12 },
})``;

export const Device = styled.TouchableOpacity`
  background: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0, 40, 100, 0.12);
  height: 75px;
  padding: 5px 5px 5px 8px;
  align-self: stretch;
  margin: 8px 4px;
  justify-content: space-around;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 16px;
  color: #333;
`;

export const Info = styled.Text`
  font-size: 14px;
  color: #999;
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
