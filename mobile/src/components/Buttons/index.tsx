import { ButtonContainer, ButtonText } from "./styles";

type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export function DefaultButton({ title, onPress }: ButtonProps) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
