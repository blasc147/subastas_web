import React,{ Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import ListaItem from './ListaItem';

class Buscador extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: this.props.location.state.articulos,
        };
        
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return (
            <Fragment>
            <section class="sptb bg-white border-top">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-7 col-md-12">
                            <div class="sub-newsletter">
                                <h3 class="mb-2"><i class="fa fa-search mr-2"></i> Busqueda : {this.props.location.state.palabra}</h3>
                                <Link to="/home">Volver al inicio</Link>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-5 col-md-12">
                            <div class="input-group sub-input mt-1">
                                <input type="text" class="form-control input-lg " placeholder="Buscar articulo" />
                                <div class="input-group-append ">
                                    <button type="button" class="btn btn-primary btn-lg br-tr-7 br-br-7">
                                        Buscar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
            <section className="sptb">
            
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="card mb-0">
                            
                            <div className="card-body">
                              <div className="section-title center-block text-center"><h2>Resultado de la busqueda</h2></div>
                                <div className="item2-gl ">
                                <div className="tab-content">
                                {this.state.data
                                    ?
                                    <div className="tab-pane active" id="tab-12">
                                        <div className="row">

                                        {this.state.data.map((item, index) => (
                                            <ListaItem 
                                            key={item.ArticuloSubastaId}
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
                                    : <h2>No hay resultados</h2>
            
                                    }
                                    
                    </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
            
            </Fragment>
        )
    }
    
    
}

export default Buscador;