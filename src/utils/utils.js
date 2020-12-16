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
 * param 将要转为URL参数字符串的对象
 * key URL参数字符串的前缀
 * encode true/false 是否进行URL编码,默认为true
 *
 * return URL参数字符串
 */
var urlEncode = function(param, key, encode) {
  if (param === null) {
    return "";
  }
  var paramStr = "";
  var t = typeof param;
  let k = "";
  if (t === "string" || t === "number" || t === "boolean") {
    paramStr +=
      "&" +
      key +
      "=" +
      (encode === null || encode ? encodeURIComponent(param) : param);
  } else {
    for (let i in param) {
      if (param.hasOwnProperty(i)) {
        k =
          key === null
            ? i
            : key + (param instanceof Array ? "[" + i + "]" : "." + i);
        paramStr += urlEncode(param[i], k, encode);
      }
    }
  }
  return paramStr;
};

export let urlParamEncode = function(param) {
  var t = typeof param;
  if (t === "string" || t === "number" || t === "boolean") return param;
  let res = urlEncode(param).slice(1);
  return `?${res}`;
};

/**
 * 获取url参数
 */
function getSearch() {
  let query = window.location.search.substring(1);
  let attr = {};
  let match = {};
  let pl = /\+/g;
  let searchReg = /([^&=]+)=?([^&]*)/g;

  let decode = function(s) {
    return decodeURIComponent(s.replace(pl, " "));
  };
  while ((match = searchReg.exec(query)) !== null) {
    attr[decode(match[1])] = decode(match[2]);
  }
  return attr;
}
export function search(key) {
  const attr = getSearch();
  if (!key) {
    return window.location.search.substring(1);
  }

  return attr[key];
}
