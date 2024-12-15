import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/utils/types";
import { Background, ButtonContainer, LogoContainer } from "./start.styles";

import Logo from "@/assets/images/logo.svg";
import { DefaultButton } from "@/components/Buttons/buttons";

type StartScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Start"
>;

type Props = {
  navigation: StartScreenNavigationProp;
};

export default function Start({ navigation }: Props) {
  return (
    <Background source={require("../../assets/images/bg.jpg")}>
      <LogoContainer>
        <Logo width={240} height={60} />
      </LogoContainer>
      <ButtonContainer>
        <DefaultButton
          title="Continuar"
          onPress={() => navigation.navigate("Home")}
        />
      </ButtonContainer>
    </Background>
  );
}
