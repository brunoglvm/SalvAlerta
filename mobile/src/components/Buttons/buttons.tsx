import Octicons from "@expo/vector-icons/Octicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

import { colors } from "@/styles/colors";

import {
  ButtonContainer,
  ButtonText,
  LateralButtonContainer,
  StyledAlertButton,
} from "./buttons.styles";

type ButtonProps = {
  title?: string;
  onPress?: () => void;
};

type IconButtonProps = {
  iconName: any;
  iconLibrary:
    | "Octicons"
    | "MaterialIcons"
    | "MaterialCommunityIcons"
    | "Entypo";
  iconSize?: number;
  iconColor?: string;
  onPress?: () => void;
};

const IconMapper = {
  Octicons,
  MaterialIcons,
  MaterialCommunityIcons,
  Entypo,
};

export function DefaultButton({ title, onPress }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}

export const LateralButton = ({
  iconName,
  iconLibrary,
  iconSize = 30,
  iconColor = "black",
  onPress,
}: IconButtonProps) => {
  const IconComponent = IconMapper[iconLibrary];

  return (
    <LateralButtonContainer onPress={onPress}>
      <IconComponent name={iconName} size={iconSize} color={iconColor} />
    </LateralButtonContainer>
  );
};

export const AlertButton = ({ onPress }: ButtonProps) => {
  return (
    <StyledAlertButton onPress={onPress}>
      <Octicons name="alert" size={45} color={colors.yellow} />
    </StyledAlertButton>
  );
};
