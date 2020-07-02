import escapeRegExp from 'lodash.escaperegexp';


export default <T>(
  objects: T[],
  props: Partial<keyof T>[],
  query: string,
  minQueryLength: number = 1,
) => {
  if (query.length < minQueryLength) return objects;

  const exp = new RegExp(escapeRegExp(query), 'i');
  const predicate = (object: Record<keyof T, any>) => (
    props.some((prop) => {
      if (object[prop]) {
        return exp.test(object[prop].toString());
      }
      return false;
    })
  );

  return objects.filter(predicate);
};
