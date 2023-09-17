import sensorsList from '../../data/sensorsData';
import { SensorsListType } from '../../types/types';
import { AiDiagnosisDispatchActionType } from './action.type';
import { AiDiagnosisActionTypes } from './types';

export interface initialAiDiagnosisStateType {
  diagnosis: SensorsListType[];
  isLoading: boolean;
  isLoadingSelectedSpindle: boolean;
  isLoadingClassification: boolean;
  selectedSpindle: SensorsListType | null;
  selectedClassification: SensorsListType | null;
}

const initialAiDiagnosisState: initialAiDiagnosisStateType = {
  diagnosis: [...sensorsList],
  isLoading: false,
  isLoadingSelectedSpindle: false,
  isLoadingClassification: false,
  selectedSpindle: null,
  selectedClassification: null,
};

const AiDiagnosisReducer = (
  state = initialAiDiagnosisState,
  action: AiDiagnosisDispatchActionType,
) => {
  switch (action.type) {
    case AiDiagnosisActionTypes.FETCH_DIAGNOSIS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case AiDiagnosisActionTypes.FETCH_DIAGNOSIS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sensors: action.payload.data,
      };
    case AiDiagnosisActionTypes.FETCH_DIAGNOSIS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case AiDiagnosisActionTypes.FETCH_SPINDLE_BY_ID_REQUEST:
      return {
        ...state,
        isLoadingSelectedSpindle: true,
      };
    case AiDiagnosisActionTypes.FETCH_SPINDLE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoadingSelectedSpindle: false,
        selectedSpindle: action.payload.data,
      };
    case AiDiagnosisActionTypes.FETCH_SPINDLE_BY_ID_FAILURE:
      return {
        ...state,
        isLoadingSelectedSpindle: false,
      };

    case AiDiagnosisActionTypes.FETCH_CLASSIFICATION_REQUEST:
      return {
        ...state,
        isLoadingClassification: true,
      };
    case AiDiagnosisActionTypes.FETCH_CLASSIFICATION_SUCCESS:
      return {
        ...state,
        isLoadingClassification: false,
        selectedClassification: action.payload.data,
      };
    case AiDiagnosisActionTypes.FETCH_CLASSIFICATION_FAILURE:
      return {
        ...state,
        isLoadingClassification: false,
      };
    default:
      return state;
  }
};

export default AiDiagnosisReducer;
