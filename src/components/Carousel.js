import React from 'react';


class Carousel extends React.Component {
render(){
  return (
    <div className="sptb">
			<div className="container">
				<div className="section-title center-block text-center">
					<h1>Featured Products</h1>
					<p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
				</div>
				<div id="feature-carousel" className="owl-carousel owl-carousel-icons auction-content owl-loaded owl-drag">
					<div className="item">
						<div className="card mb-0">
							<div className="arrow-ribbon bg-info">30% off</div>
							<div className="product-item2">
								<div className="product-item2-img text-center">
									<img src="../assets/images/products/8.png" alt="img" className="mx-auto"/>
								</div>
							</div>
							<div className="card-body">
								<div className="product-item2-desc">
									<h4 className="font-weight-semibold text-dark"><a href="auction.html">Ladies Shoes</a></h4>
									<p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>

									<ul className="product-item2-rating">
										<li>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star-o text-warning"></i></a>
										</li>
									</ul>
									<div className="label-rating text-muted">523 reviews</div>
									<div className="label-rating text-muted float-right"><i className="fa fa-comment text-muted mr-1"></i> 3 comments</div>
									<div className="bg-secondary text-white p-2 mt-3 text-center">
										<span className="oneminute"></span>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="product-item-wrap d-flex">
									<div className="product-item-price">
										<span className="newprice text-dark">$99</span>
										<del className="oldprice text-muted">$200</del>
									</div>
									<a href="auction.html" className="btn btn-primary  btn-sm ml-auto">BID</a>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="arrow-ribbon bg-danger">Big Deal</div>
							<div className="product-item2">
								<div className="product-item2-img text-center">
									<img src="../assets/images/products/1.png" alt="img" className="mx-auto"/>
								</div>
							</div>
							<div className="card-body">
								<div className="product-item2-desc">
									<h4 className="font-weight-semibold text-dark"><a href="auction.html">Mens Watch</a></h4>
									<p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
									<ul className="product-item2-rating">
										<li>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star-o text-warning"></i></a>
										</li>
									</ul>
									<div className="label-rating text-muted">793 reviews</div>
									<div className="label-rating text-muted float-right"><i className="fa fa-comment text-muted mr-1"></i> 5 comments</div>
									<div className="bg-secondary text-white p-2 mt-3 text-center">
										<span className="hour"></span>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="product-item-wrap d-flex">
									<div className="product-item-price">
										<span className="newprice text-dark">$83</span>
										<del className="oldprice text-muted">$195</del>
									</div>
									<a href="auction.html" className="btn btn-primary  btn-sm ml-auto">BID</a>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="product-item2">
								<div className="product-item2-img text-center">
									<img src="../assets/images/products/2.png" alt="img" className="mx-auto"/>
								</div>
							</div>
							<div className="card-body">
								<div className="product-item2-desc">
									<h4 className="font-weight-semibold text-dark"><a href="auction.html">Sed3J Ladies Watch</a></h4>
									<p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
									<ul className="product-item2-rating">
										<li>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star-o text-warning"></i></a>
										</li>
									</ul>
									<div className="label-rating text-muted">452 reviews</div>
									<div className="label-rating text-muted float-right"><i className="fa fa-comment text-muted mr-1"></i> 6 comments</div>
									<div className="bg-secondary text-white p-2 mt-3 text-center">
										<span className="oneminute"></span>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="product-item-wrap d-flex">
									<div className="product-item-price">
										<span className="newprice text-dark">$52</span>
										<del className="oldprice text-muted">$96</del>
									</div>
									<a href="auction.html" className="btn btn-primary  btn-sm ml-auto">BID</a>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="arrow-ribbon bg-info">20% off</div>
							<div className="product-item2">
								<div className="product-item2-img text-center text-center">
									<img src="../assets/images/products/3.png" alt="img" className="mx-auto"/>
								</div>
							</div>
							<div className="card-body">
								<div className="product-item2-desc">
									<h4 className="font-weight-semibold text-dark"><a href="auction.html">Sed3J Ladies Watch</a></h4>
									<p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
									<ul className="product-item2-rating">
										<li>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star-o text-warning"></i></a>
										</li>
									</ul>
									<div className="label-rating text-muted">758 reviews</div>
									<div className="label-rating text-muted float-right"><i className="fa fa-comment text-muted mr-1"></i> 3 comments</div>
									<div className="bg-secondary text-white p-2 mt-3 text-center">
										<span className="2minute"></span>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="product-item-wrap d-flex">
									<div className="product-item-price">
										<span className="newprice text-dark">$65</span>
										<del className="oldprice text-muted">$85</del>
									</div>
									<a href="auction.html" className="btn btn-primary  btn-sm ml-auto">BID</a>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="arrow-ribbon bg-danger">Urgent</div>
							<div className="product-item2">
								<div className="product-item2-img text-center">
									<img src="../assets/images/products/4.png" alt="img" className="mx-auto"/>
								</div>
							</div>
							<div className="card-body">
								<div className="product-item2-desc">
									<h4 className="font-weight-semibold text-dark"><a href="auction.html">Digital Watch</a></h4>
									<p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
									<ul className="product-item2-rating">
										<li>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star-o text-warning"></i></a>
										</li>
									</ul>
									<div className="label-rating text-muted">852 reviews</div>
									<div className="label-rating text-muted float-right"><i className="fa fa-comment text-muted mr-1"></i> 8 comments</div>
									<div className="bg-secondary text-white p-2 mt-3 text-center">
										<span className="hour"></span>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="product-item-wrap d-flex">
									<div className="product-item-price">
										<span className="newprice text-dark">$74</span>
										<del className="oldprice text-muted">$523</del>
									</div>
									<a href="auction.html" className="btn btn-primary  btn-sm ml-auto">BID</a>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="product-item2">
								<div className="product-item2-img text-center">
									<img src="../assets/images/products/5.png" alt="img" className="mx-auto" />
								</div>
							</div>
							<div className="card-body">
								<div className="product-item2-desc">
									<h4 className="font-weight-semibold text-dark"><a href="auction.html">Gold Model Watch</a></h4>
									<p className="text-muted">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
									<ul className="product-item2-rating">
										<li>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star text-warning"></i></a>
											<a href="#"><i className="fa fa-star-o text-warning"></i></a>
										</li>
									</ul>
									<div className="label-rating text-muted">245 reviews</div>
									<div className="label-rating text-muted float-right"><i className="fa fa-comment text-muted mr-1"></i> 3 comments</div>
									<div className="bg-secondary text-white p-2 mt-3 text-center">
										<span className="day"></span>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="product-item-wrap d-flex">
									<div className="product-item-price">
										<span className="newprice text-dark">$71</span>
										<del className="oldprice text-muted">$89</del>
									</div>
									<a href="auction.html" className="btn btn-primary  btn-sm ml-auto">BID</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
);
}

}

export default Carousel;
