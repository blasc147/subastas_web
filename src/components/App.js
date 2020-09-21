import React,{ Fragment, useEffect, useRef, useState,Suspense } from 'react';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';
//import Home from '../pages/Home';
import Layout from './Layout';
import Header from './Header';
import NavBar from './NavBar';
import NotFound from './NotFound';
import SubastasUsuario from '../pages/SubastasUsuario';
import ListaArticulos from '../pages/ListaArticulos';
import DetalleArticulo from '../components/Detalle/DetalleContainer';
import Login from '../components/Auth/Login';
import Logueado from '../components/Auth/Logueado';
import { UserContextProvider } from "./Context/UserContext";
import { StickyContainer, Sticky } from 'react-sticky';
const Home = React.lazy(() => import("../pages/Home"));


function App() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <UserContextProvider>
    <Suspense fallback={null}>
    <BrowserRouter>
    
      <Layout>
      <div className="header-main">
        <Header />
        <div className={`sticky-wrapper${isSticky ? ' is-sticky' : ''}`} ref={ref}>
            <NavBar estilo={`${isSticky ? ' stiki' : ''}`} movil={`${isSticky ? ' sticky-pin' : ''}`}/>
        </div>
        </div>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/lista" component={ListaArticulos} />
        <Route exact path="/detalle/:subId/:artId" component={DetalleArticulo} />
        <Route exact path="/login" component={Logueado} />
        <Route exact path="/subastasUsuario" component={SubastasUsuario} />
        <Route component={NotFound} />
      </Switch>
      
      </Layout>
      
      
      </BrowserRouter>
      </Suspense>
     </UserContextProvider>
  );
}

export default App;
