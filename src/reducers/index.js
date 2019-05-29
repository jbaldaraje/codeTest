import { combineReducers } from "redux";
import dashboardData from ".././features/dashboard/reducers";
import timerData from ".././features/timeScreen/reducers";
import ApplicationNavigator from ".././navigation/navigators";
import { createNavigationReducer } from 'react-navigation-redux-helpers';

export default combineReducers({
  nav: createNavigationReducer(ApplicationNavigator),
  dashboard: dashboardData,
  timerData: timerData
});
