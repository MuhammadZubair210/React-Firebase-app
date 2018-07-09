import React, { Component } from 'react';
import Navbar from "./../navbar/index";
import './index.css';



class admin extends Component {
constructor (props){
	super(props)
}
render(){
	return(
		<div className="main=manoor">
		<div class="fg">
		<h2 class="nb">Admin Login</h2>

		<div class="form-group">
		<input id="email" type="text" class="form-control" placeholder="email"/>
		</div>
		<div class="form-group">
		<input type="password" class="form-control" id="pwd" placeholder="password"/>
		</div>
		<div>

		<button class="btn form-btn btn-success m" type="submit">Login</button>
				</div>
						if{
			alert("you arte admin")
		}
		else{
			alert("you are not admin")
		}
		

		</div>
		</div>
		
)
}
}
export default admin;

