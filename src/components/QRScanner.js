import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import QRCodeScanner from 'react-native-qrcode-scanner';
import Button from './Button';

const Scanner = ({ onSuccess, iSShowQRScanner, buttonPress }) => (
  <Modal isVisible={iSShowQRScanner} style={styles.modalContainer}>
    <QRCodeScanner
      onRead={onSuccess}
      fadeIn={true}
      showMarker={true}
      markerStyle={styles.markerStyle}
      bottomContent={
        <Button type="info" textColor="white" text="Close" size="lg" onPress={buttonPress} />
      }
      bottomViewStyle={styles.bottomViewStyle}
      cameraStyle={{
        width: 300,
        height: 300
      }}
    />
  </Modal>
);

export default Scanner;

const styles = StyleSheet.create({
  modalContainer: {
    padding: 10
  },
  bottomViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -30
  },
  markerStyle: {
    borderColor: '#c5eff7',
    borderWidth: 1.5,
    borderRadius: 5
  }
});
