import { toast } from 'react-hot-toast';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { NotificationType, SensorsListType, SpindleType } from '../../types/types';
import { RootActionType } from '../rootStateType';
import {
  FetchProfileDetailFailureType,
  FetchProfileDetailRequestType,
  FetchProfileDetailSuccessType,
  FetchSpindleListFailureType,
  FetchSpindleListRequestType,
  FetchSpindleListSuccessType,
} from './action.type';
import { SettingActionTypes } from './types';

export const fetchSpindleListRequest = (): FetchSpindleListRequestType => {
  return {
    type: SettingActionTypes.FETCH_SPINDLE_LIST_REQUEST,
  };
};

export const fetchSpindleListSuccess = (
  data: SensorsListType[],
): FetchSpindleListSuccessType => {
  return {
    type: SettingActionTypes.FETCH_SPINDLE_LIST_SUCCESS,
    payload: { data },
  };
};

export const fetchSpindleListFailure = (error: string): FetchSpindleListFailureType => {
  return {
    type: SettingActionTypes.FETCH_SPINDLE_LIST_FAILURE,
    payload: error,
  };
};

export const fetchProfileDetailRequest = (): FetchProfileDetailRequestType => {
  return {
    type: SettingActionTypes.FETCH_PROFILE_DETAIL_REQUEST,
  };
};

export const fetchProfileDetailSuccess = (
  data: SensorsListType,
): FetchProfileDetailSuccessType => {
  return {
    type: SettingActionTypes.FETCH_PROFILE_DETAIL_SUCCESS,
    payload: { data },
  };
};

export const fetchProfileDetailFailure = (
  error: string,
): FetchProfileDetailFailureType => {
  return {
    type: SettingActionTypes.FETCH_PROFILE_DETAIL_FAILURE,
    payload: error,
  };
};
