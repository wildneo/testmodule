import {
  useMemo,
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react';
import { searchFilter } from '../utils';


export interface Options {
  /** Min number of chars required to start a search */
  minQueryLength?: number
}

const useSearchFilter = <T extends {}>(
  collection: T[],
  includeProps: Partial<keyof T>[],
  options?: Options,
) => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(collection);
  const memoizedProps = useMemo(() => includeProps, []);
  const minQueryLength = (options && options.minQueryLength) || undefined;

  useEffect(() => {
    setFiltered(searchFilter(
      collection,
      {
        query,
        minQueryLength,
        includeProps: memoizedProps,
      },
    ));
  }, [collection, query, memoizedProps, minQueryLength]);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, []);

  return {
    filteredCollection: filtered,
    inputProps: {
      value: query,
      onChange,
    },
  };
};

export default useSearchFilter;
