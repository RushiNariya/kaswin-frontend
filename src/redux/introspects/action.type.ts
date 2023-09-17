import { IntrospectListType } from '../../types/types';
import { IntrospectActionTypes } from './types';

export interface FetchIntrospectListRequestType {
  type: IntrospectActionTypes.FETCH_INTROSPECT_REQUEST;
}

export interface FetchIntrospectListSuccessType {
  type: IntrospectActionTypes.FETCH_INTROSPECT_SUCCESS;
  payload: {
    data: IntrospectListType[];
  };
}

export interface FetchIntrospectListFailureType {
  type: IntrospectActionTypes.FETCH_INTROSPECT_FAILURE;
  payload: string;
}

export interface FetchIntrospectByIdRequestType {
  type: IntrospectActionTypes.FETCH_INTROSPECT_BY_ID_REQUEST;
}

export interface FetchIntrospectByIdSuccessType {
  type: IntrospectActionTypes.FETCH_INTROSPECT_BY_ID_SUCCESS;
  payload: {
    data: IntrospectListType;
  };
}

export interface FetchIntrospectByIdFailureType {
  type: IntrospectActionTypes.FETCH_INTROSPECT_BY_ID_FAILURE;
  payload: string;
}

export type IntrospectDispatchActionType =
  | FetchIntrospectListRequestType
  | FetchIntrospectListSuccessType
  | FetchIntrospectListFailureType
  | FetchIntrospectByIdRequestType
  | FetchIntrospectByIdSuccessType
  | FetchIntrospectByIdFailureType;
