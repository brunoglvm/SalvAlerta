import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Loading } from "@/components/Loading";
import Start from "@/screens/Start/start";
import { HomeDrawer } from "@/navigation/HomeDrawer";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="rgba(0, 0, 0, 0.2)"
        translucent
      />
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Home" component={HomeDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
