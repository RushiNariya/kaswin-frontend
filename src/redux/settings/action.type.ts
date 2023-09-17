import { NotificationType, SensorsListType, SpindleType } from '../../types/types';
import { SettingActionTypes } from './types';

export interface FetchSpindleListRequestType {
  type: SettingActionTypes.FETCH_SPINDLE_LIST_REQUEST;
}

export interface FetchSpindleListSuccessType {
  type: SettingActionTypes.FETCH_SPINDLE_LIST_SUCCESS;
  payload: {
    data: SensorsListType[];
  };
}

export interface FetchSpindleListFailureType {
  type: SettingActionTypes.FETCH_SPINDLE_LIST_FAILURE;
  payload: string;
}

export interface FetchProfileDetailRequestType {
  type: SettingActionTypes.FETCH_PROFILE_DETAIL_REQUEST;
}

export interface FetchProfileDetailSuccessType {
  type: SettingActionTypes.FETCH_PROFILE_DETAIL_SUCCESS;
  payload: {
    data: SensorsListType;
  };
}

export interface FetchProfileDetailFailureType {
  type: SettingActionTypes.FETCH_PROFILE_DETAIL_FAILURE;
  payload: string;
}

export type SettingDispatchActionType =
  | FetchSpindleListRequestType
  | FetchSpindleListSuccessType
  | FetchSpindleListFailureType
  | FetchProfileDetailRequestType
  | FetchProfileDetailSuccessType
  | FetchProfileDetailFailureType;
