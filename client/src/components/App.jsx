import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="navbar">
        <div className="box">About Me</div>
        <div className="box">Projects</div>
        <div className="box">GitHub</div>
      </div>
    );
  }
}

export default App;
