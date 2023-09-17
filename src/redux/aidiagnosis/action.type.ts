import { NotificationType, SensorsListType, SpindleType } from '../../types/types';
import { AiDiagnosisActionTypes } from './types';

export interface FetchClassificationRequestType {
  type: AiDiagnosisActionTypes.FETCH_CLASSIFICATION_REQUEST;
}

export interface FetchClassificationSuccessType {
  type: AiDiagnosisActionTypes.FETCH_CLASSIFICATION_SUCCESS;
  payload: {
    data: SensorsListType[];
  };
}

export interface FetchClassificationFailureType {
  type: AiDiagnosisActionTypes.FETCH_CLASSIFICATION_FAILURE;
  payload: string;
}

export interface FetchSpindleByIdRequestType {
  type: AiDiagnosisActionTypes.FETCH_SPINDLE_BY_ID_REQUEST;
}

export interface FetchSpindleByIdSuccessType {
  type: AiDiagnosisActionTypes.FETCH_SPINDLE_BY_ID_SUCCESS;
  payload: {
    data: SensorsListType;
  };
}

export interface FetchSpindleByIdFailureType {
  type: AiDiagnosisActionTypes.FETCH_SPINDLE_BY_ID_FAILURE;
  payload: string;
}

export interface FetchDiagnosisListRequestType {
  type: AiDiagnosisActionTypes.FETCH_DIAGNOSIS_REQUEST;
}

export interface FetchDiagnosisListSuccessType {
  type: AiDiagnosisActionTypes.FETCH_DIAGNOSIS_SUCCESS;
  payload: {
    data: SensorsListType[];
  };
}

export interface FetchDiagnosisListFailureType {
  type: AiDiagnosisActionTypes.FETCH_DIAGNOSIS_FAILURE;
  payload: string;
}

export type AiDiagnosisDispatchActionType =
  | FetchClassificationRequestType
  | FetchClassificationSuccessType
  | FetchClassificationFailureType
  | FetchSpindleByIdRequestType
  | FetchSpindleByIdSuccessType
  | FetchSpindleByIdFailureType
  | FetchDiagnosisListRequestType
  | FetchDiagnosisListSuccessType
  | FetchDiagnosisListFailureType;
