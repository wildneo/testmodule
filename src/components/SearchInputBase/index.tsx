import React, { useRef, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import Input from '@material-ui/core/Input';
import InputBase, { InputBaseProps } from '@material-ui/core/InputBase';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButtonWithTooltip from '../IconButtonWithTooltip';


export interface Messages {
  searchPlaceholder?: string
  clearCommand?: string
}

export interface SearchInputBaseProps {
  /** Значение поля `input` */
  value?: InputBaseProps['value']

  /** Срабатывает при изменении значения */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void

  /** Срабатывает при нажатии 'Очистить' */
  onClear?: (event: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>) => void

  /** Объект содержит сообщения `searchPlaceholder` и `clearCommand`
   * @typedef Messages
  */
  messages?: Messages

  /** Один из трех компонентов [`FilledInput`](https://material-ui.com/api/filled-input/),
   * [`OutlinedInput`](https://material-ui.com/api/outlined-input/) или [`Input`](https://material-ui.com/api/input/).
   * @default InputBase
  */
  Component?: (typeof FilledInput | typeof Input | typeof OutlinedInput)
}

const useStyles = makeStyles({
  root: {
    '& input::-ms-clear': {
      display: 'none',
      width: 0,
      height: 0,
    },
  },
});

/**
 * Компонент на основе [InputBase](https://material-ui.com/api/input-base/) с возможностью быстро очистить ввод.
 */

const SearchInputBase = (props: SearchInputBaseProps) => {
  const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    value,
    onChange,
    onClear,
    messages = {},
    Component = InputBase,
  } = props;

  const handleQueryChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    if (onChange) {
      onChange(event);
    }
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
    <Component
      className={classes.root}
      onChange={handleQueryChange}
      inputRef={inputRef}
      value={value}
      placeholder={messages.searchPlaceholder}
      fullWidth
      data-testid="input"
      endAdornment={
        value && (
          <InputAdornment position="end">
            <IconButtonWithTooltip
              onClick={handleQueryClear}
              tooltipTitle={messages.clearCommand || 'Clear'}
              buttonIcon={<ClearIcon />}
              size="small"
            />
          </InputAdornment>
        )
      }
    />
  );
};

export default SearchInputBase;
