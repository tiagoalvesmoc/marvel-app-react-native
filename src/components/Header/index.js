import React from "react";
import color from "../../assets/colors";

import {
  Box,
  Icon,
  Touchable,
  Text,
  Title,
  Spaccer,
} from "../../assets/styles";

export default function Header() {
  return (
    <>
      <Box height="50px" direction="row  " justify="space-between">
        <Touchable>
          <Icon source={require("../../assets/img/menu.png")} spacer="10px" />
        </Touchable>

        <Icon
          source={require("../../assets/img/marvel-logo.png")}
          width="71px"
          height="26px"
          spacer="10px"
        />
        <Touchable>
          <Icon source={require("../../assets/img/search.png")} spacer="10px" />
        </Touchable>
      </Box>
      <Spaccer size="30px" />
      <Box>
        <Text left="20px" color={color.grey} size="14px">
          Bem Vindo ao Marvel Comics
        </Text>
        <Title left="20px" color={color.primary} size="32px">
          Escolha o seu personagem
        </Title>
      </Box>
      <Spaccer size="20px" />
      <Box direction="row ">
        <Touchable>
          <Icon
            source={require("../../assets/img/category-hero.png")}
            width="100px"
            height="100px"
          />
        </Touchable>
        <Touchable>
          <Icon
            source={require("../../assets/img/category-vilain.png")}
            width="100px"
            height="100px"
          />
        </Touchable>
        <Touchable>
          <Icon
            source={require("../../assets/img/category-hero.png")}
            width="100px"
            height="100px"
          />
        </Touchable>
        <Touchable>
          <Icon
            source={require("../../assets/img/category-vilain.png")}
            width="100px"
            height="100px"
          />
        </Touchable>
        <Touchable>
          <Icon
            source={require("../../assets/img/category-vilain.png")}
            width="90px"
            height="100px"
          />
        </Touchable>
      </Box>
    </>
  );
}
