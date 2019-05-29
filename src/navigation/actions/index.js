import { NavigationActions } from "react-navigation";
import * as screenNames from "../screen_names";

export const navigateBack = () => NavigationActions.back();

export const navigateToTimerSreen = () =>
  NavigationActions.navigate({
    routeName: screenNames.TIMER
  });
