import axios from 'axios';
/**
 * #NOTE: DONT use '{ }'
 * Axios does have a default export
 * import { axios } from 'axios';
 */
/** end of import */

const hexURL = 'https://vue3-course-api.hexschool.io/v2';
const API_PATH = '16095502022022';


/**
 * 01_axios-Login
 */
const loginReq = axios.create({
    baseURL: hexURL
});
// console.log(loginReq);


/**
 * 02_axios-Admin
 * 
 * #TODO: XSRF
 */
const adminReq = axios.create({
    baseURL: `${hexURL}/api/${API_PATH}/admin`,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN'
});


/**
 * 03_defaults-Token
 * 
 * #TODO: eslint no-useless-escape
 * /(?:(?:^|.*;\s*)W2VUE3\s*\=\s*([^;]*).*$)|^.*$/,
 */
const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)W2VUE3\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
);
// console.log(token);
// console.log(document.cookie)

loginReq.defaults.headers.common.Authorization = token;
adminReq.defaults.headers.common.Authorization = token;
// loginReq.defaults.headers.common['Authorization'] = token;
/** end of definition */


/**
 * 04_export-api
 */
export const apiLogin = (user) => {
    return loginReq.post('/admin/signin', user);
};

export const apiLogCheck = () => {
    return loginReq.post('/api/user/check');
    // return loginReq.post('/api/user/check', {}, config);
    // .post('https://vue3-course-api.hexschool.io/v2/api/user/check', {}, config)
};
/** end of loginReq */


export const apiGetProductList = () => {
    return adminReq.get('products');
};
/** end of adminReq */

/** end of export-api */
