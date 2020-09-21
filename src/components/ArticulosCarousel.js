import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import imagen from './images/1.jpg';
import {Link} from 'react-router-dom';
import Countdown, { zeroPad } from 'react-countdown';



function ArticulosCarousel(props){
	const articulos = props.articulos;
	const responsive = {
		superLargeDesktop: {
		  // the naming can be any, depends on you.
		  breakpoint: { max: 4000, min: 3000 },
		  items: 5,
		  slidesToSlide: 2
		},
		desktop: {
		  breakpoint: { max: 3000, min: 1024 },
		  items: 4,
		  slidesToSlide: 4
		},
		tablet: {
		  breakpoint: { max: 1024, min: 464 },
		  items: 3,
		  slidesToSlide: 3
		},
		mobile: {
		  breakpoint: { max: 464, min: 0 },
		  items: 1,
		  slidesToSlide: 1
		}
	  };

	  const Completionist = () => <span>Finalizado !</span>;

	  const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
		  // Render a completed state
		  return <Completionist />;
		} else {
		  // Render a countdown
		return <span>{days} dias {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
		}
	  };
	
  return (
    <div className={props.clase}>
			<div className="container">
				<div className="section-title center-block text-center">
  				<h1>{props.titulo}</h1>
  				<p>{props.subtitulos}</p>
				</div>

				<Carousel 
				responsive={responsive}
				centerMode={false}
				removeArrowOnDeviceType={["tablet", "mobile"]}
				itemClass="p-3" 
				autoPlay={responsive !== "mobile" ? true : false}
				autoPlaySpeed={4000}
				customTransition="all 4s linear"
				keyBoardControl={true}
				infinite={true}
				slidesToSlide={1}
  				swipeable
  				transitionDuration={4000}>

				{articulos.map(item => {
					return(
					<div className="item" key={item.ArticuloId}>
					<div className="card mb-0">
					<div className="arrow-ribbon bg-danger">{item.ArticuloEstado}</div>
						<div className="product-item2">
							<div className="product-item2-img text-center">
								<img src={item.ArticuloImagen} alt="img" className="mx-auto"/>
							</div>
						</div>
						<div className="card-body">
							<div className="product-item2-desc">
								<h4 className="font-weight-semibold text-dark"><a href="auction.html">{item.ArticuloTitulo}</a></h4>
								<p className="text-muted">{item.ArticuloDescripcion}</p>
								
								<div className="bg-secondary text-white p-2 mt-3 text-center">
										<Countdown date={item.ArticuloSubastaFin} renderer={renderer} />
								</div>
							</div>
						</div>
						<div className="card-footer">
							<div className="product-item-wrap d-flex">
								<div className="product-item-price">
									<span className="newprice text-dark">{item.ArticuloSubastaPrecioActual}</span>
								</div>
								<Link className="btn btn-primary btn-sm ml-auto" to={{
									pathname: `/detalle/${item.SubastaId}/${item.ArticuloId}`,
									state: {
									fromNotifications: true
									}
								}}>Ver Detalle</Link>
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
