import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import './style/navbar.css'


const Navbar = (props) => (
    <React.Fragment>
          <div className={`horizontal-header clearfix sticky trelu${props.movil}`}>
					<div className="container">
						<a id="horizontal-navtoggle" className="animated-arrow"><span></span></a>
						<span className="smllogo"><img src="../assets/images/brand/logo1.png" width="120" alt=""/></span>
						<a href="tel:245-6325-3256" className="callusbtn"><i className="fa fa-phone" aria-hidden="true"></i></a>
					</div>
				</div>

            <div>
				<div className={`horizontal-main clearfix${props.estilo}`} >
					<div className="horizontal-mainwrapper container clearfix">
						<div className="desktoplogo">
							<a href="index.html"><img src="" alt="" /></a>
						</div>
						<nav className="horizontalMenu clearfix d-md-flex">
							<ul className="horizontalMenu-list">
							
								<li aria-haspopup="true">
									<Link to="/home" >									
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
    </React.Fragment>
    
  )
  export default Navbar

