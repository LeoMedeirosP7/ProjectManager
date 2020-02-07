import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CriaConta from './components/MainComponents/CriaConta';
import Login from './components/MainComponents/Login';
import Gerenciador from './components/MainComponents/Gerenciador';
import Info from './components/MainComponents/Gerenciador/Info'

const routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/CriaConta' component={CriaConta} />
            <Route path='/Gerenciador/:mode' component={Gerenciador} />
            <Route path='/info/:mode/:method' component={Info} />
        </Switch>
    </BrowserRouter>
);

export default routes;