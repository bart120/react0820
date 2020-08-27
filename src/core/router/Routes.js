import React, { Component, Suspense } from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../../pages/home/HomePage';
import RoomAddPage from '../../pages/rooms/RoomAddPage';
import RoomListPage from '../../pages/rooms/RoomListPage';
import { CircularProgress } from '@material-ui/core';


//import LoginPage from '../../pages/authentication/LoginPage';
const loginPage = React.lazy(() => import('../../pages/authentication/LoginPage'));

class Routes extends Component {

    render() {
        return (
            <Suspense fallback={(<CircularProgress />)}>
                <Route path="/" exact component={HomePage} />
                <Route path="/rooms/list" exact component={RoomListPage} />
                <Route path="/rooms/add" exact component={RoomAddPage} />
                <Route path="/auth/login" exact component={loginPage} />
            </Suspense>
        );
    }

}

export default Routes;