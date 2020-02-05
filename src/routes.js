import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CriaConta from './components/MainComponents/CriaConta';
import Login from './components/MainComponents/Login';
import Gerenciador from './components/MainComponents/Gerenciador';

const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/CriaConta' component={CriaConta} />
            <Route path='/Gerenciador/:mode' component={Gerenciador} />
        </Switch>
    </BrowserRouter>
);

export default routes;