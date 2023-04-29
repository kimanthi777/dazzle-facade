/**
 * Local and session storage
 */

export type StorageType = 'localStorage' | 'sessionStorage'

export interface IStorageProperties<T> {
    key: string;
    defaultValue?: T;
    serialize?(value: T): string;
    deserialize?(value: string): T 
}

