import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from './Layout';
import NotFound from './NotFound';
import ListaArticulos from '../pages/ListaArticulos';
import DetalleArticulo from '../pages/DetalleArticulo';


function App() {
  return (
    <BrowserRouter>
      <Layout>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/lista" component={ListaArticulos} />
        <Route exact path="/detalle" component={DetalleArticulo} />
        <Route path="/404" component={NotFound} />
        <Redirect from="" to="/home"/>
      </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
