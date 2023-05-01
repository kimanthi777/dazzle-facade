import { useState, useEffect } from 'react';
import {IndexedDB, IIndexedDBOptions, TKey} from './utils/indexedDB';

export default function useIndexedDB<T>(
  dbName: string,
  storeName: string,
  key?: string
): [T | undefined, (data: T) => void] {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const indexedDB = new IndexedDB(dbName, storeName);
    indexedDB.open().then(() => {
      if (key) {
        indexedDB.get<T>(key).then((result: any) => {
            if(result){
                setData(result as unknown as any);
            }
        });
      } else {
        indexedDB?.get<T>().then((result: any) => {
          setData(result as unknown as any);
        });
      }
    });

    return () => {
    //   indexedDB?.close();
    };
  }, [dbName, storeName, key]);

  const updateData = (newData: T) => {
    const indexedDB = new IndexedDB(dbName, storeName);
    indexedDB.open().then(() => {
    //   indexedDB.put(newData);
    });
    setData(newData);
  };

  return [data, updateData];
}
