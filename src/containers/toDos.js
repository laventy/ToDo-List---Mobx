import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

import ToDo from 'containers/toDo';

// Material UI Components
import { Button, Grid, Typography } from '@material-ui/core';

const styles = theme => ({
  container: {
    margin: '0 auto',
    width: 400,
  },
});

@inject('toDos')
@observer
class ToDos extends React.Component {
  render() {
    const { classes, toDos: state } = this.props;
    return (
      <Grid className={classes.container}>
        {state.toDos.map(toDo => (
          <ToDo key={toDo.id} toDo={toDo} />
        ))}
        <Grid>
          <Button variant="contained" color="primary" onClick={state.addToDo}>
            Add
          </Button>
        </Grid>
        <Grid>
          <Typography variant="overline" gutterBottom>
            finished {state.finishedToDosNum}/{state.toDos.length}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ToDos);
