import React, {Component} from 'react'
import {Text, TouchableOpacity} from 'react-native';

class Button extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.touchableStyle} onPress={this.props.onPress}>
        <Text style={styles.textStyle}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  };
};

const styles = {
  touchableStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    backgroundColor: '#fff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Button;
