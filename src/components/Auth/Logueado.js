import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import {Redirect, Link} from 'react-router-dom';
import useUser from '../../hooks/UseUser';
import {useLocation} from "wouter";
import { ToastContainer, toast } from 'react-toastify';
import PageLoading from '../../components/PageLoading';

export default function Logueado(props){
      const {login, isLogged} = useUser();
      const {loading, setLoading} = useState(false);

      useEffect(() => {
        const cliente = queryString.parse(props.location.search, { ignoreQueryPrefix: true }).code;
        
        try {
          fetch('http://devapp85.ecom.com.ar/SubastasTest/servlet/com.subastas.acallback?'+cliente)
                .then(response => {
                          if (response.ok) {
                              return response.json();
                            } else {
                              throw new Error('Error en las credenciales');
                            }
                      })
                .then(data => {
                          login(data.GamToken, data.GamWsLoginUser.User.FirstName, data.GamWsLoginUser.User.Code);
                          const toasterlogued = () => toast.success("Bienvenido"+" "+data.GamWsLoginUser.User.FirstName);
                          toasterlogued();
                          
                      })
                  .catch((error) => {
                  const toastererror = () => toast.error("Ocurrio un error en el proceso de logueo. Intentar nuevamente mas tarde");
                  toastererror();
                  console.log(error);
                
                        });
            } catch (error) {
                console.log("error en la api");
          
        }
        
      });

	  
  return (
    <React.Fragment> 
      <Redirect to='/home'/>
    
    <ToastContainer />
    </React.Fragment>
        )
    
}