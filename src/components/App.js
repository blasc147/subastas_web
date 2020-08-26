import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from './Layout';
import NotFound from './NotFound';
import ListaArticulos from '../pages/ListaArticulos';


function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/lista" component={ListaArticulos} />
        <Route path="/404" component={NotFound} />
        <Redirect from="" to="/home"/>
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
