import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView} from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Card from '../../../components/Card';
import Button from '../../../components/Button';

import QRScanner from '../../../components/QRScanner';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";

import {navigateToTimerSreen} from '../../../navigation/actions';
import { onShowQrScanner } from '../actions';
class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iSShowQRScanner: false
    }
  }

  static navigationOptions = {
    title: 'DASHBOARD',
  };

  componentDidMount() {
    // this.props.navigateToTimerSreen();
  }

  onSuccess = (e) => {
    let self = this;
    if (e.data) {
      // this.setState({iSShowQRScanner: false})
      this.props.onShowQrScanner(false)
      setTimeout(function () {
        self.props.navigateToTimerSreen();
      }, 3000);
    }
  }

  renderQRScanner = () => {
    if(this.props.dashboardData.iSShowQRScanner) {
      return (
        <QRScanner onSuccess={this.onSuccess} iSShowQRScanner={this.props.dashboardData.iSShowQRScanner} buttonPress={()=>this.props.onShowQrScanner(false)} />
      )
    }
  }

  render() {
    return (
      <View style={styles.content}>
        <Card title="SCAN QR CODE" isShadow={true}>
          <View style={styles.cardPadding}>
            <TouchableOpacity onPress={()=>this.props.onShowQrScanner(true)}>
              <FontAwesome name="camera" color="#c5eff7" size={50} />
              <Text style={styles.smallText}>OPEN CAMERA</Text>
            </TouchableOpacity>
          </View>
        </Card>
        {this.renderQRScanner()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  dashboardData: state.dashboard
});

export default connect(mapStateToProps, {navigateToTimerSreen, onShowQrScanner})(Dashboard);
