import React from 'react';
import {Link} from 'react-router-dom';
function NotFound() {
  return (
    <div class=" page page-h ">
			<div class="page-content z-index-10">
				<div class="container text-center">
					<div class="display-1  mb-5">400</div>
					<h1 class="h2  mb-3">Page Not Found</h1>
					<p class="h4 font-weight-normal mb-7 leading-normal ">Oops!!!! estas tratando de acceder a una pagina que no existe</p>
					
					<Link class="btn btn-primary" to="/home">Back To Home</Link>
				</div>
			</div>
		</div>
  );
}

export default NotFound;