import React, { Fragment } from 'react';
import Modal from './Modal';
import Countdown, { zeroPad } from 'react-countdown';


class DetalleCard extends React.Component{
	render() {
		const item=this.props.item;
		let precio = parseFloat(this.props.precio);
		let inc = parseFloat(item.ArticuloSubastaIncremento);
		const fechaHoraFin = item.ArticuloSubastaFin.split("T");
		const fechaHoraInicio = item.ArticuloSubastainicio.split("T");

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
            <React.Fragment>
                <div className="card">
							<div className="single-productslide">
								<div className="row no-gutter">
									<div className="col-lg-6 border-right">
										<div className=" pb-0 image-zoom-container">
										    <div className="arrow-ribbon-2 bg-primary">
												<Countdown date={item.ArticuloSubastaFin} renderer={renderer}/>
											</div>
											<div className="show image-zoom" href="../assets/images/products/ecommerce/9.png" >
												<img src={item.ArticuloImagen} id="show-img" />
											</div>
											<div className="small-img">
												<img src="../assets/plugins/Image-Zoom/images/online_icon_right@2x.png" className="icon-left" alt="" id="prev-img" />
												<div className="small-container">
													<div id="small-img-roll">
														<img src="../assets/images/products/ecommerce/10.png" className="show-small-img" alt="" />
													</div>
												</div>
												<img src="../assets/plugins/Image-Zoom/images/online_icon_right@2x.png" className="icon-right" alt="" id="next-img" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="product-gallery-data mb-0">
											<h3 className="mb-3 font-weight-semibold">{item.ArticuloTitulo}</h3>
											<div className="mb-3">
												<span className="font-weight-bold h1 text-danger">${precio} </span>
											</div>
											<div><a href=""><i className="fa fa-tag text-success"></i> <span className="text-dark font-weight-bold">Inicio de subasta</span> {fechaHoraInicio[0]} a las {fechaHoraInicio[1]}</a></div>
											<div><a href=""><i className="fa fa-tag text-success"></i> <span className="text-dark font-weight-bold">Fin de subasta</span> {fechaHoraFin[0]} a las {fechaHoraFin[1]}</a></div>
											<h6 className="font-weight-bold mt-4">Detalles</h6>
											<p className="text-dark">{item.ArticuloDescripcion} </p>
											<dl className="product-gallery-data1">
												<dt>Estado</dt>
												<dd>{item.ArticuloEstado}</dd>
											</dl>
											<dl className="product-gallery-data1">
												<dt>Año</dt>
												<dd>{item.ArticuloAno}</dd>
											</dl>
											<dl className="product-gallery-data1">
												<dt>Color</dt>
												<dd>{item.ArticuloColor}</dd>
											</dl>
				
											
											<a href="javascript:void(0);" className="btn btn-info" onClick={this.props.onOpenModal}> Ofertar ${precio +inc} </a>
											<Modal 
											isOpen={this.props.modalIsOpen} 
											onClose={this.props.onCloseModal}
											onPushOferta={this.props.onPushOferta}>
												Una vez confirmada la oferta, no podra ser cancelada. Confirmar si esta seguro de realizar la oferta por el monto estipulado.
												
											</Modal>
										</div>
									</div>
								</div>
							</div>
						</div>
            </React.Fragment>

);
}

}

export default DetalleCard
