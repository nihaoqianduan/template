import http from './base';
import Toast from 'oreo-ui/components/toast';

const api = {
}

const methods = {}

Object.keys(api).map((key, index) => {
    methods[key] = async (param) => {
        // return new Promise((resolve, reject) => {
        //   response(((p) => {
        //     return http.post(api[key], p)
        //   })(param)).then((res) => {
        //     resolve(res)
        //   }).catch((error) => {
        //     reject(error)
        //   })
        // })
        try {
            let res = await response(((p) => {
                return http.post(api[key], p)
            })(param));
            // console.log(res)
            return res;
        } catch (error) {
            throw error;
        }
    }
})

async function response(promise) {
    // try {
    //   let res = await promise;
    //   if (res.status === 200 && (res.data.returncode == "100" || res.data.code === "SUCCESS")) {
    //     // resolve(res.data)
    //     return res.data;
    //   } else if (res.data.returncode === 'ERROR') {
    //     console.log(res.data)
    //     Toast('服务器出错，请稍候重试！')
    //     throw res.data
    //   } else if (res.data.returncode === 'BSNERROR') {
    //     Toast(res.data.returnmsg)
    //   } else if (res.data.code === 'ERROR') {
    //     Toast(res.data.msg)
    //     throw res.data
    //   } else {
    //     console.log(res.data)
    //     Toast(res.data.returnmsg)
    //     throw res.data.returnmsg
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
    return new Promise((resovle, reject) => {
        promise.then(res => {
            if (res.status === 200 && (res.data.returncode == "100" || res.data.code === "SUCCESS")) {
                resovle(res.data)
                // return res.data;
            } else if (res.data.returncode === 'ERROR') {
                console.log(res.data)
                Toast('服务器出错，请稍候重试！')
                // reject(res.data)
            } else if (res.data.returncode === 'BSNERROR') {
                Toast(res.data.returnmsg)
            } else if (res.data.code === 'ERROR') {
                Toast(res.data.msg)
                // reject(res.data)
            } else {
                console.log(res.data)
                Toast(res.data.returnmsg)
                // reject(res.data.returnmsg)
            }
        }).catch(error => {
            console.log(error)
        })
    })
}

export default methods
