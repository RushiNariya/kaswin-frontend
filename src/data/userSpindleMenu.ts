import { NotificationType, SpindleType } from '../types/types';

const spindleList: SpindleType[] = [
  {
    id: 1,
    name: 'spindle 1',
    running: true,
    count: 2,
  },
  {
    id: 2,
    name: 'spindle 2',
    running: false,
    count: 1,
  },
  {
    id: 3,
    name: 'spindle 3',
    running: true,
    count: undefined,
  },
  {
    id: 4,
    name: 'spindle 4',
    running: true,
    count: undefined,
  },
  {
    id: 5,
    name: 'spindle 5',
    running: false,
    count: 2,
  },
];

export const notifications: NotificationType[] = [
  {
    id: 1,
    dateTime: '18/04/2023 5:15 PM',
    content: 'Warning high vibration failure',
    action: true,
    spindleId: 2,
  },
  {
    id: 1,
    dateTime: '18/04/2023 5:15 PM',
    content: 'Temparature Fluctuations',
    action: false,
    spindleId: 1,
  },
  {
    id: 1,
    dateTime: '18/04/2023 5:15 PM',
    content: 'Warning high vibration failure',
    action: false,
  },
  {
    id: 1,
    dateTime: '18/04/2023 5:15 PM',
    content: 'Warning high vibration failure',
    action: false,
  },
  {
    id: 1,
    dateTime: '18/04/2023 5:15 PM',
    content: 'Warning high vibration failure',
    action: true,
    spindleId: 4,
  },
];

export default spindleList;
