import { AuthDispatchActionType } from './action.type';
import { AuthActionTypes } from './types';

export interface initialAuthStateType {
  token: string;
  loggedInUser: any;
  error: '';
  isSigning: boolean;
  isVerify: boolean;
}

const initialAuthState: initialAuthStateType = {
  token: '',
  loggedInUser: null,
  error: '',
  isSigning: false,
  isVerify: false,
};

const authReducer = (state = initialAuthState, action: AuthDispatchActionType) => {
  switch (action.type) {
    case AuthActionTypes.SET_LOGGED_IN_USER:
      return {
        ...state,
        token: action.payload.token,
        loggedInUser: action.payload.email,
      };
    case AuthActionTypes.SET_LOGGED_OUT_USER:
      return {
        ...state,
        token: '',
        loggedInUser: '',
      };
    case AuthActionTypes.SET_IS_SIGNING:
      return {
        ...state,
        isSigning: true,
      };
    case AuthActionTypes.RESET_IS_SIGNING:
      return {
        ...state,
        isSigning: false,
      };
    case AuthActionTypes.SET_FORGET_PASSWORD_USER_EMAIL:
      return {
        ...state,
        isVerify: true,
      };
    case AuthActionTypes.RESET_FORGET_PASSWORD_USER_EMAIL:
      return {
        ...state,
        isVerify: false,
      };
    case AuthActionTypes.REFRESH_STATE:
      return {
        ...state,
        token: action.payload.token,
        loggedInUser: action.payload.user,
      };
    default:
      return state;
  }
};

export default authReducer;
