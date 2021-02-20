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
