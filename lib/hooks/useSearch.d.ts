export interface Options {
    minQueryLength?: number;
}
declare const _default: <T extends {}>(objects: T[], props: (keyof T)[], options?: Options | undefined) => {
    searchQuery: string;
    filteredObjects: T[];
    handleValueChange: (value: string) => void;
};
export default _default;
