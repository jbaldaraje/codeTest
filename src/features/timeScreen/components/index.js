import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView} from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import CountDown from '../../../components/CountDown';
import QRScanner from '../../../components/QRScanner';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";
import { getCurrentWeather } from '../actions';
import {navigateBack} from '../../../navigation/actions';
import {onShowQrScanner} from '../../dashboard/actions';
class TimerScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iSShowQRScanner: false,
      isDisable: true,
      isShowCurrentWeather: false,
      totalTime: 0,
      isSuccessQR: false,
      isShowRecapScreen: false
    }
  }

  static navigationOptions = {
    title: 'TIMER SCREEN',
  };


  componentDidMount() {
    this.getWeather();
  }

  getWeather = async () => {
    await this.props.getCurrentWeather('10016', 'US');
  }

  onSuccess = (e) => {
    let self = this;
    if (e.data) {
      this.setState({iSShowQRScanner: false, isSuccessQR: true})
      setTimeout(function () {
        self.setState({isShowRecapScreen: true});
      }, 2000);
    }
  }

  onCloseRecap = async () => {
    this.setState({isShowRecapScreen: false});
    await this.props.navigateBack();
    await this.props.onShowQrScanner(true);
  }

  onChange = (timestamp) => {
    if (timestamp > 60) {
      this.setState({isDisable: false, totalTime: timestamp});
    }
  }

  renderQRScanner = () => {
    return (
      <QRScanner onSuccess={this.onSuccess} iSShowQRScanner={this.state.iSShowQRScanner} buttonPress={()=>this.setState({iSShowQRScanner: false})}/>
    )
  }

  renderCurrentWeather = () => {
    const { weatherData } = this.props.weather;
    if (this.state.isShowCurrentWeather) {
      console.log(weatherData)
      let cels = (weatherData.main.temp - 273.15);
      let fahr = (cels * (9/5) + 32);
      return (
        <Modal isVisible={this.state.isShowCurrentWeather} style={styles.currentWeatherContainer}>
          <Card title="CURRENT WEATHER" isShadow={true}>
            <View style={[styles.cardPadding, styles.weatherContent]}>
              <Text style={styles.countryLabel}>{weatherData.name}, {weatherData.sys.country}</Text>
              <Text style={styles.descStyle}>{weatherData.weather[0].description}</Text>
              <View style={styles.rowStyle}>
              <View style={styles.rowStyle}>
                <Text style={styles.tempStyle}>{cels.toFixed()}</Text>
                <Text style={styles.celsStyle}>°C</Text>
              </View>
              <View style={styles.rowStyle}>
                <Text style={styles.tempStyle}>{fahr.toFixed()}</Text>
                <Text style={styles.celsStyle}>°F</Text>
              </View>
              </View>
              <Text style={styles.textStyle}>Min Temp: {weatherData.main.temp_min}K</Text>
              <Text style={styles.textStyle}>Max Temp: {weatherData.main.temp_max}K</Text>
            </View>
            <TouchableOpacity style={styles.positionFloatRight} onPress={()=>this.setState({isShowCurrentWeather: false})}>
              <FontAwesome name="close" color="black" size={35} />
            </TouchableOpacity>
          </Card>
        </Modal>
      )
    }
  }

  getTimeLeft = () => {
    const {totalTime} = this.state;
    return {
      seconds: totalTime % 60,
      minutes: parseInt(totalTime / 60, 10) % 60,
      hours: parseInt(totalTime / (60 * 60), 10) % 24,
      days: parseInt(totalTime / (60 * 60 * 24), 10),
    };
  };

  renderRecapTime = () => {
    const {days, hours, minutes, seconds} = this.getTimeLeft();
    return (
      <Modal isVisible={this.state.isShowRecapScreen} style={styles.currentWeatherContainer}>
        <Card title="TOTAL TIME" isShadow={true}>
          <View style={styles.cardPadding}>
            <Text style={styles.descStyle}>{days} DAY:{hours} HOUR:{minutes} MIN:{seconds} SEC</Text>
            <TouchableOpacity style={styles.positionFloatRight} onPress={this.onCloseRecap}>
              <FontAwesome name="close" color="black" size={35} />
            </TouchableOpacity>
          </View>
        </Card>
      </Modal>
    )
  }

  render() {
    console.log()
    return (
      <View style={styles.content}>
        <Card title="TIMER" isShadow={true}>
          <View style={styles.cardPadding}>
            <CountDown
              until={0}
              size={20}
              digitStyle={{backgroundColor: '#22313f'}}
              digitTxtStyle={{color: 'white'}}
              onChange={(data)=> this.onChange(data)}
              onStopTimer={this.state.isSuccessQR}
            />
            <View style={{marginTop: 10}}>
              <Button type="info" textColor="white" text="STOP TIMER" size="mid" buttonStyle={{backgroundColor: this.state.isDisable ? '#555': '#52b4d7'}} isDisable={this.state.isDisable} onPress={()=>this.setState({iSShowQRScanner: true})} />
              <Button type="info" textColor="white" text="CURRENT WEATHER " size="mid" onPress={()=>this.setState({isShowCurrentWeather: true})} />
            </View>
          </View>
        </Card>
        {this.renderQRScanner()}
        {this.renderCurrentWeather()}
        {this.renderRecapTime()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.timerData
});

export default connect(mapStateToProps, {getCurrentWeather, navigateBack, onShowQrScanner})(TimerScreen);
