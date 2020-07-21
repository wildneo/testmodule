interface Options<T> {
    includeProps: Partial<keyof T>[];
    query: string;
    minQueryLength?: number;
}
declare const _default: <T>(collection: T[], options: Options<T>) => T[];
export default _default;
