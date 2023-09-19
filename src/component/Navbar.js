import React, { Component } from 'react'
import {Link} from "react-router-dom";
export class Navbar extends Component {
  render() {
    
   
    return (
      <>
        <nav className={`navbar navbar-expand-lg py-5 bg-white  nav-style sticky-top`} style={{borderBottom:"2px solid black", opacity:"0.9"}} >
  <div className="container-fluid nav-size" style={{width:"70vw",marginLeft:"3vw"}} >
  <Link className="nav-link active" to="/TopHeadlines" style={{fontSize:""}}> <h1>The Daily Report</h1></Link>
  
    
  </div>
  <button className="navbar-toggler" type="button" style={{border:"none"}} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" style={{marginLeft:"45px"}} >
    <ul className="nav nav-underline">
  <li className="nav-item">
  <Link className="nav-link text-black " to="/TopHeadlines"><strong>Top Headlines</strong></Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link text-black " to="/Sports"><strong>Sport</strong></Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link text-black  " to="/Tech"><strong>Business</strong></Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link text-black  " to="/science"><strong>science</strong></Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link text-black  " to="/Entertainment"><strong>Entertainment</strong></Link>
  </li>
 
</ul>
      
    </div>
</nav>

    
  
      </>
    )
  }
}

export default Navbar
