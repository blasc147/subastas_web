import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import {Redirect, Link} from 'react-router-dom';
import useUser from '../../hooks/UseUser';
import {useLocation} from "wouter";
import { ToastContainer, toast } from 'react-toastify';

export default function Logueado(){
      const {login, isLogged} = useUser();
      const [, navigate] = useLocation();

      useEffect(() => {
        if (isLogged) navigate('/home')
      }, [isLogged, navigate]);

      useEffect(() => {
        const cliente= "sadfasdfsadfadsfs65fasd65f4ds";
        //const cliente = queryString.parse(this.props.location.search, { ignoreQueryPrefix: true }).code;
        login(cliente);
        console.log(isLogged);
      }, [isLogged]);



	
	  
  return (
    <ToastContainer />
        )
    
}