import { IntrospectListType } from '../types/types';

const introspectList: IntrospectListType[] = [
  {
    id: 1,
    name: 'Sensor 1',
    sensorId: 'SNS1234',
    sensorType: 'A sensor',
    running: false,
  },
  {
    id: 2,
    name: 'Sensor 2',
    sensorId: 'SNS1234',
    sensorType: 'V sensor',

    running: true,
  },
  {
    id: 3,
    name: 'Sensor 3',
    sensorId: 'SNS1234',
    sensorType: 'A sensor',
    running: true,
  },
  {
    id: 4,
    name: 'Sensor 4',
    sensorId: 'SNS1234',
    sensorType: 'V sensor',
    running: false,
  },
  {
    id: 5,
    name: 'spindle 5',
    sensorId: 'SNS1234',
    sensorType: 'A sensor',
    running: false,
  },
];

export default introspectList;
