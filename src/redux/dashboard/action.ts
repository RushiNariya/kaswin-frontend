import { SensorsListType } from '../../types/types';
import {
  FetchDashboardAIDiagnosisFailureType,
  FetchDashboardAIDiagnosisRequestType,
  FetchDashboardAIDiagnosisSuccessType,
  FetchDashboardErrorWindowsFailureType,
  FetchDashboardErrorWindowsRequestType,
  FetchDashboardErrorWindowsSuccessType,
  FetchDashboardSensorDetailFailureType,
  FetchDashboardSensorDetailRequestType,
  FetchDashboardSensorDetailSuccessType,
  FetchDashboardSpindleStatusFailureType,
  FetchDashboardSpindleStatusRequestType,
  FetchDashboardSpindleStatusSuccessType,
} from './action.type';
import { DashboardActionTypes } from './types';

export const fetchDashboardAIDiagnosisRequest =
  (): FetchDashboardAIDiagnosisRequestType => ({
    type: DashboardActionTypes.FETCH_DASHBOARD_REQUEST,
  });

export const fetchDashboardAIDiagnosisSuccess = (
  data: SensorsListType[],
): FetchDashboardAIDiagnosisSuccessType => ({
  type: DashboardActionTypes.FETCH_DASHBOARD_SUCCESS,
  payload: { data },
});

export const fetchDashboardAIDiagnosisFailure = (
  error: string,
): FetchDashboardAIDiagnosisFailureType => ({
  type: DashboardActionTypes.FETCH_DASHBOARD_FAILURE,
  payload: error,
});

export const fetchDashboardSpindleStatusRequest =
  (): FetchDashboardSpindleStatusRequestType => ({
    type: DashboardActionTypes.FETCH_SPINDLE_STATUS_REQUEST,
  });

export const fetchDashboardSpindleStatusSuccess = (
  data: SensorsListType,
): FetchDashboardSpindleStatusSuccessType => ({
  type: DashboardActionTypes.FETCH_SPINDLE_STATUS_SUCCESS,
  payload: { data },
});

export const fetchDashboardSpindleStatusFailure = (
  error: string,
): FetchDashboardSpindleStatusFailureType => ({
  type: DashboardActionTypes.FETCH_SPINDLE_STATUS_FAILURE,
  payload: error,
});

export const fetchDashboardErrorWindowsRequest =
  (): FetchDashboardErrorWindowsRequestType => ({
    type: DashboardActionTypes.FETCH_ERROR_WINDOWS_REQUEST,
  });

export const fetchDashboardErrorWindowsSuccess = (
  data: SensorsListType,
): FetchDashboardErrorWindowsSuccessType => ({
  type: DashboardActionTypes.FETCH_ERROR_WINDOWS_SUCCESS,
  payload: { data },
});

export const fetchDashboardErrorWindowsFailure = (
  error: string,
): FetchDashboardErrorWindowsFailureType => ({
  type: DashboardActionTypes.FETCH_ERROR_WINDOWS_FAILURE,
  payload: error,
});

export const fetchDashboardSensorDetailRequest =
  (): FetchDashboardSensorDetailRequestType => ({
    type: DashboardActionTypes.FETCH_SENSOR_DETAIL_REQUEST,
  });

export const fetchDashboardSensorDetailSuccess = (
  data: SensorsListType,
): FetchDashboardSensorDetailSuccessType => ({
  type: DashboardActionTypes.FETCH_SENSOR_DETAIL_SUCCESS,
  payload: { data },
});

export const fetchDashboardSensorDetailFailure = (
  error: string,
): FetchDashboardSensorDetailFailureType => ({
  type: DashboardActionTypes.FETCH_SENSOR_DETAIL_FAILURE,
  payload: error,
});
