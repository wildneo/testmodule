An example of using component:

### Использование:
```tsx
import { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import { SearchInput } from 'react-components-workbench';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        width: '25ch',
        margin: theme.spacing(1),
      },
    },
  }),
);

const Example = () => {
  const [value, setValue] = useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const messages = {
    searchPlaceholder: 'Начните печатать...',
    clearCommand: 'Очистить',
  };

  return (
    <div className={classes.root}>
      <SearchInput
        value={value}
        onChange={handleChange}
        inputComponent={FilledInput}
        inputProps={{
          label: "Standard"
        }}
        messages={messages}
      />
      <SearchInput
        value={value}
        onChange={handleChange}
        inputComponent={TextField}
        inputProps={{
          variant: 'filled',
          label: "Filled"
        }}
        messages={messages}
      />
      <SearchInput
        value={value}
        onChange={handleChange}
        inputComponent={TextField}
        inputProps={{
          variant: 'outlined',
          label: "Outlined"
        }}
        messages={messages}
      />
    </div>
  )
};

<Example />
```
