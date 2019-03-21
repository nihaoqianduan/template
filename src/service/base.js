import http from 'axios'
import qs from 'qs'

const debug = process.env.NODE_ENV !== 'production'

http.defaults.baseURL = debug ? 'http://192.168.156.17:8080/CloudPayment' : '/CloudPayment'

http.defaults.timeout = 30 * 1000
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// http.defaults.headers.post['Content-Type'] = 'application/json'

// if (window.sessionStorage.getItem('userInfo')) {
//     http.defaults.headers.token = JSON.parse(window.sessionStorage.getItem('userInfo')).token
// }


http.interceptors.request.use((config) => {
    if (config.method === 'post') {
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
        config.data = qs.stringify(config.data)
    }
    return config
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

http.interceptors.response.use((res) => {
    return res
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

function getCookie(key) {
    let result = {}
    let str
    try {
        str = document.cookie
    } catch (err) {
        if (typeof console !== 'undefined' && typeof console.error === 'function') {
            console.error(err.stack || err)
        }
        return {}
    }

    if (str.indexOf('token') === -1) {
        window.location.href = 'http://39.106.126.22/gkshop/'
    }
    result = parse(str)

    function parse(str) {
        let obj = {}
        let pairs = str.split(/ *; */)
        let pair
        if (pairs[0] === '') return obj
        for (let i = 0; i < pairs.length; ++i) {
            pair = pairs[i].split('=')
            obj[decode(pair[0])] = decode(pair[1])
        }
        return obj
    }

    function decode(value) {
        try {
            return decodeURIComponent(value)
        } catch (e) {
            console.log('error `decode(%o)` - %o', value, e)
        }
    }

    if (key) {
        return result[key] || ''
    } else {
        return result
    }
}

export default http
