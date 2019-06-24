import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isRunning: false,
      count: 0
    };
  }

  start = () => {
    if(this.state.isRunning === false)
    {
      this.interval = setInterval(() => this.setState(
        {isRunning: true, 
        count: this.state.count + 1 
        }), 1000 );
    }
  }

  stop = () => {
    clearInterval(this.interval);
    this.setState({isRunning: false});
  }

  clear = () => {
    this.setState({isRunning: false, count: 0 });
  }

  render() {
    return (
      <div>
        <h1> {this.state.count} </h1>
        <button onClick={this.start}>Strat Timer!</button> <button onClick={this.stop}>Stop!</button> <button onClick={this.clear}>Clear!</button>
        <br />
      </div>
    )
  }
}

export default App;
