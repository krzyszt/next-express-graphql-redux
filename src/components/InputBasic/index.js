import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },

});

const InputBasic = ({ classes }) => {
  const [inputText, setInputText] = useState('');

  return <div>
      <TextField
          id="standard-name"
          label="Name"
          value={inputText}
          className={classes.textField}
          onChange={e => setInputText(e.target.value)}
          margin="normal"
        />
      <p>
        {inputText}
      </p>
      
    </div>
}

export default withStyles(styles)(InputBasic);