import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, About, Node } from '../../templates';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/:id" component={Node} />
    </Switch>
  </main>
);

export default Main;
