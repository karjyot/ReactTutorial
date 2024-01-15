import React, {Component, PropTypes} from 'react';
import Sidebar from './sidebar.js'
import Header from './header.js';
import Footer from './footer.js';
import { Routes, Route, Outlet, Link } from "react-router-dom";
export default class Layout extends Component {
        
	  render() {
	  	 return (
            <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar></Sidebar>
                <div className="layout-page">
                    <Header></Header>
                    <Outlet></Outlet>  {/* all routes triggers here */}
                 </div>   

            </div>
            </div>
        
    );
	  }	
}	