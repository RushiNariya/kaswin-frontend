import sensorsList from '../../data/sensorsData';
import { SensorsListType } from '../../types/types';
import { SettingDispatchActionType } from './action.type';
import { SettingActionTypes } from './types';

export interface initialSettingStateType {
  spindle: SensorsListType[];
  isLoading: boolean;
  isLoadingProfileDetail: boolean;
  ProfileDetail: SensorsListType | null;
}

const initialSettingState: initialSettingStateType = {
  spindle: [...sensorsList],
  isLoading: false,
  isLoadingProfileDetail: false,
  ProfileDetail: null,
};

const settingReducer = (
  state = initialSettingState,
  action: SettingDispatchActionType,
) => {
  switch (action.type) {
    case SettingActionTypes.FETCH_PROFILE_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SettingActionTypes.FETCH_PROFILE_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        spindle: action.payload.data,
      };
    case SettingActionTypes.FETCH_PROFILE_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case SettingActionTypes.FETCH_SPINDLE_LIST_REQUEST:
      return {
        ...state,
        isLoadingProfileDetail: true,
      };
    case SettingActionTypes.FETCH_SPINDLE_LIST_SUCCESS:
      return {
        ...state,
        isLoadingProfileDetail: false,
        ProfileDetail: action.payload.data,
      };
    case SettingActionTypes.FETCH_SPINDLE_LIST_FAILURE:
      return {
        ...state,
        isLoadingProfileDetail: false,
      };
    default:
      return state;
  }
};

export default settingReducer;
