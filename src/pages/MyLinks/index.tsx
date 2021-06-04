import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native';

import ListItem from '../../components/ListItem'
import Menu from '../../components/Menu'
import StatusBarPage from '../../components/StatusBarPage'
import EmptyMyLinks from '../../components/EmptyMyLinks'


import { deleteLink, getLinksSave } from '../../utils/storeLinks'

import { MyLinksTypes } from '../../@types/MyLinksTypes'

import { Container, ListLinks, Title } from './styles'
import ModalLink from '../../components/ModalLink';
import { ActivityIndicator, Modal } from 'react-native';


export default function MyLinks() {
  const isFocused = useIsFocused();
  const [links, setLinks] = useState<MyLinksTypes[]>([])
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState<MyLinksTypes>({} as MyLinksTypes);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    async function getLinks() {
      const ListLinks = await getLinksSave('@URL-SHORTEN:links')
      setLinks(ListLinks);
      setLoading(false);
    }
    getLinks();
  }, [isFocused])

  function handleCloseModal() {
    setModalVisible(false)
  }

  function handleItem(item: MyLinksTypes){
    setData(item)
    setModalVisible(true)
  }

  async function handleDelete(id:string){
    const result = await deleteLink('@URL-SHORTEN:links', links, id);

    setLinks(result)
    
  }


  return (
    <Container>
      <StatusBarPage backgroundColor="#132742" barStyle="light-content" />
      <Menu />
      <Title>Meus Links</Title>
      <ListLinks 
        data={links}
        keyExtractor={(item) => String(item.id)}
        renderItem={ ({item} ) => <ListItem data={item} selectedItem={() => {handleItem(item)}} deletedItem={() => {handleDelete(item.id)}}/>}
        contentContainerStyle={{ paddingBottom: 20}}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={loading ? <ActivityIndicator color="#FFF" size={64} /> : <EmptyMyLinks />}
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
      >
          <ModalLink onClose={handleCloseModal}  data={data}/>
      </Modal>
    </Container>
  )
}
