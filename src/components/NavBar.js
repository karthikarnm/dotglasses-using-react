import React from "react";
class NavBar extends React.Component {
	render(){
    return(
        <div>
<section id="navbar">
	<nav className="navbar navbar-expand-lg navbar-dark">
		<div className="container-fluid bg-light">
			<div className="row">
			<a href="https://www.dotglasses.org/">
			<img className="col-sm-4 img-responsive rounded mx-auto d-block image " src="logo1.png " id="image" alt=""/>	
			</a></div>
		<div className="col-md-4 bg-dark">
		<button
			className="navbar-toggler bg-dark justify-content-center"
			
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon"></span>
		</button></div>
		<div className="collapse navbar-collapse"
			id="navbarSupportedContent">
			<ul className="navbar-nav m-auto">
	<li className="nav-item ">
				<a className="nav-link"
				href="Home"><p className=" text-dark" id="image">Home</p></a>
			</li>
			<li className="nav-item " data-bs-toggle="tooltip" data-bs-placement="bottom" title="click to get products">
				<a className="nav-link "
				href="Product"><p className="text-dark" id="image">Product</p></a>
			</li>
		<li className="nav-item text-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" title="click for about">
				<a className="nav-link"
				href="About"><p className=" text-dark" id="image">About</p></a>
			</li>
			<li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="click for contact">
				<a className="nav-link "
				href="#contact"><p className=" text-dark" id="image">Contact</p> </a>
			</li>
			</ul>
		</div>
		</div>
	</nav>
	</section>
	
    
        </div>
    )
}
}

export default NavBar