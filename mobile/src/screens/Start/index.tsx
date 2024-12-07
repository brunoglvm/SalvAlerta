import React from "react";
import { Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/utils/types";
import { Background, Container } from "./styles";

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
      <Container>
        <Button title="Test" onPress={() => navigation.navigate("Home")} />
      </Container>
    </Background>
  );
}
