import React, { Fragment } from 'react';

class DetalleCard extends React.Component{
	render() {
        const item=this.props.item.articulo;
        console.log(item);
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
												<span className="font-weight-bold h1 text-danger">{item.price} </span>
											</div>
											<div><a href=""><i className="fa fa-tag text-success"></i> <span className="text-dark font-weight-bold">Special price</span> get 20% extra off</a></div>
											<div><a href=""><i className="fa fa-tag text-success"></i> <span className="text-dark font-weight-bold">Bank offer</span> get 15% off on any Credit Cards</a></div>
											<h6 className="font-weight-bold mt-4">Detalles</h6>
											<p className="text-dark">{item.description} </p>
											<dl className="product-gallery-data1">
												<dt>Type</dt>
												<dd>Normal</dd>
											</dl>
											<dl className="product-gallery-data1">
												<dt>Sleeve</dt>
												<dd>Half Sleeve</dd>
											</dl>
											<dl className="product-gallery-data1">
												<dt>Fabric</dt>
												<dd>Cotton</dd>
											</dl>
											<dl className="product-gallery-data1">
												<dt>Ideal For</dt>
												<dd>Woman</dd>
											</dl>
											<dl className="product-gallery-data1">
												<dt>Size</dt>
												<dd>M</dd>
											</dl>
											<dl className="product-gallery-data1">
												<dt>Color</dt>
												<dd>Moss Green</dd>
											</dl>
											<div className="row">
												<div className="col-12">
													<dl className="product-gallery-quty mt-5 mb-0">
														<dt>Quantity:</dt>
														<dd>
															<div className="form-group mb-0">
																
															</div>
														</dd>
													</dl>
												</div>
												
											</div>
											<a href="#" className="btn  btn-info"> Realizar Oferta </a>
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
