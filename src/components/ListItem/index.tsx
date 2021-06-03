import React from "react";

import { Feather } from "@expo/vector-icons";

import { ContainerButton, Container, Link } from "./styles";

interface ListItemProps {
  data: {
    id: string;
    link: string;
  }
}

export default function ListItem({data}: ListItemProps) {
  return(
      <ContainerButton
        activeOpacity={0.9}
        onPress={() => {}}
      >
        <Feather
          name='link'
          size={24}
          color="#FFF"
        />
        <Link numberOfLines={1}>{data.link}</Link>
      </ContainerButton>
  )
}