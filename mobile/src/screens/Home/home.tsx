import React from "react";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootStackParamList } from "@/utils/types";
import { Container, StyledMap } from "./home.styles";
import { Marker } from "react-native-maps";
import { darkMapStyle } from "@/styles/mapStyle";
import { LateralButtonsContainer, LateralButtonWrapper, AlertButtonContainer } from "./home.styles";
import {LateralButtonSignal, LateralButtonForum, LateralButtonInfo, LateralButtonLocal, AlertButton} from "@/components/Buttons/buttons";

type HomeScreenNavigationProp = DrawerNavigationProp<
  RootStackParamList,
  "Home"
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const coordinate = {
  latitude: -12.969717954906338,
  longitude: -38.51277131734317,
};

export default function Home({ navigation }: Props) {
  return (
    <Container>
      <StyledMap
        initialRegion={{
          latitude: coordinate.latitude,
          longitude: coordinate.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        customMapStyle={darkMapStyle}
      >
        <Marker coordinate={coordinate} pointerEvents="none" />
      </StyledMap>

        <LateralButtonsContainer>
            <LateralButtonWrapper>
                <LateralButtonSignal onPress={() => {}}/>
            </LateralButtonWrapper>

            <LateralButtonWrapper>
                <LateralButtonForum onPress={() =>{}}/>
            </LateralButtonWrapper>

            <LateralButtonWrapper>
                <LateralButtonInfo onPress={() => {}}/>
            </LateralButtonWrapper>

            <LateralButtonWrapper>
                <LateralButtonLocal onPress={() => {}}/>
            </LateralButtonWrapper>
        </LateralButtonsContainer>

        <AlertButtonContainer>
            <AlertButton/>
        </AlertButtonContainer>
    </Container>
  );
}
