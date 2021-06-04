import React from 'react';
import { Feather } from '@expo/vector-icons';
import { 
  Container, 
  EmptyMyLinksContainer,
  EmptyMyLinksText,
  EmptyMyLinksSubText,
 } from './styles';

export default function EmptyMyLinks() {
  return (
    <Container>
      <EmptyMyLinksContainer>
        <Feather name="slash" size={64} color='#FFF' />
      </EmptyMyLinksContainer>
      <EmptyMyLinksText>Não há Links salvos.</EmptyMyLinksText>
      <EmptyMyLinksSubText>Gere novos links para salvar aqui.</EmptyMyLinksSubText>
    </Container>
  );
}