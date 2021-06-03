import React, { useState } from 'react'
import { 
  Keyboard, 
  TouchableWithoutFeedback, 
  KeyboardAvoidingView, 
  Platform,
  Modal
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';

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


export default function Home() {
  const [url, setUrl] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function handleShortLink() {
    setModalVisible(true)
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
              <ButtonLinkText>Gerar link</ButtonLinkText>
          </ButtonLink>
        </KeyboardAvoidingView>
        <Modal
          visible={modalVisible}
          transparent
          animationType="slide"
        >
          <ModalLink onClose={handleCloseModal} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}
