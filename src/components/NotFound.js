import React from 'react';

function NotFound() {
  return (
    <div class=" page page-h ">
			<div class="page-content z-index-10">
				<div class="container text-center">
					<div class="display-1  mb-5">400</div>
					<h1 class="h2  mb-3">Page Not Found</h1>
					<p class="h4 font-weight-normal mb-7 leading-normal ">Oops!!!! you tried to access a page which is not available. go back to Home</p>
					<a class="btn btn-primary" href="index.html">
						Back To Home
					</a>
				</div>
			</div>
		</div>
  );
}

export default NotFound;