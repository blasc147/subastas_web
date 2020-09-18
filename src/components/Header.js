import React, { useEffect } from 'react';
import './style/header.css'
import {Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Modal from './Auth/ModalLogin'
//import ModalLogin from './Auth/ModalLogin';
import useUser from '../hooks/UseUser';


export default function Header(){

	const {isLogged, logout, name}= useUser()

	const  handleClick= e =>{
		e.preventDefault();
			logout();
		  const logoutToaster = () => toast.info("Te deslogueaste correctamente");
		  logoutToaster();
			console.log("me fui");
	}

	
	
        return (
			
			<div className="top-bar">
				<div className="container">
					<div className="row">
						<div className="col-xl-8 col-lg-8 col-sm-4 col-7">
							<div className="top-bar-left d-flex">
								<div className="clearfix">
									<ul className="socials">
										<li>
											<a className="social-icon text-dark" href="#"><i className="fa fa-facebook"></i></a>
										</li>
										<li>
											<a className="social-icon text-dark" href="#"><i className="fa fa-twitter"></i></a>
										</li>
										<li>
											<a className="social-icon text-dark" href="#"><i className="fa fa-linkedin"></i></a>
										</li>
										<li>
											<a className="social-icon text-dark" href="#"><i className="fa fa-google-plus"></i></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-sm-8 col-5">
							<div className="top-bar-right">

									
									{ isLogged 
										?	<ul className="custom"><li><a onClick={handleClick} className="text-dark"><i className="fa fa-sign-in mr-1"></i> <span>Logout</span></a></li>
										<li>
										<Link to="/subastasUsuario" className="text-dark"><i className="fa fa-user mr-1"></i> <span>{name}</span></Link>
									</li></ul>
									
									   : 	<ul className="custom"><li><a href="http://stage.ventanillaunica.chaco.gov.ar/oauth/v2/auth_login?client_id=67_1iibple6ljy8w0ckcs8s4c888kkk8gwg8ws0owc4ogo0oo4www" className="text-dark"><i className="fa fa-sign-in mr-1"></i> <span>Login</span></a>
									</li></ul>
						
									}
								
							</div>
						</div>
					</div>
				</div>
				<ToastContainer />
			</div>

				
			
        );
      }
    
