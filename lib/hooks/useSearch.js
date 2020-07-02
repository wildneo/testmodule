import { useState, useEffect, useCallback } from 'react';
import { searchFilter } from '../utils';
export default (function (objects, props, options) {
    var _a = useState(objects), filteredObjects = _a[0], setFilteredObjects = _a[1];
    var _b = useState(''), searchQuery = _b[0], setSearchQuery = _b[1];
    var minQueryLength = (options && options.minQueryLength) || undefined;
    useEffect(function () {
        setFilteredObjects(searchFilter(objects, props, searchQuery, minQueryLength));
    }, [minQueryLength, objects, props, searchQuery]);
    var handleValueChange = useCallback(function (value) {
        setSearchQuery(value);
    }, []);
    return {
        searchQuery: searchQuery,
        filteredObjects: filteredObjects,
        handleValueChange: handleValueChange,
    };
});
