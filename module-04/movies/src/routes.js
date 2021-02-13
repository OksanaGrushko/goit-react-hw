import { lazy } from 'react';

export default [
    {
        path: '/',
        label: 'Home',
        exact: true,
        component: lazy(() =>
            import('./views/HomePage' /* webpackChunkName: "home-page-view" */),
        ),
    },
    {
        path: '/movies/:movieId/cast',
        label: 'Cast',
        exact: false,
        component: lazy(() =>
            import('./views/Cast.js' /* webpackChunkName: "cast"*/),
        ),
    },
    {
        path: '/movies/:movieId/revievs',
        label: 'Revievs',
        exact: false,
        component: lazy(() =>
            import('./views/Revievs.js' /* webpackChunkName: "revievs"*/),
        ),
    },
    {
        path: '/movies/:movieId',
        label: 'MovieDetailsPage',
        exact: false,
        component: lazy(() =>
            import(
                './views/MovieDetailsPage' /* webpackChunkName: "movieDetailsPage"*/
            ),
        ),
    },
    {
        path: '/movies',
        label: 'Movies',
        exact: false,
        component: lazy(() =>
            import('./views/MoviesPage' /* webpackChunkName: "moviesPage"*/),
        ),
    },
    {
        path: '',
        label: 'NotFound',
        exact: false,
        component: lazy(() =>
            import('./views/NotFound' /* webpackChunkName: "not-found-view" */),
        ),
    },
];
