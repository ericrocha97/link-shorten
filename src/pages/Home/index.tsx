import React, { useState } from 'react'
import { 
  Keyboard, 
  TouchableWithoutFeedback, 
  KeyboardAvoidingView, 
  Platform,
  Modal,
  ActivityIndicator
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';
import api from '../../services/api';


import {
  ContainerLogo,
  Logo,
  ContainerContent,
  SubTitle,
  Title,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText
} from './styles';



import LogoImg from "../../assets/logo.png"
import Toast from 'react-native-root-toast';

interface apiData {
  id: string,
  link: string,
  long_url: string,
}


export default function Home() {
  const [url, setUrl] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<apiData>({} as apiData);

  

  async function handleShortLink() {
    setLoading(true);
    try {
      const response = await api.post('/shorten',{
        long_url: url,
      })
      const data = {
        id: response.data.id,
        link: response.data.link,
        long_url: response.data.long_url
      }
      setData(data)
      console.log(data)
      setLoading(false)
      setUrl('')
      Keyboard.dismiss()
      setModalVisible(true)

    } catch (error) {
      const toast = Toast.show('Erro ao gerar link, verifique a URL digitada.', {
        position: Toast.positions.BOTTOM,
        duration: Toast.durations.SHORT,
        shadow: true,
        animation: true,
        hideOnPress: true,
        backgroundColor: '#cc0000',
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
      setLoading(false);
    }
  }

  function handleCloseModal() {
    setModalVisible(false)
  }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient 
        colors={['#1DDBB9','#132742']}
        style={{flex: 1, justifyContent: 'center'}}
      >
        <StatusBarPage backgroundColor="#1DDBB9" barStyle="light-content" />

        <Menu />
        <KeyboardAvoidingView 
          behavior={Platform.OS === 'android' ? 'padding' : 'position' }
          enabled
        >
          <ContainerLogo>
            <Logo source={LogoImg} resizeMode="contain" />
          </ContainerLogo>
          <ContainerContent>
            <Title>Link Shorten</Title>
            <SubTitle>Cole seu link para encurtar</SubTitle>
          </ContainerContent>
          <ContainerInput>
            <BoxIcon>
              <Feather name="link" size={22} color="#FFF" />
            </BoxIcon>
            <Input
              placeholder="Cole seu link aqui..."
              placeholderTextColor="#FFF"
              dataDetectorTypes="link"
              keyboardType="url"
              autoCapitalize="none"
              autoCompleteType="off"
              autoCorrect={false}
              value={url}
              onChangeText={(text) => setUrl(text)}

            />
          </ContainerInput>
          <ButtonLink onPress={handleShortLink}>
              {
                loading ? (
                  <ActivityIndicator color="#121212" size={24}/>
                ) : (
                  <ButtonLinkText>Gerar link</ButtonLinkText>
                )
              }
             
          </ButtonLink>
        </KeyboardAvoidingView>
        <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
        >
          <ModalLink onClose={handleCloseModal}  data={data}/>
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}
