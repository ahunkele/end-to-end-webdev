import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  start = () => {
    this.interval = setInterval(() => this.setState({ count: this.state.count + 1 }), 1000 );
  }

  stop = () => {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1> {this.state.count} </h1>
        <button onClick={this.start}>Strat Timer!</button> <button onClick={this.stop}>Stop!</button>
        <br />
      </div>
    )
  }
}

export default App;
