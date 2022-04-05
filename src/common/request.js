import axios from 'axios'
import Vue from 'vue'
Vue.prototype.axios = axios
import { tokenUrl } from '@/valid/tokenUrl'
import router from '@/router'
import { Toast } from 'vant'
Vue.use(Toast)
    // 设置请求基础路径
axios.defaults.baseURL = 'http://www.kangliuyong.com:10002';

// 添加一个axios请求之前拦截器
axios.interceptors.request.use(config => {
    // config: 请求配置(请求头, 请求参数, 请求类型, 请求路径, ....)
    // console.log('发起请求之前执行');
    // console.log('config ==> ', config);
    const tokenString = localStorage.getItem('token');
    const appkey = 'U2FsdGVkX19WSQ59Cg+Fj9jNZPxRC5y0xB1iV06BeNA=';
    // 处理请求的公共参数
    if (config.method === 'get') {
        config.params = config.params || {};
        config.params.appkey = appkey;

        if (tokenUrl.indexOf(config.url) > -1) {
            config.params.tokenString = tokenString;
        }
    } else if (config.method === 'post') {
        config.data = config.data || {};

        if (tokenUrl.indexOf(config.url) > -1) {
            config.data.tokenString = tokenString;
        }

        // 序列化post请求参数
        let dataParams = '';
        for (const key in config.data) {
            dataParams += `${key}=${config.data[key]}&`
        }
        dataParams += `appkey=${appkey}`;

        config.data = dataParams;
    }

    // 启动加载提示
    Toast.loading({
        message: '加载中...',
        // 禁止穿透点击
        forbidClick: true,
        loadingType: 'spinner',
        // 不会自动关闭提示
        duration: 0
    })

    return config;
}, err => {
    console.log('err ==> ', err);
    // 关闭加载提示
    Toast.clear();
    return Promise.reject(err);
})

// 添加一个响应之前拦截器
axios.interceptors.response.use(res => {
    // res: 服务器响应数据
    // console.log('响应数据返回给前端之前');

    // 关闭加载提示
    Toast.clear();

    return res;
}, err => {
    console.log('err ==> ', err);

    // 关闭加载提示
    Toast.clear();

    return Project.reject(err);
})

export const get = (url, parameterObj = {}, callback) => {
    const tokenString = localStorage.getItem('token');
    parameterObj.tokenString = tokenString
    return new Promise((resolve, reject) => {
        axios({
            // 请求类型
            method: 'get',
            // 请求路径
            url,
            // 如果get请求, 请求参数需要写在params字段中
            params: parameterObj
        }).then((res) => {
            if (res.data.code !== 700) return resolve(res.data)
            Toast(res.data.msg);
            callback ? callback() : router.push({ name: 'Login' });
        }).catch((err) => {
            console.log('黄err ==> ', err);
            reject(err)
        });
    })
}

export const post = (url, parameterObj = {}) => {
    const tokenString = localStorage.getItem('token');
    parameterObj.tokenString = tokenString
    return new Promise((resolve, reject) => {
        axios({
            // 请求类型
            method: 'post',
            // 请求路径
            url,
            // 如果get请求, 请求参数需要写在params字段中
            data: parameterObj
        }).then((res) => {
            resolve(res.data)
            console.log(res)

            if (res.code === 700) {
                Toast(res.data.msg);
                router.push({ name: 'Login' });
                return;
            }
        }).catch((err) => {
            console.log('err ==> ', err);
            reject(err)
        });
    })
}

export default axios