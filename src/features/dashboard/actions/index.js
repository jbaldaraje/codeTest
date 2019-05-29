import { IS_OPEN_QR } from './types'

export const onShowQrScanner = (action) => {
  return async (dispatch) => {
    dispatch({ type: IS_OPEN_QR, iSShowQRScanner: action });
  }
}
