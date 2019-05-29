import React, { Component } from "react";
import { connect } from "react-redux";
import ApplicationNavigator from "../navigators";
import { navigateBack } from "../actions";
import { addNavigationHelpers } from "react-navigation";
import { BackHandler } from "react-native";
import { createReduxContainer, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';

const mapStateToProps = state => ({
  state: state.nav
});

const mapDispatchToProps = dispatch => ({ dispatch });

export const middleware = createReactNavigationReduxMiddleware(state => state.nav);
const Nav = createReduxContainer(ApplicationNavigator, "root");

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
