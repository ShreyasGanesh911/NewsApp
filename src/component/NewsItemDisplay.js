import React, { Component } from 'react'

export class NewsItemDisplay extends Component {
  render() {
    let {title,desc,imgurl,newsUrl}=this.props;
    let floatDiv = (a)=>{
      console.log("Entered div")
    }
    return (
      <>
      
      <div className="card mx-5 border border-light-subtle hover-zoom " id={title} style={{width: "290px", height:"470px",border:"None"}} onMouseOver={floatDiv({title})}>
  <img src={imgurl} style={{width:"288px",height:"177px",overflow:"hidden"}} className="card-img-top hover-zoom" alt=""/>
  <div className="card-body ">
    <h5 className="card-title" style={{height:"120px",width:"256px",overflow:"hidden"}}>{title}</h5>
    <div  style={{width:"256px",height:"120px", overflow:"hidden"}}>{desc}</div>
    <p><a href={newsUrl} className="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2" rel="noreferrer" target='_blank'>Read more</a></p>
    
  </div>
</div>
        
      </>
    )
  }
}

export default NewsItemDisplay
