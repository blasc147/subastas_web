import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



function ArticulosCarousel(props){
	const articulos = props.articulos;
	const responsive = {
		superLargeDesktop: {
		  // the naming can be any, depends on you.
		  breakpoint: { max: 4000, min: 3000 },
		  items: 5
		},
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 3
		},
		tablet: {
		  breakpoint: { max: 1024, min: 464 },
		  items: 2
		},
		mobile: {
		  breakpoint: { max: 464, min: 0 },
		  items: 1
		}
	  };
	
  return (
    <div className={props.clase}>
			<div className="container">
				<div className="section-title center-block text-center">
  				<h1>{props.titulo}</h1>
					<p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
				</div>

				<Carousel 
				responsive={responsive}
				removeArrowOnDeviceType={["tablet", "mobile"]}
				itemClass="carousel-item-padding-40-px" >

				{articulos.map(item => {
					return(
					<div className="item" key={item.id}>
					<div className="card mb-0">
						<div className="arrow-ribbon bg-danger">Urgent</div>
						<div className="product-item2">
							<div className="product-item2-img text-center">
								<img src={item.image} alt="img" className="mx-auto"/>
							</div>
						</div>
						<div className="card-body">
							<div className="product-item2-desc">
								<h4 className="font-weight-semibold text-dark"><a href="auction.html">{item.name}</a></h4>
								<p className="text-muted">{item.status}</p>
								
								<div className="bg-secondary text-white p-2 mt-3 text-center">
									<span className="hour">03 Days 22 : 47 : 17</span>
								</div>
							</div>
						</div>
						<div className="card-footer">
							<div className="product-item-wrap d-flex">
								<div className="product-item-price">
									<span className="newprice text-dark">$74</span>
								</div>
								<a href="auction.html" className="btn btn-primary  btn-sm ml-auto">Ver detalle</a>
							</div>
						</div>
					</div>
				</div>
					);

              })}

				</Carousel>
				
			</div>
	</div>
);
}


export default ArticulosCarousel;
