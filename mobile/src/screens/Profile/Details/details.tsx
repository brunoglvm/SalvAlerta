import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  AvatarButton,
  UserAvatar,
  IconContainer,
  UserName,
  UserInfo,
} from "@/screens/Profile/Details/details.styles";

import { colors } from "@/styles/theme";

export default function Details() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Container>
      <AvatarButton onPress={pickImage}>
        {image ? (
          <UserAvatar source={{ uri: image }} />
        ) : (
          <IconContainer>
            <Ionicons name="person" size={140} color={colors.gray[300]} />
          </IconContainer>
        )}
      </AvatarButton>

      <UserName>{`{Nome Completo}`}</UserName>
      <UserInfo>{`{email@email.com}`}</UserInfo>
      <UserInfo>{`{(71) 91234-5678}`}</UserInfo>
      <UserInfo>{`{Região: Bairro da Paz}`}</UserInfo>
    </Container>
  );
}
