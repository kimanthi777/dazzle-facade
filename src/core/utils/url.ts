export const SERVER_URL = () => {
    if (!process.env.REACT_APP_ENV || process.env.REACT_APP_ENV === 'dev') {
        return 'http://localhost:5000'
    }

    return 'https://api.dazzlehr.vercel.app'
}

const URL = SERVER_URL()

console.log(`⚡️ ----------------------------------⚡️`)
console.log(`⚡️ 🔋️ file: url.ts:11 🔋️ URL`, URL)
console.log(`⚡️ ----------------------------------⚡️`)

export default URL 