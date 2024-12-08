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
