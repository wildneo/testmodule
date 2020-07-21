import { ChangeEvent } from 'react';
export interface Options {
    minQueryLength?: number;
}
declare const useSearchFilter: <T extends {}>(collection: T[], includeProps: (keyof T)[], options?: Options | undefined) => {
    filteredCollection: T[];
    inputProps: {
        value: string;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    };
};
export default useSearchFilter;
