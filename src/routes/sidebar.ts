import { routeType, routeTypeChildren } from './routes.type';

const adminSidebarRoutes: (routeType | routeTypeChildren)[] = [
  {
    title: 'Dashboard',
    icon: 'ph:squares-four-fill',
    manualIcon: false,
    path: '/dashboard',
  },
  {
    title: 'Sensors',
    icon: `ion:git-network-sharp`,
    manualIcon: false,
    path: '/sensors',
    children: [
      {
        title: 'Introspect',
        icon: `emojione-monotone:letter-v`,
        path: '/introspect',
        manualIcon: false,
      },
    ],
  },
  {
    title: 'AI Diagnosis',
    icon: 'majesticons:pulse-line',
    manualIcon: false,
    path: '/AI-diagnosis',
  },
  {
    title: 'Settings',
    icon: 'icon-park-solid:setting-two',
    manualIcon: false,
    path: '/setting',
  },
  {
    title: 'Help',
    icon: 'material-symbols:help',
    manualIcon: false,
    path: '/help',
  },
];

export default adminSidebarRoutes;
