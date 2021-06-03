import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import ListItem from '../../components/ListItem'
import Menu from '../../components/Menu'

import StatusBarPage from '../../components/StatusBarPage'

import { Container, ListLinks, Title } from './styles'

interface listLinks {
  id: string;
  link: string;
}

export default function MyLinks() {
  const [links, setLinks] = useState<listLinks[]>([])

  useEffect(() => {
    setLinks([
      {
        id: "1", 
        link: 'https://ericrocha.dev'
      },
      {
        id: "2", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "3", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "4", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "5", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "6", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "7", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "8", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "9", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "10", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "11", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "12", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "13", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "14", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "15", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "16", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      },
      {
        id: "17", 
        link: 'https://podcastr.ericrocha.devvxcxcvxcvxcvxcvxcvxcvxcvxc'
      }
    ])
  },[])
  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />
      <Menu />
      <Title>Meus Links</Title>
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
