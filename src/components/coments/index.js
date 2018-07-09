import React, { Component } from 'react';
import Navbar from "./../navbar/index";
import './index.css';



class coments extends Component {
constructor (props){
	super(props)
}
render(){
	return(
		<div class="dot">
		<p class="pp">This is my first Angular 4 Project, so may be i could mistake. If anyone find any kind of mistake kindly let me know to make it proper and suggesion will be praised.</p>
		<button type="button" class="btn btn-default btn-block">Comment on project</button>
		</div>

		
)
}
}
export default coments;
