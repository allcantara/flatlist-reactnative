import React from 'react';
import { StatusBar } from 'react-native';
import Lista from './src/Lista04';

export default () => {
  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Lista />
    </>
  )
}

