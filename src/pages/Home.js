import React, { Fragment } from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Banner from '../components/Banner';
import Carousel from '../components/ArticulosCarousel';
import Categorias from '../components/Categorias';
import ListaArticulo from '../components/Listas/ListaArticulo';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null, 
      data: null,
      categorias:null,
      buscador:false,
      buscadorValue: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
    

    componentDidMount(){
      this.getUsuario();
      this.getArticulos();
    }

    getUsuario = async() => {
      this.setState({ loading:true, error:null});
      
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: "client_id=8aa0394f60cc46838f2b434be95c2c57&granttype=password&scope=FullControl&username=public&password=public123",
        };
        fetch('http://devapp85.ecom.com.ar/SubastasTest/oauth/access_token', requestOptions)
        .then(response => {
          if (response.ok) {
              return response.json();
            } else {
              throw new Error('Error en las credenciales');
            }
      })
        .then(data => {
          localStorage.setItem("publico", data.access_token);
                  
              })
              .catch((error) => {
                  console.log(error)
                });
    };

    getArticulos = async() => {
      this.setState({ loading:true, error:null});
      
        try{
          const store = localStorage.getItem("publico");
            const requestOptions = {
              method: 'GET',
              headers: { 'Authorization': 'OAuth '+store},
              
          };
          console.log(store);
            const response = await fetch(`https://devapp85.ecom.com.ar/SubastasTest/rest/GetArticles`, requestOptions);
            const responseCategorias = await fetch(`https://devapp85.ecom.com.ar/SubastasTest/rest/GetCategories`, requestOptions);
            const data = await response.json();
            const dataCat = await responseCategorias.json();
            console.log(data.length);
            this.setState({
              loading:false,
              data: data,
              categorias:dataCat
            })
            console.log(dataCat);
        }catch(error){
          console.log("error en la pagina");
          this.setState({ loading:false, error:error });
        }
    };

    handleChange = e => {
      this.setState({
          buscadorValue: e.target.value,
          
      }

      )
  };

  handleSubmit = async e => {
      e.preventDefault();
      this.setState({loading : true, error : null, buscador:true});

      try {
          console.log(this.state.buscadorValue);
          this.setState({loading:false});
          
      } catch (error) {
          this.setState({loading:false, error:error})
      }
  }

    render() {
      
      if(this.state.loading === true && !this.state.data){
        return (
          <PageLoading></PageLoading>
        );
      }

      if (this.state.error) {
        return (
          <PageError></PageError>
        );
      }

      
        return (
          <React.Fragment>
            <Banner 
            size={this.state.data.length} 
            buscadorValue={this.state.buscadorValue}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            >

            </Banner>

            {this.state.buscador
            ? <Fragment>
              <ListaArticulo articulos={this.state.data} titulo="Resultado de la busqueda">

              </ListaArticulo>
              </Fragment>
            :
            <Fragment>
              <Carousel articulos={this.state.data} clase="sptb" titulo="En subasta" estado='En subasta'/>

              <Categorias data={this.state.categorias}></Categorias>

              <Carousel articulos={this.state.data} clase="sptb" titulo="Proximos a subastar" estado='Proximamente' descripcion/>

              <ListaArticulo articulos={this.state.data} titulo="Artículos subastados actualmente">

              </ListaArticulo>
            </Fragment>
            }
            </React.Fragment>
        );
      }
    
}

export default Home;