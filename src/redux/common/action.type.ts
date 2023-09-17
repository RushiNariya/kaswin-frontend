import { NotificationType, SpindleType } from '../../types/types';
import { CommonActionTypes } from './types';

export interface FetchSpindleListRequestType {
  type: CommonActionTypes.FETCH_SPINDLES_REQUEST;
}

export interface FetchSpindleListSuccessType {
  type: CommonActionTypes.FETCH_SPINDLES_SUCCESS;
  payload: {
    data: SpindleType[];
  };
}

export interface FetchSpindleListFailureType {
  type: CommonActionTypes.FETCH_SPINDLES_FAILURE;
  payload: string;
}

export interface ChangeCurrentSelectedSpindleType {
  type: CommonActionTypes.CHANGE_CURRENT_SPINDLE;
  payload: SpindleType;
}

export interface FetchNotificationRequestType {
  type: CommonActionTypes.FETCH_NOTIFICATIONS_REQUEST;
}

export interface FetchNotificationSuccessType {
  type: CommonActionTypes.FETCH_NOTIFICATIONS_SUCCESS;
  payload: {
    data: NotificationType[];
  };
}

export interface FetchNotificationFailureType {
  type: CommonActionTypes.FETCH_NOTIFICATIONS_FAILURE;
  payload: string;
}

export type CommonDispatchActionType =
  | FetchSpindleListRequestType
  | FetchSpindleListSuccessType
  | FetchSpindleListFailureType
  | FetchNotificationRequestType
  | FetchNotificationSuccessType
  | FetchNotificationFailureType
  | ChangeCurrentSelectedSpindleType;
