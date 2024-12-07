import LottieView from "lottie-react-native";
import { colors } from "@/styles/colors";
import { StatusBar, View } from "react-native";

export function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray[800],
      }}
    >
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <LottieView
        source={require("./spinner.json")}
        autoPlay
        loop
        style={{ width: 38, height: 38 }}
      />
    </View>
  );
}
