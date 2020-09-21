import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import '../style/modal.css';


function Modal(props){
    if(!props.isOpen){
        return null;
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container" role="document"></div>
			<div className="modal-dialog" role="document">
				<div className="modal-content ">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">Confirmar oferta</h5>
						<button onClick={props.onClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div className="modal-body">
                        <p>{props.children}</p>
						<div className="form-footer mt-2">
							<button onClick={props.onPushOferta} className="btn btn-primary btn-block">Confirmar</button>
						</div>
					</div>
				</div>
			</div>
            </div>,
        document.getElementById('myModal')
    )
}

export default Modal;