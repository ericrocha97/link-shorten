import React from "react";
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Feather } from "@expo/vector-icons";

import { ButtonMenu } from './styles';

export default function Menu(){
  const navigation = useNavigation();

  function handleOpenDrawer(){
    navigation.dispatch(DrawerActions.openDrawer());
  }

  return(
      <ButtonMenu onPress={() => handleOpenDrawer()}>
        <Feather name="menu" size={40} color="#FFF" />
      </ButtonMenu>
  )
}