import React from 'react';
import Filtros from './Filtros';
import img from '../images/1.jpg';
import './listas.css';
import {Link} from 'react-router-dom';
import Countdown, { zeroPad } from 'react-countdown';

class ListaArticulo extends React.Component {
render(){
	const items = this.props.articulos;
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
    <section className="sptb">
		
			<div className="container">
				<div className="row">
					
					<div className="col-xl-12 col-lg-12 col-md-12">
						<div className="card mb-0">
							
							<div className="card-body">
							<div class="section-title center-block text-center"><h1>Articulos en subasta</h1></div>
								<div className="item2-gl ">
								
									<div className="tab-content">
										
										<div className="tab-pane active" id="tab-12">
											<div className="row">
											{items.map(item => {
												return(
													<div class="col-lg-6 col-md-12 col-xl-4">
													<div class="card card_lista overflow-hidden">
														
														<div class="item-card2-img">
															<div class="arrow-ribbon bg-primary">{item.ArticuloSubastaPrecioActual}</div>
															
															<img src={item.ArticuloImagen} alt="img" class="cover-image" />
														</div>
														<div class="item-card7-overlaytext">
															<a class="text-white badge badge-primary">
															<Countdown date={item.ArticuloSubastaFin} renderer={renderer} />
															</a>
														</div>
														<div class="card-body">
															<div class="item-card2">
																<div class="item-card2-desc">
																	<a href="ecommerce.html">{item.ArticulosCategoria}</a>
																	<a href="ecommerce.html" class="text-dark mt-2"><h4 class="font-weight-semibold mt-1">{item.ArticuloTitulo}</h4></a>
																	<p class="mb-0">{item.ArticuloDescripcion}</p>
																</div>
															</div>
														</div>

														<div class="card-body">
														<Link className="btn btn-white btn-block" to={{
															pathname: `/detalle/${item.SubastaId}/${item.ArticuloId}`,
															state: {
															fromNotifications: true
															}
														}}>Ver Detalle</Link>
														</div>
													</div>
												</div>
													);

										})}
												
												
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
);
}

}

export default ListaArticulo;