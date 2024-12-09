import styled from "styled-components/native";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  background-color: ${colors.blue[200]};
  width: 85%;
  padding: 12px 24px;
  border-radius: 14px;
  margin-bottom: 15%;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${fontFamily.interBd};
  color: ${colors.white};
  font-size: 18px;
`;

export const LateralButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 52px;
  height: 52px;
  border-radius: 35px;
  background-color: gray;
  opacity: 0.8;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const StyledAlertButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: 75px;
  height: 75px;
  border-radius: 50px;
  background-color: ${colors.red};
  align-items: center;
  justify-content: center;
  position: absolute;
  border: 2px solid white;
`;
