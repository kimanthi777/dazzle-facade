export interface IIndexedDBOptions {
  name: string;
  version?: number;
  objectStoreName?: string;
}

export type TKey = string | number | Date | ArrayBufferView | ArrayBuffer | IDBKeyRange;

export class IndexedDB<T> {
  private db: IDBDatabase | null = null;
  private objectStoreName: string;
  private version: number;
  private name: string;

  constructor(options: IIndexedDBOptions) {
    this.objectStoreName = options.objectStoreName || 'defaultObjectStore';
    this.version = options.version || 1;
    this.name = options.name;
  }

  public open(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(this.name, this.version);

      request.onerror = () => {
        reject(request.error);
      };

      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {

        const db = (event.target as IDBOpenDBRequest).result;
        db.createObjectStore(this.objectStoreName);
    };

    });
  }

  public put(key: TKey, value: T): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.getTransaction('readwrite');
      const objectStore = transaction.objectStore(this.objectStoreName);
      const request = objectStore.put(value, key as IDBValidKey);

      request.onerror = () => {
        reject(request.error);
      };

      request.onsuccess = () => {
        resolve();
      };
    });
  }

  public get(key: TKey): Promise<T> {
    return new Promise((resolve, reject) => {
      const transaction = this.getTransaction('readonly');
      const objectStore = transaction.objectStore(this.objectStoreName);
      const request = objectStore.get(key);

      request.onerror = () => {
        reject(request.error);
      };

      request.onsuccess = () => {
        resolve(request.result);
      };
    });
  }

  public delete(key: TKey): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.getTransaction('readwrite');
      const objectStore = transaction.objectStore(this.objectStoreName);
      const request = objectStore.delete(key);

      request.onerror = () => {
        reject(request.error);
      };

      request.onsuccess = () => {
        resolve();
      };
    });
  }

  private getTransaction(mode: IDBTransactionMode): IDBTransaction {
    const transaction = this.db!.transaction(this.objectStoreName, mode);
    transaction.onerror = (event: Event) => {
      throw event;
    };
    return transaction;
  }
}
