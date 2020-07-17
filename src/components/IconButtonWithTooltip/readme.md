An example of using component:

```jsx
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import { IconButtonWithTooltip } from 'react-components-workbench';

const Example = () => (
  <>
    <IconButtonWithTooltip
      tooltipTitle="Confirm"
      buttonIcon={<CheckIcon />}
    />
    <IconButtonWithTooltip
      disabled
      tooltipTitle="Close"
      buttonIcon={<CloseIcon />}
    />
  </>
);

<Example />
```
