### Использование:
```tsx
import { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { SearchInputBase } from 'react-components-workbench';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      itemAlign: 'center',
      '& > *': {
        margin: theme.spacing(1),
        width: '23ch',
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
      <SearchInputBase
        value={value}
        onChange={handleChange}
        messages={messages}
      />
      <SearchInputBase
        value={value}
        onChange={handleChange}
        messages={messages}
        Component={Input}
      />
      <SearchInputBase
        value={value}
        onChange={handleChange}
        messages={messages}
        Component={FilledInput}
      />
      <SearchInputBase
        value={value}
        onChange={handleChange}
        messages={messages}
        Component={OutlinedInput}
      />
    </div>
  )
};

<Example />
```
