import React, { Component } from 'react';
import './index.css';
import student from "../../assets/student.jpg"
import company from "../../assets/company.jpg"
import admin from "../../assets/Admin.png"
import img1 from "../../assets/img1.jpg"

class App extends Component {


constructor (props){
	super(props)
}
render(){
	return(
	<div className="main-manoor">
 <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">NTH University</a>
    </div>
    <ul class="nav navbar-nav">
      <li><a href="#">Home</a></li>
      <li onClick={()=>{this.props.history.push("/navbar")}}><a href="#">About Project</a></li>
      <li><a href="#">About Me</a></li>
      <li onClick={()=>{this.props.history.push("/coments")}}><a href="#">Coments</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li onClick={()=>{this.props.history.push("/admin")}}><a href="#">Admin</a></li>
      <li onClick={()=>{this.props.history.push("/student")}}><a href="#">Student</a></li>
      <li onClick={()=>{this.props.history.push("/company")}}><a href="#"> Company</a></li>
    </ul>
  </div>
  <div class="imgma">
     <div>
      <h1>Campus Recruitment System</h1>
      </div>
     <div>
      <p>This system can be used in all placement providing colleges for their campus placements. Also it can be used especially for a recruiting company.</p>
      <hr/>
      <p>A college campus recruitment system that consists of a student login, company login and an admin login. The project is beneficial for college students, various companies visiting the campus for recruitment and even the college placement officer.</p>
      </div>
      <div class="c2"> 
      <button type="button" class="btn btn-success btn-lg" onClick={()=>{this.props.history.push("/navbar")}}>Learn more</button>
       </div>
       </div>
       <div>
        <img src={student} class="img-circle mah" alt="student"/> 
        <img src={company} class="img-circle img" alt="company"/>
        <img src={admin} class="img-circle" alt="Admin"/>
        <h2>Student Services</h2>
        <h2 class="jj">CompaniesServices </h2>
        <h2 class="kk">Admin Services</h2>
        <p class="tt">The software system allows the students to create their profiles and upload all their details including their marks onto the system.</p>
        <p class="mm">The system also consists of a company login where various companies visiting the college can view a list of students in that college and also their respective resumes.</p>
        <p class="ss">The admin has overall rights over the system and can moderate and delete any details not pertaining to college placement rules.</p>
        </div>
        <div>
        <button type="button" class="btn btn-default" onClick={()=>{this.props.history.push("/student")}}>view services >></button>
         <button type="button" class="btn btn-default" c onClick={()=>{this.props.history.push("/company")}}>view services >></button>
          <button type="button" class="btn btn-default" onClick={()=>{this.props.history.push("/admin")}}>view services >></button>
        </div>
         <div class="c1">
         <img src={img1} class="img-rounded" alt="img1"/>
         </div>
         
        
    
</nav> 
	</div>
)
}
}
export default App;























































// var mahnoor={
//  mah:"salam",
//    no:{
//  or:"w salam",
//    and:{
//  iff:"goodnight",
// },
// },
// }