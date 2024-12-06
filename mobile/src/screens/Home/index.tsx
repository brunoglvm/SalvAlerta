import React from "react";
import { Button } from "react-native";
import { Callout, Marker } from "react-native-maps";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/utils/types";
import {
  Container,
  StyledMap,
  CalloutView,
  Title,
  Address,
  ButtonContainer,
} from "./styles";

// type RootstackParamList = {
//     Home: undefined;
//     Start: undefined;
// };

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

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
      >
        <Marker coordinate={coordinate}>
          <Callout>
            <CalloutView>
              <Title>Hub Salvador</Title>
              <Address>Avenida da França</Address>
            </CalloutView>
          </Callout>
        </Marker>
      </StyledMap>
      <ButtonContainer>
        <Button title="test" onPress={() => navigation.navigate("Start")} />
      </ButtonContainer>
    </Container>
  );
}
