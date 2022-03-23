import React from "react";
import color from "../../assets/colors";
import ListItem from "./ListItem";
import { FlatList } from "react-native";
import {
  CardListContainer,
  Box,
  Text,
  Title,
  BoxCardList,
  Image,
  Touchable,
} from "../../assets/styles";

export default function CardHeroes({ data }) {
  // console.log(data[0]);
  return (
    <BoxCardList>
      <FlatList
        horizontal
        data={data}
        renderItem={(item) => <ListItem data={item} />}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
      />
    </BoxCardList>
  );
}
