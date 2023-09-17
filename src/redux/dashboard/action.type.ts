import { NotificationType, SensorsListType, SpindleType } from '../../types/types';
import { DashboardActionTypes } from './types';

export interface FetchDashboardAIDiagnosisRequestType {
  type: DashboardActionTypes.FETCH_DASHBOARD_REQUEST;
}

export interface FetchDashboardAIDiagnosisSuccessType {
  type: DashboardActionTypes.FETCH_DASHBOARD_SUCCESS;
  payload: {
    data: SensorsListType[];
  };
}

export interface FetchDashboardAIDiagnosisFailureType {
  type: DashboardActionTypes.FETCH_DASHBOARD_FAILURE;
  payload: string;
}

export interface FetchDashboardSpindleStatusRequestType {
  type: DashboardActionTypes.FETCH_SPINDLE_STATUS_REQUEST;
}

export interface FetchDashboardSpindleStatusSuccessType {
  type: DashboardActionTypes.FETCH_SPINDLE_STATUS_SUCCESS;
  payload: {
    data: SensorsListType;
  };
}

export interface FetchDashboardSpindleStatusFailureType {
  type: DashboardActionTypes.FETCH_SPINDLE_STATUS_FAILURE;
  payload: string;
}

export interface FetchDashboardErrorWindowsRequestType {
  type: DashboardActionTypes.FETCH_ERROR_WINDOWS_REQUEST;
}

export interface FetchDashboardErrorWindowsSuccessType {
  type: DashboardActionTypes.FETCH_ERROR_WINDOWS_SUCCESS;
  payload: {
    data: SensorsListType;
  };
}

export interface FetchDashboardErrorWindowsFailureType {
  type: DashboardActionTypes.FETCH_ERROR_WINDOWS_FAILURE;
  payload: string;
}

export interface FetchDashboardSensorDetailRequestType {
  type: DashboardActionTypes.FETCH_SENSOR_DETAIL_REQUEST;
}

export interface FetchDashboardSensorDetailSuccessType {
  type: DashboardActionTypes.FETCH_SENSOR_DETAIL_SUCCESS;
  payload: {
    data: SensorsListType;
  };
}

export interface FetchDashboardSensorDetailFailureType {
  type: DashboardActionTypes.FETCH_SENSOR_DETAIL_FAILURE;
  payload: string;
}

export type SensorDispatchActionType =
  | FetchDashboardAIDiagnosisRequestType
  | FetchDashboardAIDiagnosisSuccessType
  | FetchDashboardAIDiagnosisFailureType
  | FetchDashboardSpindleStatusRequestType
  | FetchDashboardSpindleStatusSuccessType
  | FetchDashboardSpindleStatusFailureType
  | FetchDashboardErrorWindowsRequestType
  | FetchDashboardErrorWindowsSuccessType
  | FetchDashboardErrorWindowsFailureType
  | FetchDashboardSensorDetailRequestType
  | FetchDashboardSensorDetailSuccessType
  | FetchDashboardSensorDetailFailureType;
