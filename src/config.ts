
export type SubmeuProps = {
    name?: string;
    path?: string;
    icon?: string;
    routes?: SubmeuProps[];
    redirect?: string;
    hideInMenu?: boolean;
    locale?: string;
    component?: string;
    exact?: boolean;
    accessTO?: string[];
    key?: string;
    parentKey?: string;
};