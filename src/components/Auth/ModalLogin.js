import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../style/modal.css';


function ModalLogin(props){
    if(!props.modalIsOpen){
        return null;
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container" role="document"></div>
			<div class="modal-dialog" role="document">
				<div class="modal-content ">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Login</h5>
						<button onClick={props.onCloseModal} type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="text-center">
							<div class="btn-group btn-block mt-2 mb-2">
								<a href="https://www.facebook.com/" class="btn btn-facebook active">
									<span class="fa fa-facebook"></span>
								</a>
								<a href="https://www.facebook.com/" class="btn btn-block btn-facebook">Facebook</a>
							</div>
							<div class="btn-group btn-block mt-2 mb-2">
								<a href="https://www.google.com/gmail/" class="btn btn-google active">
									<span class="fa fa-google"></span>
								</a>
								<a href="https://www.google.com/gmail/" class="btn btn-block btn-google">Google</a>
							</div>
							<div class="btn-group btn-block mt-2 mb-2">
								<a href="http://stage.ventanillaunica.chaco.gov.ar/oauth/v2/auth?client_id=67_1iibple6ljy8w0ckcs8s4c888kkk8gwg8ws0owc4ogo0oo4www&scope=client&redirect_uri=https%3A%2F%2Furl%2Fde%2Fcallback%2Fexactamente%2Fcomo%2Festa%2Fregistrada-en-tgd&response_type=code" class="btn btn-tgd active">
									<span class="fa fa-google"></span>
								</a>
								<a href="http://stage.ventanillaunica.chaco.gov.ar/oauth/v2/auth?client_id=67_1iibple6ljy8w0ckcs8s4c888kkk8gwg8ws0owc4ogo0oo4www&scope=client&redirect_uri=https%3A%2F%2Furl%2Fde%2Fcallback%2Fexactamente%2Fcomo%2Festa%2Fregistrada-en-tgd&response_type=code" 
								class="btn btn-block btn-tgd">Tu gobierno Digital</a>
							</div>
						</div>
						
						
					</div>
				</div>
			</div>
		</div>	
        ,
        document.getElementById('modalLogin')
    )
}

export default ModalLogin;