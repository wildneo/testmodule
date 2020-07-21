import escapeRegExp from 'lodash.escaperegexp';

interface Options <T>{
  includeProps: Partial<keyof T>[]
  query: string
  minQueryLength?: number
}

export default <T>(collection: T[], options: Options<T>) => {
  const { query, includeProps, minQueryLength = 1 } = options;

  if (query.length < minQueryLength) return collection;

  const exp = new RegExp(escapeRegExp(query), 'i');
  const predicate = (object: Record<keyof T, any>) => (
    includeProps.some((prop) => {
      if (object[prop]) {
        return exp.test(object[prop].toString());
      }
      return false;
    })
  );

  return collection.filter(predicate);
};
