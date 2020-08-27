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
            const response = await fetch(`https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8`);
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

            <Carousel articulos={this.state.data} clase="sptb" titulo="En subasta" />

            <Categorias></Categorias>

            <Carousel articulos={this.state.data} clase="sptb" titulo="Proximos a subastar" />

            <Carousel articulos={this.state.data} clase="sptb bg-white" titulo="Subastas finalizadas" />

            </React.Fragment>
        );
      }
    
}

export default Home;