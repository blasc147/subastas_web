import React,{ Suspense } from 'react';
import { Link, Route, Switch } from "wouter";
//import Home from '../pages/Home';
import Layout from './Layout';
import Header from './Header';
import NotFound from './NotFound';

import ListaArticulos from '../pages/ListaArticulos';
import DetalleArticulo from '../components/Detalle/DetalleContainer';
import Login from '../components/Auth/Login';
import Logueado from '../components/Auth/Logueado';
import { UserContextProvider } from "./Context/UserContext";

const Home = React.lazy(() => import("../pages/Home"));


function App() {
  return (
    <UserContextProvider>
    <Suspense fallback={null}>
      <Layout>
      <Header />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/lista" component={ListaArticulos} />
        <Route exact path="/detalle/:subId/:artId" component={DetalleArticulo} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Logueado} />
       
      </Switch>
      </Layout>
      <Route exact path="/404" component={NotFound} />
      </Suspense>
     </UserContextProvider>
  );
}

export default App;
