import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Routes from './routeWrapper';

import LoginPage from '../pages/login';
import UserPage from '../pages/user';
import HomePage from '../pages/home';
import CardPage from '../pages/cards';
import UserUpdate from '../pages/userupdate';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Routes path="/login" exact component={LoginPage} />
        <Routes path="/cadastro" exact component={UserPage} />
        <Routes path="/" exact isPrivate component={HomePage} />
        <Routes path="/cards" exact isPrivate component={CardPage} />
        <Routes path="/userupdate" exact isPrivate component={UserUpdate} />
      </Switch>
    </BrowserRouter>
  );
};
