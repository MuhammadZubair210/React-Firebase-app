import React, { Component } from 'react';
import Navbar from "./../navbar/index";
import './index.css';



class student extends Component {
constructor (props){
	super(props)
}
render(){
	return(
		<div className="main=manoor">
		<div class="fg">
		<h2 class="nb">Student Login</h2>

		<div class="form-group">
		<input id="email" type="text" class="form-control" placeholder="email"/>
		</div>
		<div class="form-group">
		<input type="password" class="form-control" id="password" placeholder="password"/>
		</div>
		<div>
		<button class="btn form-btn btn-success m" type="submit">Login</button> 
	    <button class="btn form-btn btn-success m" type="submit">Register</button>  
 
				</div>

		</div>
		</div>
		
)
}
}
export default student;
