import { useState, useEffect, useCallback } from 'react';
import { searchFilter } from '../utils';


export interface Options {
  minQueryLength?: number
}

export default <T extends {}>(objects: T[], props: Partial<keyof T>[], options?: Options) => {
  const [filteredObjects, setFilteredObjects] = useState(objects);
  const [searchQuery, setSearchQuery] = useState('');
  const minQueryLength = (options && options.minQueryLength) || undefined;


  useEffect(() => {
    setFilteredObjects(searchFilter(objects, props, searchQuery, minQueryLength));
  }, [minQueryLength, objects, props, searchQuery]);

  const handleValueChange = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  return {
    searchQuery,
    filteredObjects,
    handleValueChange,
  };
};
