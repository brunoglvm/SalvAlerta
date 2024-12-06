import React from "react";
import { View, Button } from "react-native";

export default function Start({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 58 }}>
      <Button title="Test" onPress={() => navigation.navigate("Home")}></Button>
    </View>
  );
}
