import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
    };
    this.loadingBar = React.createRef(); // Reference to the loading bar
  }

  startLoading = () => {
    this.loadingBar.current.continuousStart();
    let progress = 0;
    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
        this.loadingBar.current.complete(); // Complete the progress bar
      } else {
        progress += 5;
        this.setState({ progress });
        this.loadingBar.current.progress(progress);
      }
    }, 100); // Adjust this interval to control the speed
  };

  render() {
    return (
      <div>
        <LoadingBar
          color="#3498db" // Set the color of the progress bar
          progress={this.state.progress}
          height={4} // Height of the bar
          onLoaderFinished={() => this.setState({ progress: 0 })} // Reset progress on finish
          ref={this.loadingBar} // Set reference to control the loading bar
        />
        <button onClick={this.startLoading}>Start Loading</button>
      </div>
    );
  }
}

export default Loading;
