import React, { Fragment } from 'react';

class Ofertas extends React.Component{
	render() {
		const item=this.props;
        return (
            <React.Fragment>
								<div className="table-responsive">
									<table className="table table-bordered border mb-0 align-items-center text-nowrap">
										<thead>
											<tr>
												<th>Fecha</th>
												<th>Usuario</th>
												<th>Precio</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>12/12/2018</td>
												<td>Jana Fancher</td>
												<td>$842</td>
											</tr>
											<tr>
												<td>14/11/2018</td>
												<td>Alline Fowlkes</td>
												<td>$654</td>
											</tr>
											<tr>
												<td>15/06/2018</td>
												<td>Missy Whitted</td>
												<td>$635</td>
											</tr>
											<tr>
												<td>01/05/2018</td>
												<td>Kyoko Monge</td>
												<td>$935</td>
											</tr>

										</tbody>
									</table>
								</div>

							
            </React.Fragment>

);
}

}

export default Ofertas

