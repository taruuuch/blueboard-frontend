export interface IRoutes {
    path: string;
    exact?: boolean;
    component: () => any;
    layout?: any;
    restricted?: boolean;
};

export interface IRenderRoutes {
    routes: IRoutes[];
    isAuthenticated: boolean;
};
