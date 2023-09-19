import React, { Component } from 'react'
import NewsItemDisplay from './NewsItemDisplay'

export class Sports extends Component {

 
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    let b = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=aa449ccac9ea482787e132d90f0d6a01&page=${this.state.page}`
    let a = await fetch(b);
    let data = await a.json();
    let  d = new Date();
    
    this.setState({articles: data.articles,
                      topTitle: data.articles[1].title,                        
                      topImage: data.articles[1].urlToImage,
                      results : data.totalResults,
                      totalPages : 0,
                      day : d.getDay(),
                      year: d.getFullYear(),
                      month: d.getMonth(),
                      date : d.getDate()
    })

  }
  dayName = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
  render() {
    let nextButton = async ()=>{
      console.log("This is next button " + Math.ceil(this.state.results/20))
      console.log(this.state.page)
      if(this.state.page>=this.state.results/20){
        console.log(this.state.page)
        console.log(this.state.totalPage)
      }
      else{
        if(this.state.page+1===Math.ceil(this.state.results/20)){
        let nextSport = document.getElementById("nxtBtnSports")
        nextSport.classList.add('disabled')
        
        }
        let prevport = document.getElementById("prevBtnSports")
        prevport.classList.remove('disabled')
      console.log("before setState" + this.state.page)
      let b = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=aa449ccac9ea482787e132d90f0d6a01&page=${this.state.page+1}`;
      let a = await fetch(b);
      let data = await a.json();
      let  d = new Date();
      
      this.setState({articles: data.articles,
                      topTitle: data.articles[1].title,                        
                      topImage: data.articles[1].urlToImage,
                      page : this.state.page+1,
                      day : d.getDay(),
                      year: d.getFullYear(),
                      month: d.getMonth(),
                      date : d.getDate()
      })
      console.log("after setState" + this.state.page)
      console.log(this.state.page+1)
      
    }
  }
  let prevButton = async ()=>{
    if(this.state.page-1===1){
      let prevport = document.getElementById("prevBtnSports")
      prevport.classList.add('disabled')
    }
    let nextSport = document.getElementById("nxtBtnSports")
    nextSport.classList.remove('disabled')
    console.log("prev clicked")
    let b = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=aa449ccac9ea482787e132d90f0d6a01&page=${this.state.page-1}`;
    let a = await fetch(b);
    let data = await a.json();
    let  d = new Date();
    
    this.setState({articles: data.articles,
                    topTitle: data.articles[1].title,                        
                    topImage: data.articles[1].urlToImage,
                    page : this.state.page-1,
                    day : d.getDay(),
                    year: d.getFullYear(),
                    month: d.getMonth(),
                    date : d.getDate()
    })
    
    console.log(this.state.page+1)
  }
    return (
      <>
      <h1 className="my-5" style={{marginLeft:"15vw"}}>Sports</h1>
      <h5 className="my-5" style={{marginLeft:"15vw"}}>{this.monthNames[this.state.month]} , {this.state.date} {this.state.year}</h5>
      <div className="topHeadlines my-5" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
      <div className="card text-bg-dark" id='topContainer'>
  <img src={this.state.topImage} className="card-img" style={{width:"60vw"}} alt="..." id='topImage'/>
  <div className="card-img-overlay">
    <h5 className="card-title">{this.state.topTitle}</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>{this.state.topSource}</small></p>
  </div>
</div>
      </div>
      <div className="conatiner " style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
    {this.state.articles.map((ele)=>{
      return <div className="newsContainer my-5" key={ele.url} >
      <NewsItemDisplay title={ele.title} desc={ele.description} imgurl={ele.urlToImage? ele.urlToImage:"https://thumbs.dreamstime.com/z/online-newspaper-19803131.jpg"} newsUrl={ele.url}/>
       </div>
    })}
    
    </div>
    <div aria-label=" d-flex justify-content-center" aria-disabled={this.state.page<=1} style={{display:"flex",justifyContent:"center", alignItems:"center"}}>
  <ul className="pagination">
    <li className="page-item "><a id='prevBtnSports' className="page-link disabled" href="#" onClick={prevButton}>Previous</a></li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a  className="page-link" href="#">2</a></li>
   
    <li className="page-item"><a id='nxtBtnSports' className="page-link " href="#"  onClick={nextButton}>Next</a></li>
  </ul>
</div>
      </>
    )
  }
}

export default Sports
