import React from 'react';
import DetalleItem from './DetalleItem';
import DetalleCard from './DetalleCard';
import PageLoading from '../PageLoading';
import PageError from '../PageError';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class DetalleContainer extends React.Component{
	
	state = { 
		loading: true,
      	error:null,
		data: undefined,
		precio: undefined,
		ofertas:undefined,
		modalIsOpen: false,
		  };

		  componentDidMount(){
			this.getdetalle();
		  }
	
		  getdetalle = async () => {
			this.setState({ loading:true, error:null});
		   
			try{
			  const sub  = this.props.match.params.subId;
			  const  art  = this.props.match.params.artId;
			  const store = localStorage.getItem("publico");
					const requestOptions = {
					method: 'GET',
					headers: { 'Authorization': 'OAuth '+store},
					
				};
			  const { fromNotifications } = this.props.location.state;
			  const response = await fetch(`https://devapp85.ecom.com.ar/SubastasTest/rest/GetOneArticle?Subastaid=${sub}&Articulosubastaarticuloid=${art}`, requestOptions);
			  const data = await response.json();
		  
				this.setState({
					loading:false,
					data:  data ,
					precio: data.ArticuloSubastaPrecioActual, 
					ofertas: data.Ofertas,   
				})

				console.log(this.state.ofertas);
			}catch(error){
			  console.log("error en la pagina");
			   this.setState({ loading:false, error:error });
			}
	
		};

	handleOpenModal = e => {
		this.setState({ modalIsOpen : true});
	  };
  
	  handleCloseModal = e => {
		this.setState({ modalIsOpen : false});
	  };

	  handlePushOferta = async e => {
		console.log("pusheando oferta");
		this.setState({ loading:true, error:false});
		const success = () => toast.success("La oferta se realizo con exito!");
		
  
		try {
			var articulo=this.state.data;
			var precioOferta = parseFloat(articulo.ArticuloSubastaPrecioActual)+parseFloat(articulo.ArticuloSubastaIncremento);
			const codigo = sessionStorage.getItem("code");
			const token = sessionStorage.getItem("mitoken");
			if (codigo===null){

			}
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', 
							'Authorization': 'OAuth '+ token},
				body: JSON.stringify({ 
					"OfertaSubastaId": articulo.SubastaId,
					"OfertaArticuloSubastaArticuloId": articulo.ArticuloId,
					"OfertaUsuarioId": codigo,
					"OfertaMonto":  precioOferta,
				})
			};
			fetch('https://devapp85.ecom.com.ar/SubastasTest/rest/Oferta/0', requestOptions)
			.then(response => {
				if (response.ok) {
					return response.json();
				  } else {
					throw new Error("Ocurrio un error, intente mas tarde");
				  }
			})
			.then(data => {
				console.log('Saved');
				this.setState({ precio: data.OfertaMonto});
				this.setState(prevState => {
					return {
						ofertas: [...prevState.ofertas, data],
					}
			 });
				console.log(this.state.ofertas);
				success();
			})
			.catch((error) => {
				this.setState({ loading:false, error:error });
				console.log(error);
				const errortoast = () => toast.error(error);
		  		errortoast();
			  });
		  this.setState({loading:false});
		  this.setState({ modalIsOpen : false});
		  
		  //aca hay que cerrar el modal
  
		} catch (error) {
		  this.setState({ loading:false, error:error });
		  console.log("todo mal");
		}
	  };
	  
	render() {
		const item=this.props;
		

		if(this.state.loading === true && !this.state.data){
			console.log("loading");
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
            <React.Fragment >
				<section className="sptb">
				<div className="container">
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12">

							<DetalleCard item={this.state.data} 
							precio={this.state.precio}
							modalIsOpen={this.state.modalIsOpen}
							onOpenModal={this.handleOpenModal}
							onCloseModal={this.handleCloseModal}
							onPushOferta={this.handlePushOferta}
							>

							</DetalleCard>
							<DetalleItem item={this.state.data} ofertas={this.state.ofertas}>

							</DetalleItem>

						</div>
					</div>
				</div>
				</section>
				<ToastContainer />
			</React.Fragment>
        );
      }
    
}
    
export default DetalleContainer;