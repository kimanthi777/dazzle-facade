import { SERVER_URL } from './url'

/***
 * @IndexDB : Storage object & cache for files/blobs
 * ? 1. Media library
 * ? 2. Cache
 * ? 3. App settings
 * ? 4. Analytics
 * ? 5. Auto-complete & search options
 * TODO: Implement a class & Error handling
 */

const INDEXED_DB_NAME = 'DAZZLE_DB'

let request = indexedDB.open(INDEXED_DB_NAME, 1)

request.onupgradeneeded = function () {
    let objectStore = request.result.createObjectStore('cache', {
        keyPath: 'key'
    })
}

request.onsuccess = function () {
    // if db open, save data to cache
    let db = request.result
    let transaction = db.transaction(['cache'], 'readwrite')
    let cache = transaction.objectStore('cache')
    // *key as Symbol that auto increments 
    cache.put({ key: 'myKey', data: "myCachedData" })

    transaction.oncomplete = function () {
        const SAVED_TO_CACHE_MESSAGE = 'Save to cache successful'

        // ! Do not log in data production
        if (SERVER_URL() === 'http://localhost:5000') {
            console.log(`⚡️ --------------------------------------------------------------------------------⚡️`)
            console.log(`⚡️ 🔋️ file: database.ts:29 🔋️ transaction.oncomplete 🔋️ oncomplete`, SAVED_TO_CACHE_MESSAGE)
            console.log(`⚡️ --------------------------------------------------------------------------------⚡️`)
        }

        console.log('saved to cache')
    }
}

// Data access 
let res = indexedDB.open(INDEXED_DB_NAME, 1)
res.onsuccess = function () {
    let db = res.result
    let tx = db.transaction(['cache'])
    let cache = tx.objectStore('cache')
    let data = cache.get('myKey')

    data.onsuccess = function () {
        const GET_TO_CACHE_MESSAGE = 'Data retrieval successful'
        if (SERVER_URL() === 'http://localhost:5000') {
            // ! Do not log in data production
            console.log(`⚡️ -------------------------------------------------------------------------⚡️`)
            console.log(`⚡️ 🔋️ file: database.ts:47 🔋️ GET_TO_CACHE_MESSAGE`, GET_TO_CACHE_MESSAGE)
            console.log(`⚡️ -------------------------------------------------------------------------⚡️`)
        }
        let cachedData = data.result.data
        // do something with the data
        return cachedData

    }
}