import axios from 'axios';
import Vue from 'vue';
Vue.prototype.axios = axios;
import { tokenUrl } from '@/valid/tokenUrl';
import { Toast } from 'vant';
Vue.use(Toast);

const HTTP_ERR_CODE = {
    400: '错误请求',
    401: '授权已失效，请重新登录',
    403: '服务器拒绝访问',
    404: '请求失败，未找到指定资源',
    405: '请求的方法已被禁用',
    406: '服务器不接受该请求',
    407: '请求需要代理授权',
    408: '请求超时',
    409: '服务器在完成请求时发生冲突',
    410: '服务器已永久删除请求的资源',
    411: '服务器不接受不含有效内容长度标头字段的请求',
    412: '服务器未满足前提条件',
    413: '请求实体过大',
    414: '请求的 URI 过长',
    415: '不支持的媒体类型',
    416: '请求范围不符合要求',
    417: '请求的标头字段不满足服务器要求',
    500: '服务器内部出错',
    501: '服务器无法识别请求方法',
    502: '网关错误',
    503: '服务器目前无法使用',
    504: '网络超时，请在有网的环境下重试',
    505: 'HTTP版本不支持该请求',
    error: '系统错误',
};

export const formatDate = (value, format) => {
    // value: 日期对象 || 日期字符串
    // format: 格式 ==> 比如 yyyy-MM-dd hh:mm:ss
    // 月日时分秒不足十补零, 比如 M 不需要补零, 如果是MM, 并且月份不足十，则需要补零

    if (Object.prototype.toString.call(value) !== ['object Date']) {
        value = new Date(value);
    }

    // 获取年份
    const yearReg = /(y+)/;
    if (yearReg.test(format)) {
        // 获取匹配组的内容
        const yearContent = RegExp.$1;
        // 获取年份
        let year = value.getFullYear().toString();
        let yearText = year.slice(4 - yearContent.length);
        format = format.replace(yearContent, yearText);
    }

    let dateObject = {
        M: value.getMonth() + 1,
        d: value.getDate(),
        h: value.getHours(),
        m: value.getMinutes(),
        s: value.getSeconds(),
    };

    //遍历dateObject替换format
    for (const key in dateObject) {
        //动态创建正则表达式
        let reg = new RegExp(`(${key}+)`);
        if (reg.test(format)) {
            //获取匹配组的内容
            let content = RegExp.$1;
            format = format.replace(content, content.length === 1 ? dateObject[key] : dateObject[key] >= 10 ? dateObject[key] : `0${dateObject[key]}`);
        }
    }
    return format;
};