import React, { Component } from 'react'
import NewsItemDisplay from './NewsItemDisplay'

import InfiniteScroll from "react-infinite-scroll-component";
export class NewsDisplay extends Component {


  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1,
      results : 0
      

    }
  }
  
 
  async componentDidMount(){
    
     let b = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=aa449ccac9ea482787e132d90f0d6a01&page=${this.state.page}&pageSize=20`;
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
      
   //console.log(this.state.results)
   //console.log("Number of pages " + Math.ceil(this.state.totalPages))
   console.log("Fetching data completed")
  }
   dayName = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

 fetchMoreData = async () => {
  this.setState({
    page : this.state.page + 1
  })
  let b = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=aa449ccac9ea482787e132d90f0d6a01&page=${this.state.page+1}&pageSize=20`;
  let a = await fetch(b);
  let data = await a.json();
  
  
  this.setState({articles: this.state.articles.concat(data.articles),
              
  })
  };
  render() {
    

    return (
      <div id='newsContainer'>
      <h1 className="my-5" style={{marginLeft:"15vw"}}>Top-Headlines {this.props.category}</h1>
      <h5 className="my-5" style={{marginLeft:"15vw"}}>{this.monthNames[this.state.month]} , {this.state.date} {this.state.year}</h5>
      
      <div className="topHeadlines my-5" style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
      <div className="card text-bg-dark" id='topContainer'>
  <img src={this.state.topImage ? this.state.topImage : 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className="card-img" style={{width:"60vw"}} alt="..." id='topImage'/>
  <div className="card-img-overlay">
    <h5 className="card-title">{this.state.topTitle}</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>{this.state.topSource}</small></p>
  </div>
</div>
      </div>
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.results}
          loader={<h4>Loading...</h4>}
        >
      <div className="conatiner "  style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
    {this.state.articles.map((ele)=>{
      return <div className="newsContainer my-5" key={ele.title} >
      <NewsItemDisplay title={ele.title? ele.title:"title here"} desc={ele.description} imgurl={ele.urlToImage? ele.urlToImage:"https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} newsUrl={ele.url}/>
       </div>
    })}
    
    </div>
    </InfiniteScroll>
   
      </div>
    )
  }
  
}


export default NewsDisplay
