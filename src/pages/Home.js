import React, { Fragment } from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Banner from '../components/Banner';
import Carousel from '../components/ArticulosCarousel';
import Categorias from '../components/Categorias';
import ListaArticulo from '../components/Listas/ListaArticulo';
import {Redirect} from 'react-router-dom';

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null, 
      data: null,
      categorias:null,
      buscadorValue: "",
      filtrados:null,
      redirect:false,
      login:null
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
    

    componentDidMount(){
      this.getUsuario();
      //this.getArticulos();
    }

    getUsuario = async() => {
      this.setState({ loading:true, error:null});
      try{
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: "client_id=8aa0394f60cc46838f2b434be95c2c57&granttype=password&scope=FullControl&username=public&password=public123",
        };
        const response = await fetch('https://devapp85.ecom.com.ar/SubastasTest/oauth/access_token', requestOptions);
        const data = await response.json();
        sessionStorage.setItem("publico", data.access_token);
        this.setState({login:sessionStorage.getItem("publico")})
          console.log("storage:  "+this.state.login);
        }catch(error){
          console.log("error en el : "+error);
          this.setState({ loading:false, error:error });
        }

        this.getArticulos();
    };

    getArticulos = async() => {
      this.setState({ loading:true, error:null});
      
        try{
            const requestOptions = {
              method: 'GET',
              headers: { 'Authorization': 'OAuth '+this.state.login},
              
          };
          console.log(this.state.login);
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
          console.log("error en la pagina : "+error);
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
      if (this.state.buscadorValue!==""){
        this.setState({redirect:true});
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

      if(this.state.data===null){
        return (
          <h2>No hay articulos cargados</h2>
        );
      }
      if(this.state.redirect){
        return (
          <Redirect
            to={{
            pathname: "/search",
            state: { articulos: this.state.data,
                      palabra: this.state.buscadorValue }
          }}
        />
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
            
            
            <Fragment>
              <Carousel articulos={this.state.data} clase="sptb" titulo="En subasta" estado='Subasta activa' subtitulos='Estos artículos se encuentran actualmente en subasta activa'/>

              <Categorias data={this.state.categorias}></Categorias>

              <Carousel articulos={this.state.data} clase="sptb" titulo="Proximos a subastar" estado='Proximamente' subtitulos='Artículos proximos a ser subastados'/>

              <ListaArticulo articulos={this.state.data} titulo="Artículos subastados actualmente">

              </ListaArticulo>
            </Fragment>
            
            </React.Fragment>
        );
      }
    
}

export default Home;