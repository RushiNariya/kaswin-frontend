import { SensorsListType } from '../types/types';

const sensorsList: SensorsListType[] = [
  {
    id: 1,
    name: 'Spindle 1',
    sensorId: 'SNS1234',
    running: false,
    sensorType: 'A sensor',
    strength: 'medium',
    value: 123,
  },
  {
    id: 2,
    name: 'Spindle 2',
    sensorId: 'SNS1234',
    running: false,
    sensorType: 'V sensor',
    strength: 'low',
    value: 123,
  },
  {
    id: 3,
    name: 'Spindle 3',
    sensorId: 'SNS1234',
    running: true,
    sensorType: 'A sensor',
    strength: 'medium',
    value: 123,
  },
  {
    id: 4,
    name: 'Spindle 4',
    sensorId: 'SNS1234',
    running: false,
    sensorType: 'V sensor',
    strength: 'high',
    value: 123,
  },
  {
    id: 5,
    name: 'Spindle 5',
    sensorId: 'SNS1234',
    running: true,
    sensorType: 'A sensor',
    strength: 'medium',
    value: 123,
  },
];

export default sensorsList;
