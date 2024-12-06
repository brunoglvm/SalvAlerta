import { View, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/utils/types";
import { colors } from "@/styles/colors";

type StartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Start"
>;
type Props = {
  navigation: StartScreenNavigationProp;
};

export default function Start({ navigation }: Props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: colors.gray[800],
      }}
    >
      <Button title="Test" onPress={() => navigation.navigate("Home")}></Button>
    </View>
  );
}
