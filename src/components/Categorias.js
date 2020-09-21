import React from 'react';
import icono from "./images/ecommerce2/home-theater.png";
import icono2 from "./images/ecommerce2/couch.png";
import icono3 from "./images/ecommerce2/group.png";
import icono4 from "./images/ecommerce2/networking.png";
import icono5 from "./images/ecommerce2/baby.png";
import icono6 from "./images/ecommerce2/open-book.png";
import {Link} from 'react-router-dom';



export default function Categorias(props){
 

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

					{props.data.map((item, index) => (
						<div className="col-lg-2 col-md-4 col-sm-6" key={item.CategoriaId}>
						<div className="item-all-card text-dark text-center">
							<Link to={'/lista'}></Link>
							<div className="iteam-all-icon">
								<i className={item.CategoriaIcon} ></i>
							</div>
							<div className="item-all-text mt-3">
								<h5 className="mb-0 text-body">{item.CategoriaNombre}</h5>
							</div>
						</div>
					</div>
					))}
						
					</div>

				</div>
			</div>
		</section>
                
            </React.Fragment>
        );
      }