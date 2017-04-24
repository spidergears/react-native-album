import React, {Component} from 'react';
import {View, Text} from 'react-native';

const Header = ({headerText}) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{headerText}</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: .5
  },
  textStyle: {
    fontSize: 20,
  }
}
export default Header;
