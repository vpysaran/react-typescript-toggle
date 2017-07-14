import * as React from 'react';

import Toggle from './toggle-button/toggle-button';

interface Props extends React.Props<App> {
}

const styles = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  }, 
}

export default class App extends React.Component<Props, {}> {
  public render() {
    return (
      <div>
        <h1>React Components in Typescript</h1>
        <h2>Toggle Button</h2>
        <div style={styles.block} >
          <Toggle label="Simple" />
          <Toggle label="Toggled by default" defaultToggled={true} />
          <Toggle label="Disabled" disabled={true} />
          <Toggle label="Label on the right" labelPosition="right"/>
        </div>        
      </div>
    );
  }
}
