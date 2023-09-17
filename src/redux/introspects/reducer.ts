import introspectList from '../../data/introspectData';
import { IntrospectListType } from '../../types/types';
import { IntrospectDispatchActionType } from './action.type';
import { IntrospectActionTypes } from './types';

export interface initialIntrospectStateType {
  introspects: IntrospectListType[];
  isLoading: boolean;
  isLoadingSelectedIntrospect: boolean;
  selectedIntrospect: IntrospectListType | null;
}

const initialIntrospectState: initialIntrospectStateType = {
  introspects: [...introspectList],
  isLoading: false,
  isLoadingSelectedIntrospect: false,
  selectedIntrospect: null,
};

const introspectReducer = (
  state = initialIntrospectState,
  action: IntrospectDispatchActionType,
) => {
  switch (action.type) {
    case IntrospectActionTypes.FETCH_INTROSPECT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case IntrospectActionTypes.FETCH_INTROSPECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        introspects: action.payload.data,
      };
    case IntrospectActionTypes.FETCH_INTROSPECT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    case IntrospectActionTypes.FETCH_INTROSPECT_BY_ID_REQUEST:
      return {
        ...state,
        isLoadingSelectedIntrospect: true,
      };
    case IntrospectActionTypes.FETCH_INTROSPECT_BY_ID_SUCCESS:
      return {
        ...state,
        isLoadingSelectedIntrospect: false,
        selectedIntrospect: action.payload.data,
      };
    case IntrospectActionTypes.FETCH_INTROSPECT_BY_ID_FAILURE:
      return {
        ...state,
        isLoadingSelectedIntrospect: false,
      };
    default:
      return state;
  }
};

export default introspectReducer;
