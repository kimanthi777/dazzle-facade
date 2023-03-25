import { useRoutes } from './index'

type routeProps = {
    path: string;
    element: JSX.Element
}

export function useAppRoutes(routes: routeProps[]) {
    const appRoutes = useRoutes(routes);
    return appRoutes;
}
