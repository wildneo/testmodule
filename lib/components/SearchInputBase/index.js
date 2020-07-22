import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import InputBase from '@material-ui/core/InputBase';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButtonWithTooltip from '../IconButtonWithTooltip';
var useStyles = makeStyles({
    root: {
        '& input::-ms-clear': {
            display: 'none',
            width: 0,
            height: 0,
        },
    },
});
var SearchInputBase = function (props) {
    var classes = useStyles();
    var inputRef = useRef(null);
    var value = props.value, onChange = props.onChange, onClear = props.onClear, _a = props.messages, messages = _a === void 0 ? {} : _a, _b = props.Component, Component = _b === void 0 ? InputBase : _b;
    var handleQueryChange = function (event) {
        if (onChange) {
            onChange(event);
        }
    };
    var handleQueryClear = function (event) {
        var _a;
        if (onClear) {
            onClear(event);
        }
        if (inputRef.current) {
            var prototype = Object.getPrototypeOf(inputRef.current);
            var valueSetter = (_a = Object.getOwnPropertyDescriptor(prototype, 'value')) === null || _a === void 0 ? void 0 : _a.set;
            valueSetter === null || valueSetter === void 0 ? void 0 : valueSetter.call(inputRef.current, '');
            inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
            inputRef.current.focus();
        }
    };
    return (React.createElement(Component, { className: classes.root, onChange: handleQueryChange, inputRef: inputRef, value: value, placeholder: messages.searchPlaceholder, fullWidth: true, "data-testid": "input", endAdornment: value && (React.createElement(InputAdornment, { position: "end" },
            React.createElement(IconButtonWithTooltip, { onClick: handleQueryClear, tooltipTitle: messages.clearCommand || 'Clear', buttonIcon: React.createElement(ClearIcon, null), size: "small" }))) }));
};
export default SearchInputBase;
