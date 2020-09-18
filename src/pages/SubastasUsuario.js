import React, {useState, useEffect} from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
//import Banner from '../components/Banner';
//import ListaArticulo from '../components/Listas/ListaArticulo';
import useUser from '../hooks/UseUser';
import ListaItem from '../components/Listas/ListaItem';

export default function SubastasUsuario(){
    const [state, setState] = useState({ loading: false, error: false });
    const {jwt, name}= useUser()
    const [articulos, setArticulos] = useState(null);

    const fetchData = async () => {
            
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': 'OAuth '+ jwt},
        };
        console.log(jwt);
        fetch('http://devapp85.ecom.com.ar/SubastasTest/rest/GetSubastasByUser', requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
              } else {
                throw new Error('Error ');
              }
        })
        .then(data => {
            setState({
                loading:false,
              });
              setArticulos(data);
              console.log(data);

        })
        .catch((error) => {
            setState({
                loading:false,
                error:true
              });
            console.log(error)
          });
        
        ;
    };

    useEffect(() => {
        setState({ loading:true, error:null});
        fetchData();
        
        },[]);

        if(state.error){
            return <PageError></PageError>
        }

        return (
          <React.Fragment>
                {state.loading 
                ? <PageLoading></PageLoading> 
                : articulos &&

                <section className="sptb">
		
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="card mb-0">
                                
                                <div className="card-body">
                                  <div className="section-title center-block text-center"><h2>En estas subastas estas participando {name}</h2></div>
                                    <div className="item2-gl ">
                                    <div className="tab-content">
										
										<div className="tab-pane active" id="tab-12">
											<div className="row">
                                            {articulos.map((item, index) => (
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
						</div>
                        </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        
                }
            
            </React.Fragment>
        );
}
