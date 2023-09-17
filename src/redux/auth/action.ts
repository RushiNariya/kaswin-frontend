import { toast } from 'react-hot-toast';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
  getLogoutApi,
  postForgotPasswordApi,
  postLoginApi,
  postResetPasswordApi,
  postVerifyOTPApi,
} from '../../services/authService';
import { RootActionType } from '../rootStateType';
import {
  RefreshStateActionType,
  ResetForgetPasswordUserEmailActionType,
  ResetIsSigningActionType,
  SetForgetPasswordUserEmailActionType,
  SetIsSigningActionType,
  SetLoggedInUserActionType,
  SetLoggedOutUserActionType,
} from './action.type';
import { AuthActionTypes } from './types';

export const setLoggedInUser = (email: any, token: string): SetLoggedInUserActionType => {
  return {
    type: AuthActionTypes.SET_LOGGED_IN_USER,
    payload: {
      email,
      token,
    },
  };
};

export const setLoggedOutUser = (): SetLoggedOutUserActionType => {
  return {
    type: AuthActionTypes.SET_LOGGED_OUT_USER,
  };
};

export const refreshState = ({
  token,
  user,
}: {
  token: string;
  user: any;
}): RefreshStateActionType => ({
  type: AuthActionTypes.REFRESH_STATE,
  payload: { token, user },
});

export const setIsSigning = (): SetIsSigningActionType => {
  return {
    type: AuthActionTypes.SET_IS_SIGNING,
  };
};

export const resetIsSigning = (): ResetIsSigningActionType => {
  return {
    type: AuthActionTypes.RESET_IS_SIGNING,
  };
};

export const setForgetPasswordUserEmail = (): SetForgetPasswordUserEmailActionType => {
  return {
    type: AuthActionTypes.SET_FORGET_PASSWORD_USER_EMAIL,
  };
};

export const resetForgetPasswordUserEmail =
  (): ResetForgetPasswordUserEmailActionType => {
    return {
      type: AuthActionTypes.RESET_FORGET_PASSWORD_USER_EMAIL,
    };
  };

export const fetchLoginUserThunkAction = (
  email: string,
  password: string,
  onSuccess: () => void,
): ThunkAction<Promise<void>, unknown, unknown, AnyAction> => {
  return async (dispatch: Dispatch<RootActionType>) => {
    try {
      dispatch(setIsSigning());
      const { data } = await postLoginApi({ email, password });

      if (data.success !== true) {
        throw new Error(data.message);
      }

      localStorage.setItem('token', data?.data?.accessToken);
      localStorage.setItem('user', JSON.stringify(data?.data?.user));

      dispatch(setLoggedInUser(data?.data?.user, data?.data?.accessToken));

      toast.success(data?.message);
      onSuccess();
      dispatch(resetIsSigning());
    } catch (error: any) {
      dispatch(resetIsSigning());
      toast.error(error?.response?.data?.message || error?.message);
    }
  };
};

export const loggingOutUserThunkAction = (
  onSuccess: () => void,
): ThunkAction<Promise<void>, unknown, unknown, AnyAction> => {
  return async (dispatch: Dispatch<RootActionType>) => {
    try {
      const { data } = await getLogoutApi();

      if (data.success !== true) {
        throw new Error(data.message);
      }

      localStorage.removeItem('token');
      localStorage.removeItem('user');

      dispatch(setLoggedOutUser());
      toast.success(data?.message);
      onSuccess();
    } catch (error: any) {
      localStorage.removeItem('token');
      dispatch(setLoggedOutUser());
      toast.error(error?.response?.data?.message || error?.message);
    }
  };
};

export const forgetPasswordEmailThunkAction = (
  email: string,
  onSuccess: () => void,
): ThunkAction<Promise<void>, unknown, unknown, AnyAction> => {
  return async (dispatch: Dispatch<RootActionType>) => {
    try {
      dispatch(setForgetPasswordUserEmail());
      const promise = postForgotPasswordApi({ email });

      toast.promise(promise, {
        loading: 'Loading...',
        success: ({ data }: any) => {
          return `${data.message}`;
        },
        error: (error) => `${error?.response?.data?.message || error?.message}`,
      });

      const { data } = await promise;

      if (data.success !== true) {
        throw new Error(data.message);
      }
      localStorage.setItem('verifyEmail', email);
      dispatch(resetForgetPasswordUserEmail());
      onSuccess();
    } catch (error: any) {
      dispatch(resetForgetPasswordUserEmail());
    }
  };
};

export const verifyOTPThunkAction = (
  email: string,
  otp: string,
  onSuccess: () => void | undefined,
): ThunkAction<Promise<void>, unknown, unknown, AnyAction> => {
  return async (dispatch: Dispatch<RootActionType>) => {
    try {
      dispatch(setIsSigning());

      const { data } = await postVerifyOTPApi({ email, otp });
      if (data.success !== true) {
        throw new Error(data.message);
      }
      toast.success(data.message);
      onSuccess();
      dispatch(resetIsSigning());
    } catch (error: any) {
      dispatch(resetIsSigning());
      toast.error(error?.response?.data?.message);
    }
  };
};

export const resetPasswordThunkAction = (
  email: string,
  password: string,
  otp: string,
  onSuccess: () => void | undefined,
): ThunkAction<Promise<void>, unknown, unknown, AnyAction> => {
  return async (dispatch: Dispatch<RootActionType>) => {
    try {
      dispatch(setForgetPasswordUserEmail());

      const { data } = await postResetPasswordApi({ email, password, otp });

      if (data.success !== true) {
        throw new Error(data.message);
      }
      toast.success(data.message);
      dispatch(resetForgetPasswordUserEmail());
      onSuccess();
    } catch (error: any) {
      dispatch(resetForgetPasswordUserEmail());

      toast.error(error?.response?.data?.message || error?.message);
    }
  };
};
