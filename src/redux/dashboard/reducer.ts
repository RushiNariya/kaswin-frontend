import sensorsList from '../../data/sensorsData';
import { SensorsListType } from '../../types/types';
import { SensorDispatchActionType } from './action.type';
import { DashboardActionTypes } from './types';

export interface initialDashboardStateType {
  spindleStatus: null;
  errorWindows: null;
  sensorDetail: null;
  aiDiagnosis: null;
  isLoadingSpindleStatus: boolean;
  isLoadingSensorDetail: boolean;
  isLoadingAiDiagnosis: boolean;
  isLoadingErrorWindow: boolean;
}

const initialDashboardState: initialDashboardStateType = {
  spindleStatus: null,
  errorWindows: null,
  sensorDetail: null,
  aiDiagnosis: null,
  isLoadingSpindleStatus: false,
  isLoadingSensorDetail: false,
  isLoadingAiDiagnosis: false,
  isLoadingErrorWindow: false,
};

const dashboardReducer = (
  state = initialDashboardState,
  action: SensorDispatchActionType,
) => {
  switch (action.type) {
    case DashboardActionTypes.FETCH_DASHBOARD_REQUEST:
      return {
        ...state,
        isLoadingAiDiagnosis: true,
      };
    case DashboardActionTypes.FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        isLoadingAiDiagnosis: false,
        aiDiagnosis: action.payload.data,
      };
    case DashboardActionTypes.FETCH_DASHBOARD_FAILURE:
      return {
        ...state,
        isLoadingAiDiagnosis: false,
      };

    case DashboardActionTypes.FETCH_SPINDLE_STATUS_REQUEST:
      return {
        ...state,
        isLoadingSpindleStatus: true,
      };
    case DashboardActionTypes.FETCH_SPINDLE_STATUS_SUCCESS:
      return {
        ...state,
        isLoadingSpindleStatus: false,
        spindleStatus: action.payload.data,
      };
    case DashboardActionTypes.FETCH_SPINDLE_STATUS_FAILURE:
      return {
        ...state,
        isLoadingSpindleStatus: false,
      };
    case DashboardActionTypes.FETCH_ERROR_WINDOWS_REQUEST:
      return {
        ...state,
        isLoadingErrorWindow: true,
      };
    case DashboardActionTypes.FETCH_ERROR_WINDOWS_SUCCESS:
      return {
        ...state,
        isLoadingErrorWindow: false,
        errorWindows: action.payload.data,
      };
    case DashboardActionTypes.FETCH_ERROR_WINDOWS_FAILURE:
      return {
        ...state,
        isLoadingErrorWindow: false,
      };
    case DashboardActionTypes.FETCH_SENSOR_DETAIL_REQUEST:
      return {
        ...state,
        isLoadingSensorDetail: true,
      };
    case DashboardActionTypes.FETCH_SENSOR_DETAIL_SUCCESS:
      return {
        ...state,
        isLoadingSensorDetail: false,
        sensorDetail: action.payload.data,
      };
    case DashboardActionTypes.FETCH_SENSOR_DETAIL_FAILURE:
      return {
        ...state,
        isLoadingSensorDetail: false,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
