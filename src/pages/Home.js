import React from 'react';
import Header from '../components/Header';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
//import api from '../api';
//import loader from '../images/default/preloader-color.gif'
import Banner from '../components/Banner';
import Carousel from '../components/ArticulosCarousel';
import Categorias from '../components/Categorias';

class Home extends React.Component{
    state = {
      loading: true,
      error: null, 
      data: undefined
    };

    componentDidMount(){
      this.getArticulos();

      
    }

    getArticulos = async() => {
      this.setState({ loading:true, error:null});
        try{
            const response = await fetch(`https://devapp85.ecom.com.ar/SubastasTest/rest/GetArticles`);
            const data = await response.json();
            console.log(data);
            this.setState({
              loading:false,
              data: data
            })
        }catch(error){
          console.log("error en la pagina");
          this.setState({ loading:false, error:error });
        }
    };

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

            <Banner></Banner>

            <Carousel articulos={this.state.data} clase="sptb" titulo="En subasta" estado='En subasta'/>

            <Categorias></Categorias>

            <Carousel articulos={this.state.data} clase="sptb" titulo="Proximos a subastar" estado='Proximamente'/>

            <Carousel articulos={this.state.data} clase="sptb bg-white" titulo="Subastas finalizadas" estado='Finalizados' />

            </React.Fragment>
        );
      }
    
}

export default Home;