import React from 'react';
import { InputBaseProps, InputBaseComponentProps } from '@material-ui/core/InputBase';
export interface Messages {
    searchPlaceholder?: string;
    clearCommand?: string;
}
export interface SearchInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear?: (event: React.MouseEvent<HTMLButtonElement | HTMLLIElement, MouseEvent>) => void;
    inputComponent?: InputBaseProps['inputComponent'];
    inputProps?: InputBaseComponentProps;
    messages?: Messages;
}
declare const SearchInput: (props: SearchInputProps) => JSX.Element;
export default SearchInput;
