import { NotificationType, SpindleType } from '../../types/types';
import {
  ChangeCurrentSelectedSpindleType,
  FetchNotificationFailureType,
  FetchNotificationRequestType,
  FetchNotificationSuccessType,
  FetchSpindleListFailureType,
  FetchSpindleListRequestType,
  FetchSpindleListSuccessType,
} from './action.type';
import { CommonActionTypes } from './types';

export const fetchSpindleListRequest = (): FetchSpindleListRequestType => {
  return {
    type: CommonActionTypes.FETCH_SPINDLES_REQUEST,
  };
};

export const fetchSpindleListSuccess = (
  data: SpindleType[],
): FetchSpindleListSuccessType => {
  return {
    type: CommonActionTypes.FETCH_SPINDLES_SUCCESS,
    payload: { data },
  };
};

export const fetchSpindleListFailure = (error: string): FetchSpindleListFailureType => {
  return {
    type: CommonActionTypes.FETCH_SPINDLES_FAILURE,
    payload: error,
  };
};

export const changeCurrentSelectedSpindle = (
  data: SpindleType,
): ChangeCurrentSelectedSpindleType => {
  return {
    type: CommonActionTypes.CHANGE_CURRENT_SPINDLE,
    payload: data,
  };
};

export const fetchNotificationsRequest = (): FetchNotificationRequestType => {
  return {
    type: CommonActionTypes.FETCH_NOTIFICATIONS_REQUEST,
  };
};

export const fetchNotificationsSuccess = (
  data: NotificationType[],
): FetchNotificationSuccessType => {
  return {
    type: CommonActionTypes.FETCH_NOTIFICATIONS_SUCCESS,
    payload: { data },
  };
};

export const fetchNotificationsFailure = (
  error: string,
): FetchNotificationFailureType => {
  return {
    type: CommonActionTypes.FETCH_NOTIFICATIONS_FAILURE,
    payload: error,
  };
};
