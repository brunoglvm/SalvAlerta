import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

import Home from "@/screens/Home/home";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import Logo from "@/assets/images/logo.svg";

const Drawer = createDrawerNavigator();

export function HomeDrawer() {
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
        name="HomeScreen"
        component={Home}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="ProfileScreen"
        component={Home}
        options={{
          drawerLabel: "Perfil",
          drawerIcon: () => (
            <MaterialIcons name="person" size={26} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={Home}
        options={{
          drawerLabel: "Configurações",
          drawerIcon: () => (
            <MaterialIcons name="settings" size={26} color={colors.white} />
          ),
        }}
      />
      <Drawer.Screen
        name="FAQScreen"
        component={Home}
        options={{
          drawerLabel: "FAQ",
          drawerIcon: () => (
            <MaterialIcons name="help-outline" size={26} color={colors.white} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
