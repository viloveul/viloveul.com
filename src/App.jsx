import React from 'react';

class App extends React.Component {
  handleClick = () => {
    window.location.href = 'https://github.com/viloveul'
  }

  render = () => {
    return (
      <div className="viloveul-wrapper">
        <div id="viloveul-container">
          <div id="viloveul" title="title">
            <p className="viloveul-body" onClick={this.handleClick}>
              <span className="text text-1">V</span>
              <span className="text text-2">i</span>
              <span className="text text-3">l</span>
              <span className="text text-4">o</span>
              <span className="text text-5">v</span>
              <span className="text text-6">e</span>
              <span className="text text-7">u</span>
              <span className="text text-8">l</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
