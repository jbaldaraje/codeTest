import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = ({ title, children, isShadow, contentStyle  }) => (
  <View style={[styles.card, (isShadow ? styles.cardShadow : {}), contentStyle ]}>
    <View style={styles.titleContainer}>
      <Text style={[styles.titleStyle, {marginBottom: 10 }]}>{title}</Text>
    </View>
    {children}
  </View>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 3,
    marginHorizontal: 10,
    marginBottom: 20
  },
  cardShadow: {
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 1.5
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333333',
    marginTop: -5,
    marginBottom: 10
  },
  titleContainer: {
    paddingTop: 10,
    paddingHorizontal: 10
  }
});
