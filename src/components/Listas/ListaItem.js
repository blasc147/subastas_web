import React from 'react';
import {Link} from 'react-router-dom';
import Countdown, { zeroPad } from 'react-countdown';

export default function ListaItem(props){

    const Completionist = () => <span>Finalizado !</span>;
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
		  // Render a completed state
		  return <Completionist />;
		} else {
		  // Render a countdown
		return <span>{days} dias {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
		}
      };
      
    return(
        <div className="col-lg-6 col-md-12 col-xl-4" >
			<div className="card card_lista overflow-hidden" >
														
				<div className="item-card2-img"  >
				<div className="arrow-ribbon bg-primary">{props.precio}</div>
															
                    <img src={props.imagen} alt="img" className="cover-image" />
                </div>
                <div className="item-card7-overlaytext">
                    <a className="text-white badge badge-primary">
                    <Countdown date={props.fin} renderer={renderer} />
                    </a>
                </div>
                <div className="card-body">
                    <div className="item-card2">
                        <div className="item-card2-desc">
                            <a href="ecommerce.html">{props.categoria}</a>
                            <a href="ecommerce.html" className="text-dark mt-2"><h4 className="font-weight-semibold mt-1">{props.titulo}</h4></a>
                            <p className="mb-0">{props.descripcion}</p>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                <Link className="btn btn-white btn-block" to={{
                    pathname: `/detalle/${props.subastaid}/${props.articuloid}`,
                    state: {
                    fromNotifications: true
                    }
                }}>Ver Detalle</Link>
                </div>
            </div>
        </div>
    )

}