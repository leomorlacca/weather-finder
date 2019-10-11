import React from 'react';

const HomePageContainer = React.lazy(() => import('./containers/HomePage')),
    ShowResultContainer = React.lazy(() => import('./containers/ShowResult'));

const routes = [
    { path: '/', exact:true, name: 'Home', component: HomePageContainer },
    { path: '/Home', exact:true, name: 'Home', component: HomePageContainer },
    { path: '/Result', exact: true, name: 'Result', component: ShowResultContainer }
]

export default routes;