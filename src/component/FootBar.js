import React, { Component } from 'react'

export default class FootBar extends Component {
  render() {
    let trigger =()=>{
        let a = document.getElementById("alert");
       let email = document.getElementById('exampleInputEmail1')
       
        if(email.value==='')
        return(0)
        a.classList.add('show')
        setTimeout(()=>{
            a.classList.remove('show')
        },2000)
    }
    return (
      <>
           
            
                 <div className="newsletter text-white foot" style={{height:"40vh",width:"100vw",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>   
                         
                    <div className="">
                          <h2>Subscribe to Our Newsletter</h2>
                              <label htmlFor="exampleInputEmail1" className="form-label "></label>
                             <input type="email" className="bg-black mx-3 text-white" id="exampleInputEmail1" placeholder='Enter your email here*' style={{border:"none",borderBottom:"1px solid"}}         aria-describedby="emailHelp" pattern="[A-Za-z0-9]" />
                              <button type="button" className="btn btn-outline-secondary" onClick={trigger}>Subscribe</button>
                    </div>
                 <div className="alert alert-success alert-dismissible fade " id='alert' role="alert">
                <strong>Success!</strong> You have subscribed to our newsletter.
                 </div>
                  <div><h5>Support</h5>
                  <ul className='list-group' style={{listStyle:'none'}}>
                    <li className='nav-item'>contact us</li>
                    <li>Privacy Policy</li>
                    <li>contact us</li>
                    <li>contact us</li>
                  </ul>
                  </div>
                  <div><h5>Support</h5>
                  <ul className='list-group' style={{listStyle:'none'}}>
                    <li className='nav-item'>contact us</li>
                    <li>Privacy Policy</li>
                    <li>contact us</li>
                    <li>contact us</li>
                  </ul>
                  </div>
                 </div>     
                 <div className='bg-black text-white' style={{backgroundColor:"black",display:"flex",justifyContent : 'space-between',alignItems:"center",flexWrap:"wrap", width : '100%'}}>
                  
                 <div>The Daily Report ©</div>                          
                  </div>      
          
      </>
    )
  }
}
