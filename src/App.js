import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';
import arr from'./components/newsList.js'


import NewsData from './components/card';
import Options from './components/selectOptions';
import country from './components/country';
import category from './components/category'
import logo from './pug_shot.png'


var fakeData=[
  {
  source:{
    name:"me"
  }
  ,
  author:"tyra1",
  title:"hellow react",
   describe:"what's up. hope this will work",
  
},
 ]

//let url=`https://newsapi.org/v2/sources?category=${this.state.category}&apiKey=${API_KEY}`
class App extends Component {
  constructor(props){
    super(props);
   this.state= {fakeData, search_keyword:'',news_source:'',country:'in',category:'general'};
 }
 componentDidMount(){
  const API_KEY = '5d3cb9525e6948ae9d41dfbffb469cc9';
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;   
  axios.get(url)
  .then(function (response) {
    return response.data    
  })
  .then((data) => {
        this.setState({
          fakeData:data.articles
        })
  })
  .catch(function (error) {
    console.log(error);
  });
  
 }


 handleSearch=(e)=>{
  e.preventDefault()
  const API_KEY = '5d3cb9525e6948ae9d41dfbffb469cc9';
   let url=`https://newsapi.org/v2/everything?q=${this.state.search_keyword}&sortBy=popularity&apiKey=${API_KEY}`; 
  
  axios.get(url)
  .then(function(response){
    return response.data
  })   
  .then((data)=>{
    this.setState({
             fakeData:data.articles
    })
  }) 
  .catch(function (error) {
    console.log(error);
  });     
 }
 handleOnChange = (e) => {
   e.preventDefault()
   this.setState({[e.target.name]: e.target.value})
 }


 handleFilter = (name, value) => {
 
  const API_KEY = '5d3cb9525e6948ae9d41dfbffb469cc9';
  // let source=arr.filter((src) => {
  //return src.name === this.state.news_source
  //})
  this.setState({[name]: value}, () => {
      let url;
      if(name==='news_source'){
        url=`https://newsapi.org/v2/top-headlines?sources=${this.state.news_source}&apiKey=${API_KEY}`
      }else{
        url=`https://newsapi.org/v2/top-headlines?category=${this.state.category}&country=${this.state.country}&apiKey=${API_KEY}`
      }
  axios.get(url)
  .then((response) => {
    return response.data
  })
  .then((data)=>{
    this.setState({
      fakeData: data.articles
    })
  })
.catch((error) => {
  console.log(error);
  });
  }) 
}
 
 render() {
   var data= this.state.fakeData;
    console.log(country);
    console.log(data);
    return (
    <div className="App">
    <header className="header" >
    <img src={logo} id="logo"/>

     <form onSubmit={this.handleSearch}>
      <input onChange={this.handleOnChange} name="search_keyword" id="searchData"/> 
      <input type="submit"  name ="search" id="submit-button" />
      </form>
      </header>
      <div id="fliter-option">
      <span id="one">Search</span>
      <Options arr={arr} name="news_source" handleFilter={ this.handleFilter} />
      <span id="two" >In</span>
      <Options arr={category} name="category" handleFilter={ this.handleFilter}/>
      <span id="three">For</span>
      <Options arr={country} name="country" handleFilter={ this.handleFilter}/>
      </div>

    { data.map((info,index)=>(
      <NewsData item={info} key={index}/>
    ))
    }
    
    
    </div>
    );
  }
 
}

export default App;
