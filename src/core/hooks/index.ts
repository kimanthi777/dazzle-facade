/**
 * TODO: split into files [caching, storage, data-fetching, UI]
 * TODO: ✅️ Caching, storage(localstorage, indexDB, session storage), Data Fetching, UI(mouse scroll, window resize, etc)
 * PLOTTWIST: 
 */


export {
    matchRoutes,
    useRoutes,
    generatePath,
    resolvePath,
    useNavigate,
    useLocation,
    useResolvedPath,
    useNavigationType,
    useParams,
    useSearchParams,
} from 'react-router-dom';

export * from './useAppRoutes'