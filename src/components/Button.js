import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({ type, text, onPress, textStyle, size, custom, buttonStyle, isDisable }) => (
  <TouchableOpacity style={[styles.button, styles[type], styles[size], buttonStyle ]} onPress={onPress} disabled={isDisable}>
    <Text style={[styles.text, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent : 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 3,
    marginTop: 5
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500'
  },
  primary: {
    backgroundColor: '#2b66aa'
  },
  danger: {
    backgroundColor: '#c93b3e'
  },
  warning: {
    backgroundColor: '#e89c38'
  },
  info: {
    backgroundColor: '#52b4d7'
  },
  sml: {
    width: 80,
    fontSize: 40
  },
  mid: {
    width: 150,
    height: 40
  },
  lg: {
    width: 200,
    height:  60
  }
});
