import styled from "styled-components/native";
import { colors } from "@/styles/colors";

export const Background = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  background-color: ${colors.gray[800]};
`;

export const Container = styled.View`
  padding: 20px;
`;
