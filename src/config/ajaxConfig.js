import { environ } from "@/utils";

const axajConfig = {
  development: {
    _urlPrefixes: "http://www.baidu.com"
  },
  production: {
    _urlPrefixes: ""
  }
};

export default axajConfig[environ];
