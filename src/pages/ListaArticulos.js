import React from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Banner from '../components/Banner';
import ListaArticulo from '../components/Listas/ListaArticulo';

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
          const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`);
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
            <Banner>

            </Banner>
            <ListaArticulo articulos={this.state.data}>

            </ListaArticulo>

                
            </React.Fragment>
        );
      }
    
}

export default Home;