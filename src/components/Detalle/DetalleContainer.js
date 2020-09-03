import React from 'react';
import DetalleItem from './DetalleItem';
import DetalleCard from './DetalleCard';
import PageLoading from '../PageLoading';
import PageError from '../PageError';

class DetalleContainer extends React.Component{

	state = { 
		loading: true,
      	error:null,
      	data: undefined,
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
			  console.log(sub);
			  const { fromNotifications } = this.props.location.state;
			  const response = await fetch(`http://devapp85.ecom.com.ar/SubastasTest/rest/GetOneArticle?Subastaid=${sub}&Articulosubastaarticuloid=${art}`);
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

	handleOpenModal = e => {
		this.setState({ modalIsOpen : true});
	  };
  
	  handleCloseModal = e => {
		this.setState({ modalIsOpen : false});
	  };

	  handlePushOferta = async e => {
		console.log("pusheando oferta");
		this.setState({ loading:true, error:false});
  
		try {
		  //await api.cursos.remove(this.props.match.params.handle);
		  this.setState({loading:false});
		  this.setState({ modalIsOpen : false});
		  //aca hay que cerrar el modal
  
		} catch (error) {
		  this.setState({ loading:false, error:error });
		  
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
							modalIsOpen={this.state.modalIsOpen}
							onOpenModal={this.handleOpenModal}
							onCloseModal={this.handleCloseModal}
							onPushOferta={this.handlePushOferta}
							>

							</DetalleCard>
							<DetalleItem item={this.state.data}>

							</DetalleItem>

						</div>
					</div>
				</div>
				</section>
			</React.Fragment>
        );
      }
    
}
    
export default DetalleContainer;