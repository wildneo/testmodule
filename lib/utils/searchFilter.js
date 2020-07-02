import escapeRegExp from 'lodash.escaperegexp';
export default (function (objects, props, query, minQueryLength) {
    if (minQueryLength === void 0) { minQueryLength = 1; }
    if (query.length < minQueryLength)
        return objects;
    var exp = new RegExp(escapeRegExp(query), 'i');
    var predicate = function (object) { return (props.some(function (prop) {
        if (object[prop]) {
            return exp.test(object[prop].toString());
        }
        return false;
    })); };
    return objects.filter(predicate);
});
