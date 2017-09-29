import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';


class CaptureList extends Component {
  renderCaptureList = (key) => {
    const location = this.props.data[key];
    
    return (
        <Grid item key={key} className="location-row">
          <Grid container align="center">
            <Grid item lg={1}>
              <span>{location.name}</span>
            </Grid>
            <Grid item>
              <TextField placeholder="Pokemon caught" />
            </Grid>
          </Grid>
        </Grid>
    );
  }
  render() {
    return (
      <Grid container direction="column">
        {Object.keys(this.props.data).map(this.renderCaptureList)}
      </Grid>
    ); 
  }
}

export default CaptureList; 