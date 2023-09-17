import spindleList, { notifications } from '../../data/userSpindleMenu';
import { NotificationType, SpindleType } from '../../types/types';
import { CommonDispatchActionType } from './action.type';
import { CommonActionTypes } from './types';

export interface initialCommonStateType {
  spindles: SpindleType[];
  isLoading: boolean;
  isLoadingNotification: boolean;
  currentSpindle: SpindleType | null;
  notifications: NotificationType[];
}

const initialCommonState: initialCommonStateType = {
  spindles: [...spindleList],
  isLoading: false,
  isLoadingNotification: false,
  currentSpindle: null,
  notifications: [...notifications],
};

const commonReducer = (state = initialCommonState, action: CommonDispatchActionType) => {
  switch (action.type) {
    case CommonActionTypes.FETCH_SPINDLES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CommonActionTypes.FETCH_SPINDLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        spindles: action.payload.data,
      };
    case CommonActionTypes.FETCH_SPINDLES_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case CommonActionTypes.CHANGE_CURRENT_SPINDLE:
      return {
        ...state,
        currentSpindle: action.payload,
      };
    case CommonActionTypes.FETCH_NOTIFICATIONS_REQUEST:
      return {
        ...state,
        isLoadingNotification: true,
      };
    case CommonActionTypes.FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        isLoadingNotification: false,
        notifications: action.payload.data,
      };
    case CommonActionTypes.FETCH_NOTIFICATIONS_FAILURE:
      return {
        ...state,
        isLoadingNotification: false,
      };
    default:
      return state;
  }
};

export default commonReducer;
