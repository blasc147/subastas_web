import React, { Fragment } from 'react';
import Ofertas from './Ofertas';

class DetalleItem extends React.Component{
	render() {
		const item=this.props;
        return (
            <React.Fragment>
                <div className="card">
							<div className="card-header">
								<h3 className="card-title">Detalles</h3>
							</div>
							<div className="card-body">
								<div className="mb-4">
									<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atcorrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
									<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoraliz the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble thena bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
								</div>
								<h4 className="mb-2 font-weight-bold">Especificaciones</h4>
								<div className="row">
									<div className="col-xl-12 col-md-12">
										<div className="table-responsive">
											<table className="table row table-borderless w-100 m-0 text-nowrap ">
												<tbody className="col-lg-12 col-xl-6 p-0">
													<tr>
														<td><span className="font-weight-bold">Type :</span> Normal</td>
													</tr>
													<tr>
														<td><span className="font-weight-bold">Sleeve :</span> Half Sleeve</td>
													</tr>
													<tr>
														<td><span className="font-weight-bold">Fabric :</span> Cotton</td>
													</tr>
													<tr>
														<td><span className="font-weight-bold">Ideal For :</span> Woman</td>
													</tr>
												</tbody>
												<tbody className="col-lg-12 col-xl-6 p-0">
													<tr>
														<td><span className="font-weight-bold">Size :</span> M</td>
													</tr>
													<tr>
														<td><span className="font-weight-bold">Color :</span> Moss Green</td>
													</tr>
													<tr>
														<td><span className="font-weight-bold">Pack of :</span> 1 </td>
													</tr>
													<tr>
														<td><span className="font-weight-bold">Fabric Care :</span> Machine Wash</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<h4 className="mb-5 mt-2 font-weight-bold">Ultimas ofertas</h4>
								
                                <Ofertas>
                                    
                                </Ofertas>

							</div>
							<div className="p-4 border-top">
								<div className="list-id">
									<div className="row">
										<div className="col">
											<a className="mb-0">auction ID : #8256358</a>
										</div>
										<div className="col col-auto">
											Posted By <a className="mb-0 font-weight-bold">Individual</a> / 21st Dec 2018
										</div>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="icons">
									<a href="#" className="btn btn-info icons"><i className="si si-share mr-1"></i> Share Ad</a>
									<a href="#" className="btn btn-primary icons"><i className="si si-heart  mr-1"></i> 678</a>
									<a href="#" className="btn btn-secondary icons"><i className="si si-printer  mr-1"></i> Print</a>
								</div>
							</div>
						</div>
            </React.Fragment>

);
}

}

export default DetalleItem

