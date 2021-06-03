import React from 'react';
import { TouchableOpacity, View, TouchableWithoutFeedback, Share } from 'react-native';

import { Feather } from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';
import Toast from 'react-native-root-toast';
import { RootSiblingParent } from 'react-native-root-siblings';

import {
  Container, 
  Header, 
  ModalContainer,
  LinkArea,
  LongUrl,
  ShortLinkArea,
  ShortLinkUrl,
  Title
} from './styles';



interface ModalLinkProps {
  onClose: () => void;
  data: {
    id: string;
    link: string;
    long_url: string;
  }
}

export default function ModalLink({onClose, data}: ModalLinkProps){

  function handleCopyLink(){
    Clipboard.setString(data.link)
    const toast = Toast.show('Link copiado com sucesso', {
      position: Toast.positions.BOTTOM,
      duration: Toast.durations.SHORT,
      shadow: true,
      animation: true,
      hideOnPress: true,
      backgroundColor: '#555',
      textColor: '#FFF',
      containerStyle: {
        marginBottom: 45,
        borderRadius: 100,
      },
      delay: 0,
    })
    setTimeout(function hideToast() {
      Toast.hide(toast);
    }, 1200);
  }

  async function handleShare(){
    try {
      const result = await Share.share({
        message: `Link: ${data.link}`
      });
      
    } catch (error) {
      console.log(error.message)
    }
  }

  return(
    <RootSiblingParent>
    <ModalContainer>
      <TouchableWithoutFeedback onPress={onClose} >
        <View style={{flex:1}}></View>
      </TouchableWithoutFeedback>
      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather
              name="x" size={30} color="#212743"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Feather
              name="share" size={30} color="#212743"
            />
          </TouchableOpacity>
        </Header>
        <LinkArea>
          <Title>Link encurtado:</Title>
          <LongUrl numberOfLines={1}>{data.long_url}</LongUrl>

          <ShortLinkArea 
            activeOpacity={1}
            onPress={handleCopyLink}
          >
            <ShortLinkUrl numberOfLines={1}>{data.link}</ShortLinkUrl>
            <TouchableOpacity onPress={handleCopyLink}>
              <Feather 
                name="copy"
                size={25}
                color="#FFF"
              />
            </TouchableOpacity>
          </ShortLinkArea>
        </LinkArea>
      </Container>
    </ModalContainer>
    </RootSiblingParent>
  )
}