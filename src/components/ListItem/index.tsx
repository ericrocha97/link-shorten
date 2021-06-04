import React from "react";
import { View } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { Feather } from "@expo/vector-icons";

import { ContainerButton, ActionContainer, Link } from "./styles";
import { MyLinksTypes } from "../../@types/MyLinksTypes";

interface ListItemProps {
  data: MyLinksTypes;
  selectedItem: (data: MyLinksTypes) => void;
  deletedItem: (id: string) => void;
}

export default function ListItem({data, selectedItem, deletedItem }: ListItemProps) {

  function RightActions(){
    return(
      <ActionContainer onPress={() => {deletedItem(data.id)}}>
        <Feather name="trash" color='#FFF' size={24} />
      </ActionContainer>
    )
  }

  return(
    <View>
      <Swipeable renderRightActions={RightActions}>
        <ContainerButton
          activeOpacity={0.9}
          onPress={() => {selectedItem(data)}}
        >
          <Feather
            name='link'
            size={24}
            color="#FFF"
          />
          <Link numberOfLines={1}>{data.long_url}</Link>
        </ContainerButton>
      </Swipeable>
    </View>
  )
}