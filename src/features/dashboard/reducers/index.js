let initialState = {
  iSShowQRScanner: false
};

//dummy content
const dashboardData = (state = {}, action) => {
  initialState = state;
switch (action.type) {
  case 'IS_OPEN_QR':
    return {...state, iSShowQRScanner: action.iSShowQRScanner};
    break;
  default:
    return state;
}

};

export default dashboardData;
