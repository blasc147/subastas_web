import React from 'react';
import Filtros from './Filtros';
import img from '../images/1.jpg'

class ListaArticulo extends React.Component {
render(){
	const items = this.props.articulos;
  return (
    <section className="sptb">
			<div className="container">
				<div className="row">
					
                    <Filtros />
					<div className="col-xl-9 col-lg-8 col-md-12">
						<div className="card mb-0">
							<div className="card-body">
								<div className="item2-gl ">
								
									<div className="tab-content">
										
										<div className="tab-pane active" id="tab-12">
											<div className="row">
											{items.map(item => {
												return(
													<div className="col-lg-6 col-md-12 col-xl-4">
													<div className="card overflow-hidden">
														<div className="ribbon ribbon-top-left text-primary"><span className="bg-primary">featured</span></div>
														<div className="item-card9-img">
															<div className="item-card9-imgs">
																<a href="ecommerce.html"></a>
																<img src={item.image} alt="img" className="cover-image"/>
															</div>
															<div className="item-card9-icons">
																<a href="#" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></a>
															</div>
															<div className="item-card7-overlaytext">
																<a href="auction.html" className="text-white badge badge-success"><span className="hour"></span></a>
															</div>
														</div>
														<div className="card-body">
															<div className="item-card9">
																<a href="ecommerce.html">Accessories</a>
																<a href="ecommerce.html" className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">{item.title}</h4></a>
																<p>Ut enim ad minima veniamq nostrum exerci ullam orisin suscipit laboriosam</p>
																<div className="item-card9-desc">
																	<a href="#" className="mr-4"><span className=""><i className="fa fa-map-marker text-muted mr-1"></i> UK</span></a>
																	<a href="#" className=""><span className=""><i className="fa fa-calendar-o text-muted mr-1"></i> Nov-25-2018</span></a>
																</div>
															</div>
														</div>
														<div className="card-footer">
															<div className="item-card9-footer d-flex">
																<div className="item-card9-cost">
																	<h4 className="text-dark font-weight-semibold mb-0 mt-0">$149.00</h4>
																</div>
																<div className="ml-auto">
																	<div className="rating-stars block">
																		<input type="number" readonly="readonly" className="rating-value star" name="rating-stars-value"  value="3" />
																		<div className="rating-stars-container">
																			<div className="rating-star sm">
																				<i className="fa fa-star"></i>
																			</div>
																			<div className="rating-star sm">
																				<i className="fa fa-star"></i>
																			</div>
																			<div className="rating-star sm">
																				<i className="fa fa-star"></i>
																			</div>
																			<div className="rating-star sm">
																				<i className="fa fa-star"></i>
																			</div>
																			<div className="rating-star sm">
																				<i className="fa fa-star"></i>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
													);

										})}
												
												
											</div>
										</div>
									</div>
								</div>
								<div className="center-block text-center">
									<ul className="pagination mb-0">
										<li className="page-item page-prev disabled">
											<a className="page-link" href="#" tabindex="-1">Prev</a>
										</li>
										<li className="page-item active"><a className="page-link" href="#">1</a></li>
										<li className="page-item"><a className="page-link" href="#">2</a></li>
										<li className="page-item"><a className="page-link" href="#">3</a></li>
										<li className="page-item page-next">
											<a className="page-link" href="#">Next</a>
										</li>
									</ul>
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
