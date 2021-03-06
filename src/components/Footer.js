import React from 'react';

function Footer() {
  return (
    <section>
			<footer className="bg-dark text-white">
				<div className="footer-main">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-12">
								<h6>About</h6>
								<p className="fs-14 mb-1">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
								<p className="fs-14 mb-0">Ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

							</div>
							<div className="col-lg-2 col-md-12">
								<h6>Categories</h6>
								<ul className="list-unstyled mb-0">
									<li><a href="#">Real Estate</a></li>
									<li><a href="#">Computer</a></li>
									<li><a href="#">Clothing</a></li>
									<li><a href="#">Jobs</a></li>
								</ul>
							</div>
							<div className="col-lg-3 col-md-12">
								<h6>Contact</h6>
								<ul className="list-unstyled mb-0">
									<li><a href="#">Address:7363 Old Livingston Drive Dyersburg, TN 38024</a></li>
									<li><a href="#">Phno: +123 456 8976</a></li>
									<li><a href="#">Mail: yourdomain@gmail.com</a></li>
								</ul>
							</div>
							<div className="col-lg-3 col-md-12">
								<h6 className="mb-2">Subscribe</h6>
								<div className="input-group">
									<input type="text" className="form-control br-tl-7 br-bl-7" placeholder="Email" />
									<div className="input-group-append ">
										<button type="button" className="btn btn-primary br-tr-7 br-br-7">
											Subscribe
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-dark text-white p-0">
					<div className="container">
						<div className="row d-flex">
							<div className="col-lg-8 col-sm-12  mt-2 mb-2 text-left ">
								Copyright © 2019 <a href="#">Pinlist</a>. Designed by <a href="#">Spruko</a> All rights reserved.
							</div>
							<div className="col-lg-4 col-sm-12 ml-auto mb-2 mt-2">
								<ul className="social mb-0">
									<li>
										<a className="social-icon" href=""><i className="fa fa-facebook"></i></a>
									</li>
									<li>
										<a className="social-icon" href=""><i className="fa fa-twitter"></i></a>
									</li>
									<li>
										<a className="social-icon" href=""><i className="fa fa-rss"></i></a>
									</li>
									<li>
										<a className="social-icon" href=""><i className="fa fa-youtube"></i></a>
									</li>
									<li>
										<a className="social-icon" href=""><i className="fa fa-linkedin"></i></a>
									</li>
									<li>
										<a className="social-icon" href=""><i className="fa fa-google-plus"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</section>
  );
}

export default Footer;

