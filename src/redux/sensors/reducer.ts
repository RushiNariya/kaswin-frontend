import sensorsList from '../../data/sensorsData';
import { SensorsListType } from '../../types/types';
import { SensorDispatchActionType } from './action.type';
import { SensorActionTypes } from './types';

export interface initialSensorStateType {
  sensors: SensorsListType[];
  isLoading: boolean;
  isLoadingSelectedSensor: boolean;
  selectedSensor: SensorsListType | null;
}

const initialSensorState: initialSensorStateType = {
  sensors: [...sensorsList],
  isLoading: false,
  isLoadingSelectedSensor: false,
  selectedSensor: null,
};

const sensorReducer = (state = initialSensorState, action: SensorDispatchActionType) => {
  switch (action.type) {
    case SensorActionTypes.FETCH_SENSORS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SensorActionTypes.FETCH_SENSORS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sensors: action.payload.data,
      };
    case SensorActionTypes.FETCH_SENSORS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case SensorActionTypes.FETCH_SENSOR_BY_ID_REQUEST:
      return {
        ...state,
        isLoadingSelectedSensor: true,
      };
    case SensorActionTypes.FETCH_SENSOR_BY_ID_SUCCESS:
      return {
        ...state,
        isLoadingSelectedSensor: false,
        selectedSensor: action.payload.data,
      };
    case SensorActionTypes.FETCH_SENSOR_BY_ID_FAILURE:
      return {
        ...state,
        isLoadingSelectedSensor: false,
      };
    default:
      return state;
  }
};

export default sensorReducer;
