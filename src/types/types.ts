export interface SpindleType {
  id: number;
  name: string;
  running: boolean;
  count?: number;
}

export interface NotificationType {
  id: number;
  dateTime: string;
  content: string;
  action: boolean;
  spindleId?: number;
}

export interface IntrospectListType {
  id: number;
  name: string;
  sensorId: string;
  sensorType: string;
  running: boolean;
}

export interface SensorsListType {
  id: number;
  name: string;
  sensorId: string;
  running: boolean;
  sensorType: string;
  strength: string;
  value: number;
}
