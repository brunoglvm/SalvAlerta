import React from "react";
import { Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/utils/types";
import { Background, ButtonContainer, LogoContainer } from "./styles";

import Logo from "@/assets/images/logo.svg";

type StartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Start"
>;

type Props = {
  navigation: StartScreenNavigationProp;
};

export default function Start({ navigation }: Props) {
  return (
    <Background source={require("../../assets/images/bg.jpg")}>
      <LogoContainer>
        <Logo width={240} height={60} />
      </LogoContainer>
      <ButtonContainer>
        <Button title="Test" onPress={() => navigation.navigate("Home")} />
      </ButtonContainer>
    </Background>
  );
}
