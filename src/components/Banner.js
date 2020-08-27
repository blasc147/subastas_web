import React from 'react';
import './style/banner.css';


function Banner() {
  return (
    <div className="banner-1 cover-image sptb-2 bg-background" data-image-src="../images/auction.jpg" id="banner_home">
				<div className="header-text1 mb-0">
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-12 col-md-12 d-block mx-auto">
								<div className="text-center text-white ">
									<h1 className=""><span className="font-weight-bold">5</span> articulos en subasta actualmente</h1>
								</div>
								<div className="search-background mb-0">
									<div className="form row no-gutters">
										<div className="form-group  col-xl-10 col-lg-9 col-md-12 mb-0">
											<input type="text" className="form-control input-lg border-right-0" id="text" placeholder="Search Products" />
										</div>
										<div className="col-xl-2 col-lg-3 col-md-12 mb-0">
											<a href="#" className="btn btn-lg btn-block btn-secondary">Search</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
  );
}

export default Banner;