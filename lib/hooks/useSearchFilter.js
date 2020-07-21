import { useMemo, useState, useEffect, useCallback, } from 'react';
import { searchFilter } from '../utils';
var useSearchFilter = function (collection, includeProps, options) {
    var _a = useState(''), query = _a[0], setQuery = _a[1];
    var _b = useState(collection), filtered = _b[0], setFiltered = _b[1];
    var memoizedProps = useMemo(function () { return includeProps; }, []);
    var minQueryLength = (options && options.minQueryLength) || undefined;
    useEffect(function () {
        setFiltered(searchFilter(collection, {
            query: query,
            minQueryLength: minQueryLength,
            includeProps: memoizedProps,
        }));
    }, [collection, query, memoizedProps, minQueryLength]);
    var onChange = useCallback(function (event) {
        setQuery(event.target.value);
    }, []);
    return {
        filteredCollection: filtered,
        inputProps: {
            value: query,
            onChange: onChange,
        },
    };
};
export default useSearchFilter;
