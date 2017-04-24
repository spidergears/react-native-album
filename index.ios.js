import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native'

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const AlbumApp = () => {
  return (
    <View>
      <Header headerText="Albums"/>
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('Albums', () => AlbumApp);
