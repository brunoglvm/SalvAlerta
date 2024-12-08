import {ButtonContainer, ButtonText, LateralButtonContainer} from "./buttons.styles";
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
      <LateralButtonContainer onPress={onPress}>
        <Octicons name="broadcast" size={30} color="black" />
      </LateralButtonContainer>
  );
};

export const LateralButtonForum = ({onPress }: ButtonProps) => {
    return (
        <LateralButtonContainer>
            <MaterialIcons name="chat-bubble-outline" size={30} color="black" />
        </LateralButtonContainer>
    );
};

export const LateralButtonInfo = ({onPress }: ButtonProps) => {
  return (
      <LateralButtonContainer>
          <MaterialCommunityIcons name="information-variant" size={30} color="black" />
      </LateralButtonContainer>
  );
};

export const LateralButtonLocal = ({onPress }: ButtonProps) => {
  return (
      <LateralButtonContainer>
          <Entypo name="location-pin" size={30} color="black" />
      </LateralButtonContainer>
  );
};
