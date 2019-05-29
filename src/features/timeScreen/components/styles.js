import { StyleSheet } from "react-native";

export default StyleSheet.create({
  content: {
    flex: 1,
    marginTop: 50
  },
  cardPadding: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  currentWeatherContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  positionFloatRight: {
    position: 'absolute',
    top: 5,
    right: 10
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
    textAlign: 'left'
  },
  countryLabel: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#013243'
  },
  descStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#013243'
  },
  tempStyle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#22313f'
  },
  celsStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#22313f',
    marginTop: 10
  },
  weatherContent: {
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 300,
    height: 300
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});
