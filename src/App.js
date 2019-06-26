import React from 'react';

import Display from './display/Display';
import Controls from './controls/Controls;

class App extends React.Component {
  state = {
    locked: false,
    closed: false
  }

  toggleLocked = () => {
    this.setState(prev => ({ locked: !prev.loacked }));
  }

  toggleClosed = () => {
    this.setState(prev => ({ closed: !prev.closed }));
  }

  render() {
    const { closed, locked } = this.state;

    return(
      <>
          <Display locked={locked}
                   closed={closed}
                   />
        
          <Controls locked={locked}
                    closed={closed}
                    toggleLocked={this.toggleLocked}
                    toggleClosed={this.toggleClosed}
                    />
      </>
    );
  }
}

export default App;
