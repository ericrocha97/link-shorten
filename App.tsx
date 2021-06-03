import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { RootSiblingParent } from 'react-native-root-siblings';

import Routes from './src/routes';

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </RootSiblingParent>
  );
}

