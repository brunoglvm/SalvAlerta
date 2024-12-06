import styled from "styled-components/native";
import Map from "react-native-maps";

export const Container = styled.View`
  flex: 1;
`;

export const StyledMap = styled(Map)`
  flex: 1;
`;

export const CalloutView = styled.View``;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Address = styled.Text`
  font-size: 14px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  margin-bottom: 58px;
`;
