export function verifySpace(value) {
  const reg = /^[a-z|A-Z|0-9|\u4e00-\u9fa5]/;
  return reg.test(value.trim());
}

export function dataType(value) {
  return Object.prototype.toString.call(value);
}

export function isArray(value) {
  return dataType(value).slice(8, -1) === "Array";
}

export function isObject(value) {
  return dataType(value).slice(8, -1) === "Object";
}

/**
 * 获取url参数
 */
export function search(key) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (pair[0] === key) {
      return pair[1];
    }
  }
  return false;
}

// 判断开发、生产环境
export const debug = process.env.NODE_ENV === "development";

export const environ = process.env.NODE_ENV;
