// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowDetail from './components/ShowDetail';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ShowList} />
        <Route path="/show/:id" component={ShowDetail} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
