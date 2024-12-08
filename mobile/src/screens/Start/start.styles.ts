import styled from "styled-components/native";
import { colors } from "@/styles/colors";

export const Background = styled.ImageBackground`
  flex: 1;
  background-color: ${colors.gray[800]};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 20px;
`;

export const LogoContainer = styled.View`
  position: absolute;
  top: 15%;
  align-self: center;
`;
