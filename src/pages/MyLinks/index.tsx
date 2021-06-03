import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import ListItem from '../../components/ListItem'
import Menu from '../../components/Menu'

import StatusBarPage from '../../components/StatusBarPage'

import { Container, ListLinks, Title } from './styles'

interface listLinks {
  id: number;
  link: string;
}

export default function MyLinks() {
  const [links, setLinks] = useState<listLinks[]>([])

  useEffect(() => {
    setLinks([
      {
        id: 1, 
        link: 'https://ericrocha.dev'
      },
      {
        id: 2, 
        link: 'https://podcastr.ericrocha.dev'
      }
    ])
  },[])
  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />
      <Menu />
      <Title>Meus links</Title>
      <ListLinks 
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={ ({item} ) => <ListItem data={item}/>}
        contentContainerStyle={{ paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
