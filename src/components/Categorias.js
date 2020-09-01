import React from 'react';
import icono from "./images/ecommerce2/home-theater.png";
import icono2 from "./images/ecommerce2/couch.png";
import icono3 from "./images/ecommerce2/group.png";
import icono4 from "./images/ecommerce2/networking.png";
import icono5 from "./images/ecommerce2/baby.png";
import icono6 from "./images/ecommerce2/open-book.png";
import {Link} from 'react-router-dom';



class Categorias extends React.Component{
    render() {

        return (
          <React.Fragment>
            <section className="sptb bg-white">
			<div className="container">
				<div className="section-title center-block text-center">
					<h1>Categorias</h1>
					<p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
				</div>
				<div className="item-all-cat center-block text-center">
					<div className="row">
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="item-all-card text-dark text-center">
								<Link to={'/lista'}></Link>
								<div className="iteam-all-icon">
									<img src={icono} className="imag-service" alt="Hotel" />
								</div>
								<div className="item-all-text mt-3">
									<h5 className="mb-0 text-body">Electronics</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="item-all-card text-dark text-center">
								<Link to={'/lista'}></Link>
								<div className="iteam-all-icon">
									<img src={icono3} className="imag-service" alt="Shop &amp; Store" />
								</div>
								<div className="item-all-text mt-3">
									<h5 className="mb-0 text-body">Men</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="item-all-card text-dark text-center">
								<Link to={'/lista'}></Link>
								<div className="iteam-all-icon">
									<img src={icono4} className="imag-service" alt="Gym" />
								</div>
								<div className="item-all-text mt-3">
									<h5 className="mb-0 text-body">Women</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="item-all-card text-dark text-center">
								<Link to={'/lista'}></Link>
								<div className="iteam-all-icon">
									<img src={icono5} className="imag-service" alt="Cafe" />
								</div>
								<div className="item-all-text mt-3">
									<h5 className="mb-0 text-body">Baby</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="item-all-card text-dark text-center">
								<Link to={'/lista'}></Link>
								<div className="iteam-all-icon">
									<img src={icono2} className="imag-service" alt="Tours &amp; Travels" />
								</div>
								<div className="item-all-text mt-3">
									<h5 className="mb-0 text-body">Furniture</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-2 col-md-4 col-sm-6">
							<div className="item-all-card text-dark text-center">
								<Link to={'/lista'}></Link>
								<div className="iteam-all-icon">
									<img src={icono6} className="imag-service" alt="Restaurant" />
								</div>
								<div className="item-all-text mt-3">
									<h5 className="mb-0 text-body">Books</h5>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-4">
						<a href="auction-list" className="btn btn-primary">View More</a>
					</div>
				</div>
			</div>
		</section>
                
            </React.Fragment>
        );
      }
    
}

export default Categorias;