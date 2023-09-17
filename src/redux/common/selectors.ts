import { RootStateType } from '../rootStateType';

export const selectCurrentSpindle = (state: RootStateType) => state.common.currentSpindle;

export const selectSpindleList = (state: RootStateType) => state.common;

export const selectNotificationList = (state: RootStateType) => state.common;
