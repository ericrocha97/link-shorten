import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;

`;

export const Container = styled.View`
  flex: 1;
  background: #FFF;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 0 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0;

`;

export const LinkArea = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 33px;
  font-weight: bold;
  color: #1CCBAE;
  margin-bottom: 5px;
`;

export const LongUrl = styled.Text`
  font-size: 17px;
  color: #a7a7a7;
  margin-bottom: 30px;

`;

export const ShortLinkArea = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background: #172742;
  border-radius: 7px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
`;

export const ShortLinkUrl = styled.Text`
  width: 90%;
  color: #FFF;
  font-size: 18px;

`;
