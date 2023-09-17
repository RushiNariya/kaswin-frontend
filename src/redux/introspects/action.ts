import { IntrospectListType } from '../../types/types';
import {
  FetchIntrospectByIdFailureType,
  FetchIntrospectByIdRequestType,
  FetchIntrospectByIdSuccessType,
  FetchIntrospectListFailureType,
  FetchIntrospectListRequestType,
  FetchIntrospectListSuccessType,
} from './action.type';
import { IntrospectActionTypes } from './types';

export const fetchIntrospectsListRequest = (): FetchIntrospectListRequestType => {
  return {
    type: IntrospectActionTypes.FETCH_INTROSPECT_REQUEST,
  };
};

export const fetchIntrospectsListSuccess = (
  data: IntrospectListType[],
): FetchIntrospectListSuccessType => {
  return {
    type: IntrospectActionTypes.FETCH_INTROSPECT_SUCCESS,
    payload: { data },
  };
};

export const fetchIntrospectsListFailure = (
  error: string,
): FetchIntrospectListFailureType => {
  return {
    type: IntrospectActionTypes.FETCH_INTROSPECT_FAILURE,
    payload: error,
  };
};

export const fetchIntrospectByIdRequest = (): FetchIntrospectByIdRequestType => {
  return {
    type: IntrospectActionTypes.FETCH_INTROSPECT_BY_ID_REQUEST,
  };
};

export const fetchIntrospectByIdSuccess = (
  data: IntrospectListType,
): FetchIntrospectByIdSuccessType => {
  return {
    type: IntrospectActionTypes.FETCH_INTROSPECT_BY_ID_SUCCESS,
    payload: { data },
  };
};

export const fetchIntrospectByIdFailure = (
  error: string,
): FetchIntrospectByIdFailureType => {
  return {
    type: IntrospectActionTypes.FETCH_INTROSPECT_BY_ID_FAILURE,
    payload: error,
  };
};
