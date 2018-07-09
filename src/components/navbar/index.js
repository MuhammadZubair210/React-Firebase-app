import React, { Component } from 'react';
import './index.css';
import student from "../../assets/student.jpg"
import company from "../../assets/company.jpg"
import admin from "../../assets/Admin.png"
import img1 from "../../assets/img1.jpg"

class Navbar extends Component {


constructor (props){
	super(props)
}
render(){
	return(
	<div className="main-manoor">
<div class="uu">
<h2 class="oo">CAMPUS RECRUITMENT SYSTEM</h2>
<p class="nn">A college campus recruitment system that consists of a student login, company login and an admin login. The project is beneficial for college students, various companies visiting the campus for recruitment and even the college placement officer. The software system allows the students to create their profiles and upload all their details including their marks onto the system. The admin can check each student details and can remove faulty accounts. The system also consists of a company login where various companies visiting the college can view a list of students in that college and also their respective resumes.<br/>
The software system allows students to view a list of companies who have posted for vacancy. The admin has overall rights over the system and can moderate and delete any details not pertaining to college placement rules. The system handles student as well as company data and efficiently displays all this data to respective sides.</p>
<h2 class="mod">MODULES:</h2>
<ul class="li">
<li >Admin login</li>
<li>Student Login</li>
<li>Company Login</li>
<li>Company can view student data</li>
<li>Student can view company data</li>
<li>Admin dashboard has overall functional rights</li>
<li>Appropriate data processing and handling</li>
</ul>
<h2 class="ad">ADVANTAGES:</h2>
<ul class="ul">
<li>There will be no need of putting up notice or emailing every student about the company coming in college. The students can keep updated themselves through this software.</li>
<li>The company can view all students ' detail and system can shortlist students according to their criteria instead of doing manually.</li>
<li>There is admin login that can view and manage both students and company's account and also can put up notifications.</li>
<li>Student can register online instead of going to placement department for registration.</li>
<li>This system saves time and efforts.</li>
</ul>
<h2 class="nop">DISADVANTAGES:</h2>
<ul class="pp">
<li>Student cant edit their application once sent. It would require admin to change the data.</li>
<li>It requires large database.</li>
</ul>
<h2 class="gg">APPLICATIONS:</h2>
<p class="rw">This system can be used in all placement providing colleges for their campus placements. Also it can be used especially for a recruiting company.</p>
</div>
	</div>
)
}
}
export default Navbar;




















































