import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`;

export const Pointer = styled.Text`
  margin-top: 2px;
  height: 6px;
  width: 6px;
  border-radius: 3px;
  background: #000;
`;

export const Label = styled.Text`
  margin-left: 8px;
  font-weight: bold;
  font-size: 15px;
  color: #333;
`;

export const Value = styled.Text`
  font-size: 16px;
  color: #555;
`;
