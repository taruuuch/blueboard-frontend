export interface IRoutes {
    path: string;
    exact?: boolean;
    component: () => any;
    layout?: any;
    restricted: boolean;
};
