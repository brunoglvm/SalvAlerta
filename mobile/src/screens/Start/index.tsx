import React from "react";
import { View, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/utils/types";

type StartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Start'>;
type Props = {
    navigation: StartScreenNavigationProp;
}

export default function Start({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 58 }}>
      <Button title="Test" onPress={() => navigation.navigate("Home")}></Button>
    </View>
  );
}
