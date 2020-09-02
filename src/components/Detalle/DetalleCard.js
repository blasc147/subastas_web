import React, { Fragment } from 'react';
import Modal from './Modal';

class DetalleCard extends React.Component{
	render() {
        const item=this.props.item;
        
        return (
            <React.Fragment>
                <div className="card">
							<div className="single-productslide">
								<div className="row no-gutter">
									<div className="col-lg-6 border-right">
										<div className=" pb-0 image-zoom-container">
										    <div className="arrow-ribbon-2 bg-primary"><span className="day">90 Days 20 : 35 : 51</span></div>
											<div className="show image-zoom" href="../assets/images/products/ecommerce/9.png" >
												<img src={item.image} id="show-img" />
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
											<h3 className="mb-3 font-weight-semibold">{item.title}</h3>
											<div className="mb-3">
												<span className="font-weight-bold h1 text-danger">${item.price} </span>
											</div>
											<div><a href=""><i className="fa fa-tag text-success"></i> <span className="text-dark font-weight-bold">Inicio de subasta</span> 10/10/2020 a las 10:00</a></div>
											<div><a href=""><i className="fa fa-tag text-success"></i> <span className="text-dark font-weight-bold">Fin de subasta</span> 10/10/2020 a las 10:00</a></div>
											<h6 className="font-weight-bold mt-4">Detalles</h6>
											<p className="text-dark">{item.description} </p>
				
											
											<a className="btn  btn-info" onClick={this.props.onOpenModal}> Ofertar ${item.price +100} </a>
											<Modal 
											isOpen={this.props.modalIsOpen} 
											onClose={this.props.onCloseModal}
											onPushOferta={this.props.onPushOferta}>
												Juro por dios que estoy seguro de realizar esta oferta
												
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
