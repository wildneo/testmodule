var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useRef } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import ClearIcon from '@material-ui/icons/Clear';
import IconButtonWithTooltip from '../IconButtonWithTooltip';
var useStyles = makeStyles(function (theme) { return (createStyles({
    endAdornment: {
        position: 'absolute',
        right: 0,
        top: "calc(50% - " + theme.spacing(2) + "px)",
    },
    input: {
        '& input::-ms-clear': {
            display: 'none',
            width: 0,
            height: 0,
        },
    },
})); });
var SearchInput = function (props) {
    var classes = useStyles();
    var value = props.value, onChange = props.onChange, onClear = props.onClear, _a = props.messages, messages = _a === void 0 ? {} : _a, otherProps = __rest(props, ["value", "onChange", "onClear", "messages"]);
    var inputRef = useRef(null);
    var handleQueryChange = function (event) {
        onChange(event);
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
    return (React.createElement(InputBase, __assign({ className: classes.input, onChange: handleQueryChange, inputRef: inputRef, value: value, placeholder: messages.searchPlaceholder, fullWidth: true, endAdornment: value && (React.createElement(InputAdornment, { position: "start" },
            React.createElement(IconButtonWithTooltip, { onClick: handleQueryClear, tooltipTitle: messages.clearCommand || 'Clear', buttonIcon: React.createElement(ClearIcon, null), size: "small", edge: "end" }))) }, otherProps)));
};
export default SearchInput;
