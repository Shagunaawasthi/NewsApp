import React, { Component } from 'react';

class Options extends Component{
    handleFilter = (e) => {
        this.props.handleFilter(e.target.name, e.target.value);
    }
    render(){
        return(
            <select onChange={this.handleFilter} name={this.props.name} id="options" > 
            {this.props.arr.map((temp,index)=>
             <option value={temp.value} key={index} >
              {temp.name}
              </option>
              )}
          </select>
        );
    }
}

export default Options;