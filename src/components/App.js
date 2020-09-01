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
        <Route exact path="/detalle/:handle/ver" component={DetalleArticulo} />
        <Redirect from="" to="/home"/>
      </Switch>
      </Layout>
      <Route exact path="/404" component={NotFound} />
    </BrowserRouter>
  );
}

export default App;
