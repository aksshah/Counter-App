import React from 'react';
import {Component} from 'react';
import './counter.css'

class Counter extends React.Component {
     
  state = {
    count: 0
  };

  increment = () => {
    let count  = this.state.count;
    this.setState({
      count:count+1
    });
  };

  clear = () => {
    let count  = this.state.count;
    this.setState({
      count: 0
    });
  }

  decrement = () => {
    let count  = this.state.count;
    (count > 0) ?
    this.setState({
      count:count-1
    }): alert("can't go below ZERO");
  };

    render(){
        return(
            <div className='countermain'>
                <b>Counter App</b>
                <p>Counter : {this.state.count}</p>
                <div className="buttonsdiv">
                  <button onClick={this.increment}>+1</button>
                  <button onClick={this.decrement}>-1</button>
                </div>
                <button onClick={this.clear}>Clear</button>  
            </div>
        );
    }
}

export default Counter