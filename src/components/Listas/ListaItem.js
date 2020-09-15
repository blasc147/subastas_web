import React from 'react';
import {Link} from 'wouter';
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
        <div class="col-lg-6 col-md-12 col-xl-4">
			<div class="card card_lista overflow-hidden" >
														
				<div class="item-card2-img"  >
				<div class="arrow-ribbon bg-primary">{props.precio}</div>
															
                    <img src={props.imagen} alt="img" class="cover-image" />
                </div>
                <div class="item-card7-overlaytext">
                    <a class="text-white badge badge-primary">
                    <Countdown date={props.fin} renderer={renderer} />
                    </a>
                </div>
                <div class="card-body">
                    <div class="item-card2">
                        <div class="item-card2-desc">
                            <a href="ecommerce.html">{props.categoria}</a>
                            <a href="ecommerce.html" class="text-dark mt-2"><h4 class="font-weight-semibold mt-1">{props.titulo}</h4></a>
                            <p class="mb-0">{props.descripcion}</p>
                        </div>
                    </div>
                </div>

                <div class="card-body">
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