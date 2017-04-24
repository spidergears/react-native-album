import React from 'react';
import {View, Text} from 'react-native';

const CardContainer = (props) => {
  return (
    <View style={style.viewStyle}>
      {props.children}
    </View>
  );
};

const style = {
  viewStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2 },
    shadowOpacity: .1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },
}

export default CardContainer;
