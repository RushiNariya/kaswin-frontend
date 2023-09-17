import { NotificationType, SensorsListType, SpindleType } from '../../types/types';
import { SensorActionTypes } from './types';

export interface FetchSensorsListRequestType {
  type: SensorActionTypes.FETCH_SENSORS_REQUEST;
}

export interface FetchSensorsListSuccessType {
  type: SensorActionTypes.FETCH_SENSORS_SUCCESS;
  payload: {
    data: SensorsListType[];
  };
}

export interface FetchSensorsListFailureType {
  type: SensorActionTypes.FETCH_SENSORS_FAILURE;
  payload: string;
}

export interface FetchSensorByIdRequestType {
  type: SensorActionTypes.FETCH_SENSOR_BY_ID_REQUEST;
}

export interface FetchSensorByIdSuccessType {
  type: SensorActionTypes.FETCH_SENSOR_BY_ID_SUCCESS;
  payload: {
    data: SensorsListType;
  };
}

export interface FetchSensorByIdFailureType {
  type: SensorActionTypes.FETCH_SENSOR_BY_ID_FAILURE;
  payload: string;
}

export type SensorDispatchActionType =
  | FetchSensorsListRequestType
  | FetchSensorsListSuccessType
  | FetchSensorsListFailureType
  | FetchSensorByIdRequestType
  | FetchSensorByIdSuccessType
  | FetchSensorByIdFailureType;
