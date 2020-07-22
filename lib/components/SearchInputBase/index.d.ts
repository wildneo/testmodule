import React from 'react';
import Input from '@material-ui/core/Input';
import { InputBaseProps } from '@material-ui/core/InputBase';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
export interface Messages {
    searchPlaceholder?: string;
    clearCommand?: string;
}
export interface SearchInputBaseProps {
    value?: InputBaseProps['value'];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: (event: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>) => void;
    messages?: Messages;
    Component?: (typeof FilledInput | typeof Input | typeof OutlinedInput);
}
declare const SearchInputBase: (props: SearchInputBaseProps) => JSX.Element;
export default SearchInputBase;
