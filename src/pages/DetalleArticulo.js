import React from 'react';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import Banner from '../components/Banner';
import DetalleContainer from '../components/Detalle/DetalleContainer';

class DetalleArticulo extends React.Component{

      state = { 
        loading: true,
        error:null,
        data: { },
        modalIsOpen: false,
          };

      componentDidMount(){
        this.getdetalle();
      }

      getdetalle = async () => {
        this.setState({ loading:true, error:null});
       
        try{
          const { handle } = this.props.match.params;
          const { fromNotifications } = this.props.location.state;
          const response = await fetch(`https://fakestoreapi.com/products/${handle}`);
          const data = await response.json();
      
            this.setState({
                loading:false,
                data:  data ,    
            })

        }catch(error){
          console.log("error en la pagina");
           this.setState({ loading:false, error:error });
        }

    };

    render() {
      if(this.state.loading === true){
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
            
            <DetalleContainer articulo={this.state.data} />

            </React.Fragment>
        );
      }
    
}

export default DetalleArticulo;