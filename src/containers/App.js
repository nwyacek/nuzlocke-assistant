import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';

// Material UI Dependencies
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey900 } from 'material-ui/styles/colors';

// Components
import AppBar from 'material-ui/AppBar';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey900
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <AppBar title="Nuzlocke Assistant">
            <img className="App-logo" src={logo} alt="pokeball" />
          </AppBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
