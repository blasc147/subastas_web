import React from 'react';
import DetalleItem from './DetalleItem';
import DetalleCard from './DetalleCard';

class DetalleContainer extends React.Component{
	render() {
		const item=this.props;
        return (
            <React.Fragment >
				<section className="sptb">
				<div className="container">
					<div className="row">
						<div className="col-xl-12 col-lg-12 col-md-12">

							<DetalleCard item={item} >

							</DetalleCard>
							<DetalleItem item={item}>

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