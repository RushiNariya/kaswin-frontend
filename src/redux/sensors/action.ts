import { SensorsListType } from '../../types/types';
import {
  FetchSensorByIdFailureType,
  FetchSensorByIdRequestType,
  FetchSensorByIdSuccessType,
  FetchSensorsListFailureType,
  FetchSensorsListRequestType,
  FetchSensorsListSuccessType,
} from './action.type';
import { SensorActionTypes } from './types';

export const fetchSensorsListRequest = (): FetchSensorsListRequestType => {
  return {
    type: SensorActionTypes.FETCH_SENSORS_REQUEST,
  };
};

export const fetchSensorsListSuccess = (
  data: SensorsListType[],
): FetchSensorsListSuccessType => {
  return {
    type: SensorActionTypes.FETCH_SENSORS_SUCCESS,
    payload: { data },
  };
};

export const fetchSensorsListFailure = (error: string): FetchSensorsListFailureType => {
  return {
    type: SensorActionTypes.FETCH_SENSORS_FAILURE,
    payload: error,
  };
};

export const fetchSensorByIdRequest = (): FetchSensorByIdRequestType => {
  return {
    type: SensorActionTypes.FETCH_SENSOR_BY_ID_REQUEST,
  };
};

export const fetchSensorByIdSuccess = (
  data: SensorsListType,
): FetchSensorByIdSuccessType => {
  return {
    type: SensorActionTypes.FETCH_SENSOR_BY_ID_SUCCESS,
    payload: { data },
  };
};

export const fetchSensorByIdFailure = (error: string): FetchSensorByIdFailureType => {
  return {
    type: SensorActionTypes.FETCH_SENSOR_BY_ID_FAILURE,
    payload: error,
  };
};
