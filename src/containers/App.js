import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import sampleLocations from '../sample-locations';

// Material UI Dependencies
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

// Components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import CaptureList from './CaptureList';

injectTapEventPlugin();

const muiTheme = createMuiTheme({
  palette: {
    type: 'light'
  },
  overrides: {
    MuiToolbar: {
      root: {
        background: '#222',
        color: '#fff'
      }
    }
  }
  
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className="App">
          <AppBar position="static">
            <Toolbar disableGutters={true}>
              <img className="App-logo" src={logo} alt="pokeball" />
              <Typography type="title" color="inherit">
                Nuzlocke Assistant
              </Typography>
            </Toolbar>
          </AppBar>
          <CaptureList data={sampleLocations} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
