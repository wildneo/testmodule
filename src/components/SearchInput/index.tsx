import React, { ChangeEvent, useRef } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase, { InputBaseProps, InputBaseComponentProps } from '@material-ui/core/InputBase';
import ClearIcon from '@material-ui/icons/Clear';
import IconButtonWithTooltip from '../IconButtonWithTooltip';


export interface Messages {
  searchPlaceholder?: string
  clearCommand?: string
}

export interface SearchInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClear?: (event: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>) => void
  inputComponent?: InputBaseProps['inputComponent']
  inputProps?: InputBaseComponentProps
  messages?: Messages
}
const useStyles = makeStyles((theme: Theme) => (
  createStyles({
    endAdornment: {
      position: 'absolute',
      right: 0,
      top: `calc(50% - ${theme.spacing(2)}px)`,
    },
    input: {
      '& input::-ms-clear': {
        display: 'none',
        width: 0,
        height: 0,
      },
    },
  })
));

const SearchInput = (props: SearchInputProps) => {
  const classes = useStyles();
  const {
    value, onChange, onClear, messages = {}, ...otherProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleQueryChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    onChange(event);
  };

  const handleQueryClear = (
    event: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>,
  ) => {
    if (onClear) {
      onClear(event);
    }
    if (inputRef.current) {
      const prototype = Object.getPrototypeOf(inputRef.current);
      const valueSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;
      valueSetter?.call(inputRef.current, '');
      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
      inputRef.current.focus();
    }
  };

  return (
    <InputBase
      className={classes.input}
      onChange={handleQueryChange}
      inputRef={inputRef}
      value={value}
      placeholder={messages.searchPlaceholder}
      fullWidth
      endAdornment={
        value && (
          <InputAdornment position="start">
            <IconButtonWithTooltip
              onClick={handleQueryClear}
              tooltipTitle={messages.clearCommand || 'Clear'}
              buttonIcon={<ClearIcon />}
              size="small"
              edge="end"
            />
          </InputAdornment>
        )
      }
      {...otherProps}
    />
  );
};

export default SearchInput;
