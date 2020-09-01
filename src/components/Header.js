import React from 'react';
import logo from './images/logo.png'
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render() {

        return (
            <div className="header-main">
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
								<ul className="custom">
									<li>
										<a href="register.html" className="text-dark"><i className="fa fa-user mr-1"></i> <span>Registrarse</span></a>
									</li>
									<li>
										<a href="login.html" className="text-dark"><i className="fa fa-sign-in mr-1"></i> <span>Login</span></a>
									</li>
									<li className="dropdown">
										<a href="#" className="text-dark" data-toggle="dropdown"><i className="fa fa-home mr-1"></i><span> My Dashboard</span></a>
										<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
											<a href="mydash.html" className="dropdown-item" >
												<i className="dropdown-icon si si-user"></i> Mi cuenta
											</a>
											<a className="dropdown-item" href="#">
												<i className="dropdown-icon si si-envelope"></i> Inbox
											</a>
											<a className="dropdown-item" href="#">
												<i className="dropdown-icon si si-bell"></i> Notificaciones
											</a>
											<a href="mydash.html" className="dropdown-item" >
												<i className="dropdown-icon  si si-settings"></i> Configuracion
											</a>
											<a className="dropdown-item" href="#">
												<i className="dropdown-icon si si-power"></i> Log out
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="sticky">
				<div className="horizontal-header clearfix ">
					<div className="container">
						<a id="horizontal-navtoggle" className="animated-arrow"><span></span></a>
						<span className="smllogo"><img src="../assets/images/brand/logo1.png" width="120" alt=""/></span>
						<a href="tel:245-6325-3256" className="callusbtn"><i className="fa fa-phone" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>

            <div>
				<div className="horizontal-main clearfix">
					<div className="horizontal-mainwrapper container clearfix">
						<div className="desktoplogo">
							<a href="index.html"><img src={logo} alt="" /></a>
						</div>
						<nav className="horizontalMenu clearfix d-md-flex">
							<ul className="horizontalMenu-list">
							
								<li aria-haspopup="true">
									<Link to="/home">
                                    	Inicio						
                                    </Link>
								</li>
								<li aria-haspopup="true"><a href="about.html">Institucional </a></li>
								<li aria-haspopup="true"><a href="about.html">Reglamento </a></li>

								<li aria-haspopup="true"><a href="about.html">Tutoriales </a></li>
						
								<li aria-haspopup="true"><a href="contact.html"> Contacto <span className="wsarrow"></span></a></li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
        );
      }
    
}

export default Header;