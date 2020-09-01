import React from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
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
            const response = await fetch(`https://fakestoreapi.com/products`);
            const data = await response.json();
            console.log(data.length);
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
            <Banner size={this.state.data.length}></Banner>

            <Carousel articulos={this.state.data} clase="sptb" titulo="En subasta" estado='En subasta'/>

            <Categorias></Categorias>

            <Carousel articulos={this.state.data} clase="sptb" titulo="Proximos a subastar" estado='Proximamente'/>

            <Carousel articulos={this.state.data} clase="sptb bg-white" titulo="Subastas finalizadas" estado='Finalizados' />

            </React.Fragment>
        );
      }
    
}

export default Home;