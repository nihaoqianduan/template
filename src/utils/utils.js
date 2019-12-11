export function verifySpace (value) {
  const reg = /^[a-z|A-Z|0-9|\u4e00-\u9fa5]/;
  return reg.test(value.trim())
}


export function dataType (value) {
  return Object.prototype.toString.call(value);
}

export function isArray (value) {
  return dataType(value).slice(8, -1) === "Array";
}

export function isObject(value){
  return dataType(value).slice(8, -1) === "Object";
}