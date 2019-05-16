import React, { Component } from 'react';

class NewsData extends Component{
  
    render(){

      return(
        
        <div class="container">     
          <div class="t1">
            <div class="image"><img src={this.props.item.urlToImage} alt="Card image cap"/></div> 
            <div class="author">{this.props.item.author}<br/>{this.props.item.publishedAt} </div>            
            </div>
          <div class="t2">
            <div class="title">{this.props.item.title}</div>
            <div class ="desc" numberOfLines={1} ellipsizeMode="middle">{this.props.item.description}</div>
          </div>      
        </div>
           
           /* <div className="card-body" id="main-card">
            <img className="card-img-top" src={this.props.item.urlToImage} alt="Card image cap" className="image"></img>
            <h5 className="card-title" id="title">{this.props.item.title}</h5>
           <p className="card-text mb-2 text-muted" id="content">
        
           {this.props.item.description}
            </p>
           
            </div>
       */
      
      );
    }
  }
  
  export default NewsData;