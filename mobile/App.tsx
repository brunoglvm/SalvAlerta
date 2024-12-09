import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import { StatusBar } from "react-native";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import Home from "@/screens/Home/home";
import Start from "@/screens/Start/start";
import { Loading } from "@/components/Loading";

import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";

import Logo from "@/assets/images/logo.svg";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Drawer da Tela Home
function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.blue[200],
        },
        headerTintColor: colors.white,
        headerTitleAlign: "center",
        headerTitle: () => <Logo width={120} height={30} />,
        headerRight: () => (
          <Ionicons
            name="search"
            size={22}
            color={colors.white}
            style={{ marginRight: 12 }}
          />
        ),
        drawerStyle: {
          backgroundColor: colors.gray[800],
          width: "80%",
        },
        drawerItemStyle: {
          backgroundColor: colors.gray[800],
        },
        drawerLabelStyle: {
          fontFamily: fontFamily.interReg,
          color: colors.white,
        },
        drawerType: "slide",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Home}
        options={{
          drawerLabel: "Perfil",
          drawerIcon: () => (
            <MaterialIcons name="person" size={26} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Home}
        options={{
          drawerLabel: "Configurações",
          drawerIcon: () => (
            <MaterialIcons name="settings" size={26} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="FAQ"
        component={Home}
        options={{
          drawerLabel: "FAQ",
          drawerIcon: () => (
            <MaterialIcons name="help" size={26} color={colors.white} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

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
