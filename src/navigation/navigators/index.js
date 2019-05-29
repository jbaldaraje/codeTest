import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import * as screenNames from "../screen_names";
import Dashboard from "../../features/dashboard/components";
import TimeScreen from "../../features/timeScreen/components";

const appNavigator = createStackNavigator({
  [screenNames.DASHBOARD]: {
    screen: Dashboard
  },
  [screenNames.TIMER]: {
    screen: TimeScreen
  }
},
{
  initialRouteName: 'dashboard',
}
);

export default createAppContainer(appNavigator);
