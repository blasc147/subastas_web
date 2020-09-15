import React from 'react';
import PageLoading from '../PageLoading';
import {Redirect} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component{
    constructor(props) {
        super(props);
        const token= localStorage.getItem("token");
		let logged = true;
  
		if(token==null){
		  logged= false;
		}
        this.state= {
            user: '',
            password: '',
            logged,
          
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    


    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){

        e.preventDefault();
        
        try {
			const {user, password}=this.state;
			
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'text/plain' },
				body: "client_id=8aa0394f60cc46838f2b434be95c2c57&granttype=password&scope=FullControl&username="+user+"&password="+password,
			};
			fetch('http://devapp85.ecom.com.ar/SubastasTest/oauth/access_token', requestOptions)
			.then(response => {
                if (response.ok) {
                    return response.json();
                  } else {
                    throw new Error('Error en las credenciales');
                  }
            })
			.then(data => {
                localStorage.setItem("token", data.access_token)
				console.log(data.access_token);
                this.setState({
                    logged:true
				});
				const toasterlogued = () => toast.success("Bienvenido");
				toasterlogued();
            })
            .catch((error) => {
				const toastererror = () => toast.error("Error en las credenciales. Vuelva a intentar");
				toastererror();
				console.log(error)
              });
        } catch (error) {
            console.log("error en la api");
		  
		}
    }

    
    render() {

        if (this.state.logged){
            return <Redirect to="/home"/>;
        }


        return (
            <React.Fragment>
                <div className="bannerimg cover-image bg-background3" data-image-src="../assets/images/banners/banner2.jpg" >
				<div className="header-text mb-0">
					<div className="container">
						<div className="text-center text-white ">
							<h1 className="">Login</h1>
						</div>
					</div>
				</div>
			</div>

            <section className="sptb">
			<div className="container customerpage">
				<div className="row">
					<div className="col-lg-4 d-block mx-auto">
						<div className="row">
							<div className="col-xl-12 col-md-12 col-md-12">
								<div className="card mb-0">
									<div className="card-header">
										<h3 className="card-title">Ingresar a tu cuenta</h3>
									</div>
                                    <form onSubmit={this.submitForm}>
									<div className="card-body">
										<div className="form-group">
											<label className="form-label text-dark">Usuario</label>
											<input type="text" className="form-control" placeholder="Nombre de usuario" name="user"  value={this.state.user} onChange={this.onChange} />
										</div>
										<div className="form-group">
											<label className="form-label text-dark">Password</label>
											<input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Contrasena" value={this.state.password} onChange={this.onChange}/>
										</div>
                                       
										<div className="form-group">
											<label className="custom-control custom-checkbox">
												<a href="forgot-password.html" className="float-right small text-dark mt-1">I forgot password</a>
												<input type="checkbox" className="custom-control-input" />
												<span className="custom-control-label text-dark">Remember me</span>
											</label>
										</div>
										<div className="form-footer mt-2">
											<input type="submit" className="btn btn-primary btn-block" />
										</div>
										<div className="text-center  mt-3 text-dark">
											Don't have account yet? <a href="register.html">SignUp</a>
										</div>
                                         
									</div>
                                    </form>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
           
		<ToastContainer />

		</React.Fragment>
        );
      }
    
}

export default Login;