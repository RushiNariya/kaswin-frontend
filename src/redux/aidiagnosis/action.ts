import { SensorsListType } from '../../types/types';
import {
  FetchDiagnosisListFailureType,
  FetchDiagnosisListRequestType,
  FetchDiagnosisListSuccessType,
  FetchSpindleByIdFailureType,
  FetchSpindleByIdRequestType,
  FetchSpindleByIdSuccessType,
} from './action.type';
import { AiDiagnosisActionTypes } from './types';

export const fetchDiagnosisListRequest = (): FetchDiagnosisListRequestType => {
  return {
    type: AiDiagnosisActionTypes.FETCH_DIAGNOSIS_REQUEST,
  };
};

export const fetchDiagnosisListSuccess = (
  data: SensorsListType[],
): FetchDiagnosisListSuccessType => {
  return {
    type: AiDiagnosisActionTypes.FETCH_DIAGNOSIS_SUCCESS,
    payload: { data },
  };
};

export const fetchDiagnosisListFailure = (
  error: string,
): FetchDiagnosisListFailureType => {
  return {
    type: AiDiagnosisActionTypes.FETCH_DIAGNOSIS_FAILURE,
    payload: error,
  };
};

export const fetchSensorByIdRequest = (): FetchSpindleByIdRequestType => {
  return {
    type: AiDiagnosisActionTypes.FETCH_SPINDLE_BY_ID_REQUEST,
  };
};

export const fetchSensorByIdSuccess = (
  data: SensorsListType,
): FetchSpindleByIdSuccessType => {
  return {
    type: AiDiagnosisActionTypes.FETCH_SPINDLE_BY_ID_SUCCESS,
    payload: { data },
  };
};

export const fetchSensorByIdFailure = (error: string): FetchSpindleByIdFailureType => {
  return {
    type: AiDiagnosisActionTypes.FETCH_SPINDLE_BY_ID_FAILURE,
    payload: error,
  };
};
