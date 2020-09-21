import React, { Fragment } from 'react';

class Ofertas extends React.Component{
	render() {
		const ofertas=this.props.ofertas.sort((a,b) => (a.OfertaMonto < b.OfertaMonto) ? 1 : ((b.OfertaMonto < a.OfertaMonto) ? -1 : 0));

        return (
            <React.Fragment>
								<div className="table-responsive">
									<table className="table table-bordered border mb-0 align-items-center text-nowrap">
										<thead>
											<tr>
												<th>Fecha/Hora</th>
												<th>Usuario</th>
												<th>Precio</th>
											</tr>
										</thead>
										<tbody>
										{ofertas.slice([0], [3]).map(item => {
											const fechaHora = item.OfertaFechaHora.split("T");
											return(
											<tr key={item.OfertaId}>
												<td>{fechaHora[0]} {fechaHora[1]}</td>
												<td>{item.OfertaUsuarioNombre}</td>
												<td>{item.OfertaMonto}</td>
											</tr>
											);
										})}

										</tbody>
									</table>
								</div>

							
            </React.Fragment>

);
}

}

export default Ofertas

