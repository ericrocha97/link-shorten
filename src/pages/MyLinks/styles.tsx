import styled from 'styled-components/native';
import { FlatList, Platform } from 'react-native';
import { MyLinksItens } from '../../@types/MyLinksTypes';

export const Container = styled.View`
  flex: 1;
  background: #132742;
`;

export const Title = styled.Text`
  margin-top: ${Platform.OS === 'ios' ? 35+'%': 20+'%'};
  margin-left: 25px;
  font-size: 33px;
  font-weight: bold;
  color: #FFF;
  margin-bottom: 10px;
`;

export const ListLinks = styled(FlatList as new () => FlatList<MyLinksItens>)`

`;

