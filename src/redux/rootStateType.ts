import {
  TypedUseSelectorHook,
  useDispatch as useGenericDispatch,
  useSelector as useGenericSelector,
} from 'react-redux';
import { Dispatch } from 'redux';

import { AuthDispatchActionType } from './auth/action.type';
import { CommonDispatchActionType } from './common/action.type';
import { IntrospectDispatchActionType } from './introspects/action.type';
import rootReducer from './rootReducer';
import { SensorDispatchActionType } from './sensors/action.type';

export type RootStateType = ReturnType<typeof rootReducer>;
export type RootActionType =
  | AuthDispatchActionType
  | CommonDispatchActionType
  | SensorDispatchActionType
  | IntrospectDispatchActionType;

export const useSelector: TypedUseSelectorHook<RootStateType> = useGenericSelector;

export const useDispatch: () => Dispatch<RootActionType> = useGenericDispatch;
