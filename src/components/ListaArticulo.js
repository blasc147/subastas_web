import React from 'react';
import Filtros from './Filtros';
import img from './images/1.jpg'

class ListaArticulo extends React.Component {
render(){
  return (
    <section className="sptb">
			<div className="container">
				<div className="row">
					
                    <Filtros />
					<div className="col-xl-9 col-lg-8 col-md-12">
						<div className="card mb-0">
							<div className="card-body">
								<div className="item2-gl ">
									<div className="item2-gl-nav d-flex">
										<h6 className="mb-0 mt-2">Showing 1 to 10 of 30 entries</h6>
										<ul className="nav item2-gl-menu ml-auto">
											<li className=""><a href="#tab-11" className="" data-toggle="tab"><i className="fa fa-list"></i></a></li>
											<li><a href="#tab-12" data-toggle="tab" className="active show"><i className="fa fa-th"></i></a></li>
										</ul>
										<div className="d-flex">
											<label className="mr-2 mt-1 mb-sm-1">Sort By:</label>
											<select name="item" className="form-control select-sm w-70">
												<option value="1">Latest</option>
												<option value="2">Oldest</option>
												<option value="3">Price:Low-to-High</option>
												<option value="5">Price:Hight-to-Low</option>
											</select>
										</div>
									</div>
									<div className="tab-content">
										<div className="tab-pane " id="tab-11">
											<div className="card overflow-hidden">
												<div className="d-md-flex">
													<div className="item-card9-img">
														<div className="arrow-ribbon bg-primary">New</div>
														<div className="item-card9-imgs">
															<a href="ecommerce.html"></a>
															<img src={img} alt="img" className="cover-image"/>
														</div>
														<div className="item-card9-icons">
															<a href="#" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></a>
														</div>
														<div className="item-card7-overlaytext">
															<a href="auction.html" className="text-white badge badge-warning"><span className="2minute"></span></a>
														</div>
													</div>
													<div className="card border-0 mb-0">
														<div className="card-body ">
															<div className="item-card9">
																<a href="ecommerce.html">Accessories</a>
																<a href="ecommerce.html" className="text-dark"><h4 className="font-weight-semibold mt-1">Model Watch</h4></a>
																<p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
															</div>
														</div>
														<div className="card-footer pt-4 pb-4">
															<div className="item-card9-footer d-flex">
																<div className="item-card9-cost">
																	<h4 className="text-dark font-weight-semibold mb-0 mt-0">$263.99</h4>
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
											</div>
											<div className="card overflow-hidden">
												<div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">featured</span></div>
												<div className="d-md-flex">
													<div className="item-card9-img">
														<div className="item-card9-imgs">
															<a href="ecommerce.html"></a>
															<img src={img} alt="img" className="cover-image"/>
														</div>
														<div className="item-card9-icons">
															<a href="#" className="item-card9-icons1 wishlist active"> <i className="fa fa fa-heart-o"></i></a>
														</div>
														<div className="item-card7-overlaytext">
															<a href="auction.html" className="text-white badge badge-danger"><span className="oneminute"></span></a>
														</div>
													</div>
													<div className="card border-0 mb-0">
														<div className="card-body ">
															<div className="item-card9">
																<a href="ecommerce.html">Accessories</a>
																<a href="ecommerce.html" className="text-dark"><h4 className="font-weight-semibold mt-1">Leather Model Watch </h4></a>
																<p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
															</div>
														</div>
														<div className="card-footer pt-4 pb-4">
															<div className="item-card9-footer d-flex">
																<div className="item-card9-cost">
																	<h4 className="text-dark font-weight-semibold mb-0 mt-0">$745.00</h4>
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
											</div>
											<div className="card overflow-hidden">
												<div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">featured</span></div>
												<div className="d-md-flex">
													<div className="item-card9-img">
														<div className="item-card9-imgs">
															<a href="ecommerce.html"></a>
															<img src={img} alt="img" className="cover-image"/>
														</div>
														<div className="item-card9-icons">
															<a href="#" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></a>
														</div>
														<div className="item-card7-overlaytext">
															<a href="auction.html" className="text-white badge badge-success"><span className="hour"></span></a>
														</div>
													</div>
													<div className="card border-0 mb-0">
														<div className="card-body ">
															<div className="item-card9">
																<a href="ecommerce.html">Accessories</a>
																<a href="ecommerce.html" className="text-dark"><h4 className="font-weight-semibold mt-1">Fancy Style Watch</h4></a>
																<p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
															</div>
														</div>
														<div className="card-footer pt-4 pb-4">
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
											</div>
											<div className="card overflow-hidden">
												<div className="d-md-flex">
													<div className="item-card9-img">
														<div className="item-card2-img ">
															<div className="arrow-ribbon bg-primary">$13</div>
															<img src={img} alt="img" className="cover-image"/>
														</div>
														<div className="item-card2-icons">
															<a href="#" className="item-card9-icons1 wishlist active"> <i className="fa fa fa-heart-o"></i></a>
														</div>
														<div className="item-card7-overlaytext">
															<a href="auction.html" className="text-white badge badge-primary"><span className="day"></span></a>
														</div>
													</div>
													<div className="card border-0 mb-0">
														<div className="card-body ">
															<div className="item-card2">
																<div className="item-card2-desc">
																	<a href="ecommerce.html">Accessories</a>
																	<a href="ecommerce.html" className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">Goozer Model Watch</h4></a>
																	<p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																</div>
															</div>
														</div>
														<div className="card-footer pt-4 pb-4">
															<div className="item-card2-footer d-sm-flex">
																<div className="rating-stars d-inline-flex">
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
																	</div> (145reviews)
																</div>
																<div className="ml-auto">
																	<a href="#" className="location"><i className="fa fa-map-marker text-muted mr-1"></i> Los Angles</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="card overflow-hidden">
												<div className="d-md-flex">
													<div className="item-card9-img">
														<div className="item-card2-img ">
															<div className="arrow-ribbon bg-primary">$42</div>
															<a href="ecommerce.html"></a>
															<img src={img} alt="img" className="cover-image"/>
														</div>
														<div className="item-card2-icons">
															<a href="#" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></a>
														</div>
														<div className="item-card7-overlaytext">
															<a href="auction.html" className="text-white badge badge-warning"><span className="2minute"></span></a>
														</div>
													</div>
													<div className="card mb-0 border-0">
														<div className="card-body ">
															<div className="item-card2">
																<div className="item-card2-desc">
																	<a href="ecommerce.html">Accessories</a>
																	<a href="ecommerce.html" className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">Modern Watch</h4></a>
																	<p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																</div>
															</div>
														</div>
														<div className="card-footer pt-4 pb-4">
															<div className="item-card2-footer d-sm-flex">
																<div className="rating-stars d-inline-flex">
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
																	</div> (145reviews)
																</div>
																<div className="ml-auto">
																	<a href="#" className="location"><i className="fa fa-map-marker text-muted mr-1"></i> Los Angles</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="card overflow-hidden">
												<div className="d-md-flex">
													<div className="item-card9-img">
														<div className="item-card2-img ">
															<div className="arrow-ribbon bg-primary">$50</div>
															<a href="ecommerce.html"></a>
															<img src={img} alt="img" className="cover-image"/>
														</div>
														<div className="item-card2-icons">
															<a href="#" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></a>
														</div>
														<div className="item-card7-overlaytext">
															<a href="auction.html" className="text-white badge badge-danger"><span className="oneminute"></span></a>
														</div>
													</div>
													<div className="card border-0 mb-0">
														<div className="card-body ">
															<div className="item-card2">
																<div className="item-card2-desc">
																	<a href="ecommerce.html">Accessories</a>
																	<a href="ecommerce.html" className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">Stylish Chain Watch</h4></a>
																	<p className="mb-0 leading-tight">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
																</div>
															</div>
														</div>
														<div className="card-footer pt-4 pb-4">
															<div className="item-card2-footer d-sm-flex">
																<div className="item-card2-rating">
																	<div className="rating-stars d-inline-flex">
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
																		</div> (46 reviews)
																	</div>
																</div>
																<div className="ml-auto">
																	<a href="#" className="location"><i className="fa fa-map-marker text-muted mr-1"></i> San Francisco</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="tab-pane active" id="tab-12">
											<div className="row">
												<div className="col-lg-6 col-md-12 col-xl-4">
													<div className="card overflow-hidden">
														<div className="item-card9-img">
															<div className="arrow-ribbon bg-primary">New</div>
															<div className="item-card9-imgs">
																<a href="ecommerce.html"></a>
																<img src={img} alt="img" className="cover-image"/>
															</div>
															<div className="item-card9-icons">
																<a href="ecommerce.html" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></a>
															</div>
															<div className="item-card7-overlaytext">
																<a href="auction.html" className="text-white badge badge-warning"><span className="2minute"></span></a>
															</div>
														</div>
														<div className="card-body">
															<div className="item-card9">
																<a href="ecommerce.html">Accessories</a>
																<a href="#" className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">Black Chain Watch</h4></a>
																<p>Ut enim ad minima veniamq nostrum exerci ullam orisin suscipit laboriosam</p>
																<div className="item-card9-desc">
																	<a href="#" className="mr-4"><span className=""><i className="fa fa-map-marker text-muted mr-1"></i> USA</span></a>
																	<a href="#" className=""><span className=""><i className="fa fa-calendar-o text-muted mr-1"></i> Nov-15-2018</span></a>
																</div>
															</div>
														</div>
														<div className="card-footer">
															<div className="item-card9-footer d-flex">
																<div className="item-card9-cost">
																	<h4 className="text-dark font-weight-semibold mb-0 mt-0">$263.99</h4>
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
												<div className="col-lg-6 col-md-12 col-xl-4">
													<div className="card overflow-hidden">
														<div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">featured</span></div>
														<div className="item-card9-img">
															<div className="item-card9-imgs">
																<a href="ecommerce.html"></a>
																<img src={img} alt="img" className="cover-image"/>
															</div>
															<div className="item-card9-icons">
																<a href="#" className="item-card9-icons1 wishlist active"> <i className="fa fa fa-heart-o"></i></a>
															</div>
															<div className="item-card7-overlaytext">
																<a href="auction.html" className="text-white badge badge-warning"><span className="oneminute"></span></a>
															</div>
														</div>
														<div className="card-body">
															<div className="item-card9">
																<a href="ecommerce.html">Accessories</a>
																<a href="ecommerce.html" className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">Model Chain Watch</h4></a>
																<p>Ut enim ad minima veniamq nostrum exerci ullam orisin suscipit laboriosam</p>
																<div className="item-card9-desc">
																	<a href="#" className="mr-4"><span className=""><i className="fa fa-map-marker text-muted mr-1"></i> UK</span></a>
																	<a href="#" className=""><span className=""><i className="fa fa-calendar-o text-muted mr-1"></i> Dec-05-2018</span></a>
																</div>
															</div>
														</div>
														<div className="card-footer">
															<div className="item-card9-footer d-flex">
																<div className="item-card9-cost">
																	<h4 className="text-dark font-weight-semibold mb-0 mt-0">$745.00</h4>
																</div>
																<div className="ml-auto">
																	<div className="rating-stars block">
																		<input type="number" readonly="readonly" className="rating-value star" name="rating-stars-value"  value="2" />
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
												<div className="col-lg-6 col-md-12 col-xl-4">
													<div className="card overflow-hidden">
														<div className="ribbon ribbon-top-left text-primary"><span className="bg-primary">featured</span></div>
														<div className="item-card9-img">
															<div className="item-card9-imgs">
																<a href="ecommerce.html"></a>
																<img src={img} alt="img" className="cover-image"/>
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
																<a href="ecommerce.html" className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">Digital Time Watch</h4></a>
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
												<div className="col-lg-6 col-md-12 col-xl-4">
													<div className="card overflow-hidden">
														<div className="item-card2-img">
															<div className="arrow-ribbon bg-primary">$185</div>
															<a href="ecommerce.html"></a>
															<img src={img} alt="img" className="cover-image"/>
														</div>
														<div className="item-card2-icons">
															<a href="#" className="item-card9-icons1 wishlist active"> <i className="fa fa fa-heart-o"></i></a>
														</div>
														<div className="item-card7-overlaytext">
															<a href="auction.html" className="text-white badge badge-primary"><span className="day"></span></a>
														</div>
														<div className="card-body">
															<div className="item-card2">
																<div className="item-card2-desc">
																	<a href="ecommerce.html">Accessories</a>
																	<a href="ecommerce.html" className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">Leather Belt Watch</h4></a>
																	<p className="mb-0">Ut enim ad minima veniamq nostrum exerci ullam orisin suscipit laboriosam</p>
																</div>
															</div>
														</div>
														<div className="card-footer">
															<div className="item-card2-footer">
																<a href="#" className="location"><i className="fa fa-map-marker text-muted mr-1"></i> Los Angles</a>
																<div className="rating-stars item-card2-rating d-inline-flex">
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
																	</div>(145 reviews)
																</div>

															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-6 col-md-12 col-xl-4">
													<div className="card overflow-hidden">
														<div className="item-card2-img">
															<div className="arrow-ribbon bg-primary">$158</div>
															<a href="ecommerce.html"></a>
															<img src={img} alt="img" className="cover-image "/>
														</div>
														<div className="item-card2-icons">
															<a href="#" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></a>
														</div>
														<div className="item-card7-overlaytext">
															<a href="auction.html" className="text-white badge badge-warning"><span className="2minute"></span></a>
														</div>
														<div className="card-body">
															<div className="item-card2">
																<div className="item-card2-desc">
																	<a href="ecommerce.html">Accessories</a>
																	<a href="ecommerce.html" className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">Model Watches</h4></a>
																	<p className="mb-0">Ut enim ad minima veniamq nostrum exerci ullam orisin suscipit laboriosam</p>
																</div>
															</div>
														</div>
														<div className="card-footer">
															<div className="item-card2-footer">
																<a href="#" className="location"><i className="fa fa-map-marker text-muted mr-1"></i> Los Angles</a>
																<div className="rating-stars item-card2-rating d-inline-flex">
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
																	</div>(145 reviews)
																</div>

															</div>
														</div>
													</div>
												</div>
												<div className="col-lg-6 col-md-12 col-xl-4">
													<div className="card overflow-hidden">
														<div className="item-card2-img">
															<div className="arrow-ribbon bg-primary">$172</div>
															<a href="ecommerce.html"></a>
															<img src={img} alt="img" className="cover-image" />
														</div>
														<div className="item-card2-icons">
															<a href="#" className="item-card9-icons1 wishlist"> <i className="fa fa fa-heart-o"></i></a>
														</div>
														<div className="item-card7-overlaytext">
															<a href="auction.html" className="text-white badge badge-danger"><span className="oneminute"></span></a>
														</div>
														<div className="card-body">
															<div className="item-card2">
																<div className="item-card2-desc">
																	<a href="ecommerce.html">Accessories</a>
																	<a href="ecommerce.html" className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">Exclusive Watch</h4></a>
																	<p className="mb-0">Ut enim ad minima veniamq nostrum exerci ullam orisin suscipit laboriosam</p>
																</div>
															</div>
														</div>
														<div className="card-footer">
															<div className="item-card2-footer">
																<a href="#" className="location"><i className="fa fa-map-marker text-muted mr-1"></i> San Francisco</a>
																<div className="rating-stars item-card2-rating d-inline-flex">
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
																	</div>(46 reviews)
																</div>

															</div>
														</div>
													</div>
												</div>
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
