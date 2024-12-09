import styled from "styled-components/native";
import Map from "react-native-maps";

export const Container = styled.View`
  flex: 1;
`;

export const StyledMap = styled(Map)`
  flex: 1;
`;

export const CalloutView = styled.View``;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Address = styled.Text`
  font-size: 14px;
`;

export const LateralButtonsContainer = styled.View`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-200px);
    justify-content: space-between;
    height: 200px;
`;

export const LateralButtonWrapper = styled.View`
    margin-bottom: 10px;
`;

export const AlertButtonContainer = styled.View`
    position: absolute;
    justify-content: center;
    flex: 1;
    bottom: 15%;
    left: 40%;
    
`

