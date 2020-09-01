import React, { Fragment } from 'react';

class Preguntas extends React.Component{
	render() {
		const item=this.props;
        return (
            <React.Fragment>
						<h3 className="mb-5 mt-4">Related Posts</h3>

						
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">Rating And Reviews</h3>
							</div>
							<div className="card-body p-0">
								<div className="media mt-0 p-5">
                                    <div className="d-flex mr-3">
                                        
                                    </div>
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-1 font-weight-semibold">Joanne Scott
											<span className="fs-14 ml-0" data-toggle="tooltip" data-placement="top" title="verified"><i className="fa fa-check-circle-o text-success"></i></span>
											<span className="fs-14 ml-2"> 4.5 <i className="fa fa-star text-yellow"></i></span>
										</h5>
										<small className="text-muted"><i className="fa fa-calendar"></i> Dec 21st  <i className=" ml-3 fa fa-clock-o"></i> 13.00  <i className=" ml-3 fa fa-map-marker"></i> Brezil</small>
                                        <p className="font-13  mb-2 mt-2">
                                           Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et  nostrud exercitation ullamco laboris   commodo consequat.
                                        </p>
										<a href="#" className="mr-2"><span className="badge badge-primary">Helpful</span></a>
										<a href="" className="mr-2" data-toggle="modal" data-target="#Comment"><span className="">Comment</span></a>
										<a href="" className="mr-2" data-toggle="modal" data-target="#report"><span className="">Report</span></a>
                                        <div className="media mt-5">
                                            <div className="d-flex mr-3">
                                                
                                            </div>
											<div className="media-body">
												<h5 className="mt-0 mb-1 font-weight-semibold">Rose Slater <span className="fs-14 ml-0" data-toggle="tooltip" data-placement="top" title="verified"><i className="fa fa-check-circle-o text-success"></i></span></h5>
												<small className="text-muted"><i className="fa fa-calendar"></i> Dec 22st  <i className=" ml-3 fa fa-clock-o"></i> 6.00  <i className=" ml-3 fa fa-map-marker"></i> Brezil</small>
												<p className="font-13  mb-2 mt-2">
												   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris   commodo Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur consequat.
												</p>
												<a href="" data-toggle="modal" data-target="#Comment"><span className="badge badge-default">Comment</span></a>
											</div>
										</div>
									</div>
								</div>
								<div className="media p-5 border-top mt-0">
									<div className="d-flex mr-3">
										
									</div>
									<div className="media-body">
										<h5 className="mt-0 mb-1 font-weight-semibold">Edward
										<span className="fs-14 ml-0" data-toggle="tooltip" data-placement="top" title="verified"><i className="fa fa-check-circle-o text-success"></i></span>
										<span className="fs-14 ml-2"> 4 <i className="fa fa-star text-yellow"></i></span>
										</h5>
										<small className="text-muted"><i className="fa fa-calendar"></i> Dec 21st  <i className=" ml-3 fa fa-clock-o"></i> 16.35  <i className=" ml-3 fa fa-map-marker"></i> UK</small>
                                        <p className="font-13  mb-2 mt-2">
                                           Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et  nostrud exercitation ullamco laboris   commodo consequat.
                                        </p>
										<a href="#" className="mr-2"><span className="badge badge-primary">Helpful</span></a>
										<a href="" className="mr-2" data-toggle="modal" data-target="#Comment"><span className="">Comment</span></a>
										<a href="" className="mr-2" data-toggle="modal" data-target="#report"><span className="">Report</span></a>
									</div>
								</div>
							</div>
						</div>
						<div className="card mb-0">
							<div className="card-header">
								<h3 className="card-title">Realizar Pregunta</h3>
							</div>
							<div className="card-body">
								<div>
									<div className="form-group">
										<input type="text" className="form-control" id="name1" placeholder="Your Name" />
									</div>
									<div className="form-group">
										<input type="email" className="form-control" id="email" placeholder="Email Address" />
									</div>
									<div className="form-group">
										<textarea className="form-control" name="example-textarea-input" rows="6" placeholder="Comment"></textarea>
									</div>
									<a href="#" className="btn btn-primary">Send Reply</a>
								</div>
							</div>
						</div>
					
		</React.Fragment>
        );
      }
    
}
    
export default Preguntas;