export default () => {
    if (typeof window !== 'undefined') {
        const search = window.location.search
        let hashes = search.slice(search.indexOf('?') + 1).split('&')
        let params = {}
        hashes.map(hash => {
            let [key, val] = hash.split('=')
            params[key] = decodeURIComponent(val)
        })
    
        return params
    }
    return {};
}