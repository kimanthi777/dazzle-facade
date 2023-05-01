import { IStorageProperties, createStorage } from '../../utils/storage/createStorage';

export function useSessionStorage<T = string>(props: IStorageProperties<T>){
    return createStorage('sessionStorage', '')(props)
}
