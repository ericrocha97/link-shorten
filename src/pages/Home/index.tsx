import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

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
  return (
    <LinearGradient 
      colors={['#1DDBB9','#132742']}
      style={{flex: 1, justifyContent: 'center'}}
    >
      <StatusBarPage backgroundColor="#1DDBB9" barStyle="light-content" />
      <Menu />
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
        />
        
      </ContainerInput>
      <ButtonLink>
          <ButtonLinkText>Gerar link</ButtonLinkText>
        </ButtonLink>
      
    </LinearGradient>
  )
}
