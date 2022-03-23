import React from "react";
import color from "../../assets/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Text, Title, Image, Touchable } from "../../assets/styles";

export default function ListItem({ data }) {
  const url = `${data.item.thumbnail.path}.${data.item.thumbnail.extension}`;

  console.log(url);
  return (
    <Touchable>
      <Image
        source={{
          uri: url,
        }}
        resizeMode="contain"
      />
      <Text
        color={color.primary}
        size="14px"
        numberOfLines={0.1}
        adjustsFontSizeToFit
        allowFontScaling={false}
      >
        {data.item.title}
      </Text>
    </Touchable>
  );
}
