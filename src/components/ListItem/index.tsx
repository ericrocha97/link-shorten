import React from "react";
import { Link, Container } from "./styles";

interface ListItemProps {
  data: {
    id: number;
    link: string;
  }
}

export default function ListItem({data}: ListItemProps) {
  return(
    <Container>
      <Link>{data.link}</Link>
    </Container>
  )
}