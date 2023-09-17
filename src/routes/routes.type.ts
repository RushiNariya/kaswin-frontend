export interface routeType {
  title: string;
  icon: string;
  path: string;
  manualIcon: boolean;
}

export interface routeTypeChildren {
  title: string;
  icon: string;
  manualIcon: boolean;
  path: string;
  children: {
    title: string;
    icon: string;
    path: string;
    manualIcon: boolean;
  }[];
}
