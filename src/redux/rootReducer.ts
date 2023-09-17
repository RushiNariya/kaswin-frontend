import { combineReducers } from 'redux';

import aiDiagnosisReducer from './aidiagnosis/reducer';
import authReducer from './auth/reducer';
import commonReducer from './common/reducer';
import dashboardReducer from './dashboard/reducer';
import introspectReducer from './introspects/reducer';
import sensorReducer from './sensors/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  sensor: sensorReducer,
  introspect: introspectReducer,
  dashboard: dashboardReducer,
  aidiagnosis: aiDiagnosisReducer,
});

export default rootReducer;
