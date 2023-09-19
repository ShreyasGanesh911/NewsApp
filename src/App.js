import './App.css';
import React from 'react'
import Navbar from './component/Navbar';
import NewsDisplay from './component/NewsDisplay';
import {HashRouter,Route,Routes} from "react-router-dom";
import FootBar from './component/FootBar';

function App(){

    return (
      <>
      <HashRouter>
        <Navbar/>
       
       
        <Routes>
          
          <Route  path="/Sports"  element={<NewsDisplay  key="sports" category='sports'/>}>
          </Route>
          <Route path="/TopHeadlines"   element={<NewsDisplay key="Top"  category=''/>}>
          </Route>
          <Route path="/Tech"  element={<NewsDisplay  key="business" category='business'/>}>
          </Route>
          <Route path="/science"  element={ <NewsDisplay key="gen"  category='science'/>}>
          </Route>
          <Route path="/Entertainment"  element={ <NewsDisplay key="enter"  category='entertainment'/>}>
          </Route>
        </Routes>
        
      </HashRouter>
      <FootBar/>
      </>
    )
  
}

export default App;