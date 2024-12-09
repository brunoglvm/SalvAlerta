import {ButtonContainer, ButtonText, LateralButton, StyledAlertButton} from "./buttons.styles"
import Octicons from '@expo/vector-icons/Octicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

type ButtonProps = {
  title?: string;
  onPress?: () => void;
};

export function DefaultButton({ title, onPress }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}

export const LateralButtonSignal = ({onPress }: ButtonProps) => {
  return (
      <LateralButton onPress={onPress}>
        <Octicons name="broadcast" size={30} color="black" />
      </LateralButton>
  );
};

export const LateralButtonForum = ({onPress }: ButtonProps) => {
    return (
        <LateralButton>
            <MaterialIcons name="chat-bubble-outline" size={30} color="black" />
        </LateralButton>
    );
};

export const LateralButtonInfo = ({onPress }: ButtonProps) => {
  return (
      <LateralButton>
          <MaterialCommunityIcons name="information-variant" size={30} color="black" />
      </LateralButton>
  );
};

export const LateralButtonLocal = ({onPress }: ButtonProps) => {
  return (
      <LateralButton>
          <Entypo name="location-pin" size={30} color="black" />
      </LateralButton>
  );
};

export const AlertButton = ({onPress }: ButtonProps) => {
  return(
      <StyledAlertButton>
          <Octicons name="alert" size={50} color="yellow" />
      </StyledAlertButton>
  );
};