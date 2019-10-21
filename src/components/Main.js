import React from 'react';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();

    //Initialize my state
    this.state = {
      count: 0,
      words: 'DeltaV does React!',
    };
  }

  handleWords = event => {
    let words = event.target.value;

    //NEVER change state without setState
    this.setState({
      words: words,
    });
    console.log('Words changed:', this.state);
  }

  handleClick = event => {
    event.preventDefault();

    //NEVER CHANGE STATE DIRECTLY
    //this.state.count++   <=== DONT DO THIS

    //This is fine, but it may be buggy ...
    // let count = this.state.count + 1;
    // this.setState({ count });

    //This is preferred, as you'll never "lose" a count 
    this.setState(state => {
      let words = this.state.words.split('').reverse().join('');

      //Next State
      return { 
        words,
        count: state.count + 1,
      }
    })
  }

  render() {
    return (
      <main>
        <h3>{this.state.words}</h3>
        <h4>Count: {this.state.count}</h4>
        <input onChange={this.handleWords} />
        <button onClick={this.handleClick}>Reverse Word</button>
      </main>
    );
  }
}

export default Main;