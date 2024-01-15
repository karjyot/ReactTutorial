import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import  Settings  from './../../features/settings/settings.component'
 class Header extends Component {
	state = { isActive: false,showModal:false,setShowModal:false };
	constructor(){
		super()

		this.closeModal = this.closeModal.bind(this);
	}
	
	handleToggle = () => {
		this.setState({ isActive: !this.state.isActive });
	  };

	  showSettings = () => {
		this.setState({showModal:true})

	  }
	  closeModal(){
		this.setState({showModal:false})
	  }
	  
	  render() {
		const isActive = this.state.isActive;
		const { userData } = this.props;
		const showModal = this.state.showModal
		
	  	 return (
			<nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
			<div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
			  <a className="nav-item nav-link px-0 me-xl-4" href="test.html">
				<i className="bx bx-menu bx-sm" />
			  </a>
			</div>
			<div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
			  {/* Search */}
			  <div className="navbar-nav align-items-center">
				<div className="nav-item d-flex align-items-center">
				  <i className="bx bx-search fs-4 lh-0" />
				  <input type="text" className="form-control border-0 shadow-none" placeholder="Search..." aria-label="Search..." />
				</div>
			  </div>
			  {/* /Search */}
			  <ul className="navbar-nav flex-row align-items-center ms-auto">
				{/* Place this tag where you want the button to render. */}
			
				{/* User */}
				<li className="nav-item navbar-dropdown dropdown-user dropdown">
				  <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
					<div className="avatar avatar-online" onClick={this.handleToggle}>
					  <img src="img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
					</div>
					
				  </a>
				  <ul  className={isActive ? "dropdown-menu dropdown-menu-end show" : 'dropdown-menu dropdown-menu-end'}>
					<li>
					  <a className="dropdown-item" href="#">
						<div className="d-flex">
						  <div className="flex-shrink-0 me-3">
							<div className="avatar avatar-online">
							  <img src="img/avatars/1.png" alt="" className="w-px-40 h-auto rounded-circle" />
							</div>
						  </div>
						  <div className="flex-grow-1">
							<span className="fw-semibold d-block">{userData.firstname} {userData.lastname}</span>
							<small className="text-muted">Admin</small>
						  </div>
						</div>
					  </a>
					</li>
					<li>
					  <div className="dropdown-divider" />
					</li>
					<li>
					  <a className="dropdown-item" href="#">
						<i className="bx bx-user me-2" />
						<span className="align-middle">My Profile</span>
					  </a>
					</li>
					<li>
					  <a className="dropdown-item" href="#">
						<i className="bx bx-cog me-2" />
						<span className="align-middle" onClick={this.showSettings}>Settings</span>
					  </a>
					</li>
					<li>
					  <a className="dropdown-item" href="#">
						<span className="d-flex align-items-center align-middle">
						  <i className="flex-shrink-0 bx bx-credit-card me-2" />
						  <span className="flex-grow-1 align-middle">Billing</span>
						  <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
						</span>
					  </a>
					</li>
					<li>
					  <div className="dropdown-divider" />
					</li>
					<li>
					  <a className="dropdown-item" href="auth-login-basic.html">
						<i className="bx bx-power-off me-2" />
						<span className="align-middle">Log Out</span>
					  </a>
					</li>
				  </ul>
				</li>
				{/*/ User */}
			  </ul>
			</div>
			<Settings show={showModal} close={this.closeModal}/>
		  </nav>
    );

	
	  }	
}	
function mapStateToProps(state) {
	// console.log(state)
	 const userData = state.authReducer.user;
	 return { userData };
   }
   export default connect(mapStateToProps)(Header);