import React from 'react';
import Filtros from './Filtros';
import './listas.css';
import ListaItem from './ListaItem';
import Loader from '../MiniLoader'
import InfiniteScroll from 'react-infinite-scroll-component';


class ListaArticulo extends React.Component {

	
	
	state = {
		cant: 6,
		items: this.props.articulos.slice(0, 6),
		hasMore: true,
		
	  };
	
	  fetchMoreData = () => {
		// a fake async api call like which sends
		// 20 more records in 1.5 secs

		if (this.state.items.length >= this.props.articulos.length) {
			this.setState({ hasMore: false });
			return;
		  }
		setTimeout(() => {
		  this.setState({
			items: this.state.items.concat(this.props.articulos.slice(this.state.cant, this.state.cant+6)),
			cant: this.state.cant+6,
		  });
		}, 1500);
	  };
	  
render(){
	
  return (
    <section className="sptb">
		
			<div className="container">
				<div className="row">
					
					<div className="col-xl-12 col-lg-12 col-md-12">
						<div className="card mb-0">
							
							<div className="card-body">
  							<div className="section-title center-block text-center"><h1>{this.props.nombre} {this.props.titulo}</h1></div>
								<div className="item2-gl ">
								<InfiniteScroll
									dataLength={this.state.items.length}
									next={this.fetchMoreData}
									hasMore={this.state.hasMore}
									loader={<Loader />}
									endMessage={
										<p style={{ textAlign: "center" }}>
										<b>No hay mas articulos en subasta</b>
										</p>
									}
									>
								
									<div className="tab-content">
										
										<div className="tab-pane active" id="tab-12">
											<div className="row">
											
												{this.state.items.map((item, index) => (
													<ListaItem 
													key={index}
													precio={item.ArticuloSubastaPrecioActual}
													imagen={item.ArticuloImagen}
													fin={item.ArticuloSubastaFin}
													categoria={item.ArticuloCategoria}
													descripcion={item.ArticuloDescripcion}
													titulo={item.ArticuloTitulo}
													subastaid={item.SubastaId}
													articuloid={item.ArticuloId}
													>

													</ListaItem>
												))}
												
												
												
											</div>
										</div>
									</div>
									</InfiniteScroll>
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