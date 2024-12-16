import React from "react";
import { Marker } from "react-native-maps";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { RootStackParamList } from "@/utils/types";
import { darkMapStyle } from "@/styles/mapStyle";
import { AlertButton, LateralButton } from "@/components/Buttons/buttons";

import { colors } from "@/styles/theme";

import {
  Container,
  StyledMap,
  LateralButtonsContainer,
  LateralButtonWrapper,
  AlertButtonContainer,
} from "./home.styles";
import { StatusBar } from "react-native";

type HomeScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const currentLocation = {
  latitude: -12.969717954906338,
  longitude: -38.51277131734317,
};

export default function Home({ navigation }: Props) {
  return (
    <Container>
      <StatusBar backgroundColor="rgba(14, 16, 19, 0.2)" />
      <StyledMap
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        customMapStyle={darkMapStyle}
      >
        <Marker
          coordinate={currentLocation}
          pointerEvents="none"
          image={require("@/assets/images/pin.png")}
        />
      </StyledMap>

      <LateralButtonsContainer>
        <LateralButtonWrapper>
          <LateralButton
            iconName="broadcast"
            iconLibrary="Octicons"
            iconColor={colors.black}
            iconSize={30}
            onPress={() => {}}
          />
        </LateralButtonWrapper>
        <LateralButtonWrapper>
          <LateralButton
            iconName="chat-bubble-outline"
            iconLibrary="MaterialIcons"
            iconColor={colors.black}
            iconSize={30}
            onPress={() => {}}
          />
        </LateralButtonWrapper>
        <LateralButtonWrapper>
          <LateralButton
            iconName="information-variant"
            iconLibrary="MaterialCommunityIcons"
            iconColor={colors.black}
            iconSize={30}
            onPress={() => {}}
          />
        </LateralButtonWrapper>
        <LateralButtonWrapper>
          <LateralButton
            iconName="location-pin"
            iconLibrary="Entypo"
            iconColor={colors.black}
            iconSize={30}
            onPress={() => {}}
          />
        </LateralButtonWrapper>
      </LateralButtonsContainer>

      <AlertButtonContainer>
        <AlertButton />
      </AlertButtonContainer>
    </Container>
  );
}
