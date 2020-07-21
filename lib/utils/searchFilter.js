import escapeRegExp from 'lodash.escaperegexp';
export default (function (collection, options) {
    var query = options.query, includeProps = options.includeProps, _a = options.minQueryLength, minQueryLength = _a === void 0 ? 1 : _a;
    if (query.length < minQueryLength)
        return collection;
    var exp = new RegExp(escapeRegExp(query), 'i');
    var predicate = function (object) { return (includeProps.some(function (prop) {
        if (object[prop]) {
            return exp.test(object[prop].toString());
        }
        return false;
    })); };
    return collection.filter(predicate);
});
