import styled from "styled-components/native";
import { colors, fontFamily } from "@/styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.gray[800]};
`;

export const AvatarButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin-top: 20%;
`;

export const UserAvatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  border-color: ${colors.gray[300]};
`;

export const UserName = styled.Text`
  font-family: ${fontFamily.interBd};
  font-size: 16px;
  color: ${colors.white};
  margin-top: 12px;
`;

export const UserInfo = styled.Text`
  font-family: ${fontFamily.interReg};
  font-size: 16px;
  color: ${colors.gray[300]};
  margin-top: 4px;
`;

export const StyledIconContainer = styled.View`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  border-color: ${colors.gray[300]};
  border-width: 2px;
  padding-top: 12px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
