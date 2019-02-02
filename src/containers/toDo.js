import React, { Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';

// Material UI Components
import { Checkbox, TextField, Grid } from '@material-ui/core';

// Custom Components

@observer
class ToDo extends React.Component {
  render() {
    const { toDo } = this.props;

    console.log(`toDo ${toDo.id} rendered`);

    return (
      <Grid>
        <Checkbox checked={toDo.finished} value="checkedToDo" color="primary" onChange={e => toDo.handleFieldChange('finished', e.target.checked)} />
        <TextField id="toDoTitle" value={toDo.title} margin="normal" onChange={e => toDo.handleFieldChange('title', e.target.value)} />
      </Grid>
    );
  }
}
export default ToDo;
