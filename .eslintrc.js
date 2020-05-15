module.exports = {
  // 指定解析器选项
  parserOptions: {
    // 指定解析器
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module"
  },
  // 指定脚本的运行环境
  env: {
    browser: true,
    es6: true,
    node: true
  },
  // 别人可以直接使用你配置好的ESLint
  root: true,
  plugins: ["vue", "html"],
  extends: ["plugin:vue/base"],
  // 启用的规则及其各自的错误级别
  // 每个规则对应的0,1,2分别表示off,warning,error三个错误级别
  rules: {
    // 定义了变量却没有在代码中使用，这是防止产生多余没用的变量
    "no-unused-vars": [
      2,
      {
        vars: "all", // 变量定义必须被使用
        args: "none", // 对于函数形参不检测
        ignoreRestSiblings: true, // 忽略剩余子项 fn(...args)，{a, b, ...coords}
        caughtErrors: "none" // 忽略 catch 语句的参数使用
      }
    ],
    // 缺少分号，行尾必须使用分号，这是为了在压缩代码的时候出现意外情况
    semi: 2,
    // this的别名规则，只允许self和that，防止写成_this或者me等等
    "consistent-this": 2,
    // 禁止使用 console，提醒开发者，上线时要去掉，因为是warning不会导致编译的js出问题
    "no-console": 1,
    // if 后必须包含 { ，单行 if 除外
    curly: [2, "multi-line", "consistent"],
    // switch 语句必须包含 default
    "default-case": 2,
    // 必须使用全等===进行比较，防止隐式转换带来的意外问题
    eqeqeq: [2, "always", { null: "ignore" }],
    // for in时需检测hasOwnProperty，避免遍历到继承来的属性方法
    "guard-for-in": 2,
    // 最大块嵌套不能超过5层
    "max-depth": [2, 5],
    // 函数的形参不能多于8个,如果形参过多，我们现在可以用扩展运算符...来代替后面多余的形参
    "max-params": [1, 8],
    // new关键字后类名应首字母大写，区分类和函数
    "new-cap": [2, { capIsNew: false }],
    // 禁止使用Array构造函数，定义数组直接用最快捷的方式[1, 2, 3]
    "no-array-constructor": 2,
    // 禁止将await写在循环里,循环属于同步操作，不该将await异步操作写在内部
    "no-await-in-loop": 2,
    // 禁止使用arguments.caller和arguments.callee，ES6中废弃了
    "no-caller": 2,
    // 禁止对const定义重新赋值
    "no-const-assign": 2,
    // 禁止对变量使用delete关键字，delete只适用于对象的属性，提醒使用的范围
    "no-delete-var": 2,
    // 函数参数禁止重名
    "no-dupe-args": 2,
    // 禁止空的function,保证写的每一个function都有用
    "no-empty-function": 2,
    // 禁止使用eval，eval是“魔鬼”，所以在开发中避免
    "no-eval": 2,
    // 禁止额外的分号，有些地方没必要加分号比如if () {};这样就是错误的
    "no-extra-semi": 2,
    // 禁止对全局变量赋值
    "no-global-assign": 2,
    // 设置了 setter，必须相应设置 getter
    "accessor-pairs": 2,
    // 数组方括号前后的空格使用规则
    "array-bracket-spacing": 1,
    // 数组的 map、filter、sort 等方法，回调函数必须有返回值
    "array-callback-return": 2,
    // 不能在块外使用块作用域内 var 定义的变量
    "block-scoped-var": 2,
    // 要求箭头函数体使用大括号
    "arrow-body-style": 2,
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": 0,
    // 强制箭头函数的箭头前后使用一致的空格
    "arrow-spacing": 2,
    // 要求在构造函数中有 super() 的调用
    "constructor-super": 2,
    // 代码块花括号前后的空格规则
    "block-spacing": 1,
    // 强制在代码块中使用一致的大括号风格
    "brace-style": 1,
    // 强制使用骆驼拼写法命名约定
    camelcase: 2,
    // class 的非静态方法必须包含 this 关键字
    "class-methods-use-this": 2,
    // 对象的最后一项后面是否写逗号
    "comma-dangle": 2,
    // 逗号前后是否有空格
    "comma-spacing": 1,
    // 逗号写在行首还是行尾
    "comma-style": 0,
    // 禁止函数 if ... else if ... else 的复杂度超过 20
    complexity: 2,
    // this 的别名规则，只允许 self 或 that
    "consistent-this": [2, "self", "that"],
    // 文件最后必须有空行
    "eol-last": 0,
    // for 循环不得因方向错误造成死循环
    "for-direction": 2,
    // getter 必须有返回值，允许返回 undefined
    "getter-return": [2, { allowImplicit: true }],
    // callback 中的 err、error 参数和变量必须被处理
    "handle-callback-err": 2,
    // jsx 语法中，属性的值必须使用双引号
    "jsx-quotes": [2, "prefer-double"],
    // 关键字前后必须有空格
    "keyword-spacing": 2,
    // 限制单个文件最大行数
    "max-lines": [2, { max: 300, skipBlankLines: true, skipComments: true }],
    // 最大回调深度为 3 层
    "max-nested-callbacks": [2, 3],
    // new 关键字后类应包含圆括号
    "new-parens": 2,
    // 禁止 alert，提醒开发者，上线时要去掉
    "no-alert": 1,
    // 禁止在 Node.js 中直接调用 Buffer 构造函数
    "no-buffer-constructor": 2,
    // switch的条件中出现 var、let、const、function、class 等关键字，必须使用花括号把内容括起来
    "no-case-declarations": 2,
    // catch中不得使用已定义的变量名
    "no-catch-shadow": 2,
    // class定义的类名不得与其它变量重名
    "no-class-assign": 2,
    // 禁止与 -0 做比较
    "no-compare-neg-zero": 2,
    // 禁止在 if、for、while 中出现赋值语句，除非用圆括号括起来
    "no-cond-assign": [2, "except-parens"],
    // 禁止出现难以理解的箭头函数，除非用圆括号括起来
    "no-confusing-arrow": [2, { allowParens: true }],
    // 禁止使用常量作为判断条件
    "no-constant-condition": [2, { checkLoops: false }],
    // 禁止 debugger 语句，提醒开发者，上线时要去掉
    "no-debugger": 1,
    // 禁止正则表达式中出现 Ctrl 键的 ASCII 表示，即/\x1f/
    "no-control-regex": 2,
    // 禁止对象出现重名键值
    "no-dupe-keys": 2,
    // 类方法禁止重名
    "no-dupe-class-members": 2,
    // 禁止 switch 中出现相同的 case
    "no-duplicate-case": 2,
    // 禁止重复 import
    "no-duplicate-imports": 2,
    // 禁止出现 if (cond) { return a } else { return b }，应该写为 if (cond) { return a } return b
    "no-else-return": 2,
    // 正则表达式中禁止出现空的字符集[]
    "no-empty-character-class": 2,
    // 禁止解构中出现空 {} 或 []
    "no-empty-pattern": 2,
    // 禁止出现空代码块
    "no-empty": [2, { allowEmptyCatch: true }],
    // 禁止 == 和 != 与 null 做比较，必须用 === 或 !==
    "no-eq-null": 0,
    // 禁止扩展原生对象
    "no-extend-native": [2, { exceptions: ["Array", "Object"] }],
    // 禁止额外的 bind
    "no-extra-bind": 2,
    // 禁止额外的布尔值转换
    "no-extra-boolean-cast": 2,
    // 禁止额外的 label
    "no-extra-label": 2,
    // 禁止额外的括号，仅针对函数体
    "no-extra-parens": [2, "functions"],
    // 每一个 switch 的 case 都需要有 break, return 或 throw
    // 包含注释的情况下允许
    "no-fallthrough": [2, { commentPattern: "." }],
    // 不允许使用 2. 或 .5 来表示数字，需要用 2、2.0、0.5 的格式
    "no-floating-decimal": 2,
    // 禁止对函数声明重新赋值
    "no-func-assign": 2,
    // 禁止对全局变量赋值
    "no-global-assign": 2,
    // 禁止使用隐式类型转换
    "no-implicit-coercion": [2, { allow: ["+", "!!"] }],
    // 禁止在 setTimeout 和 setInterval 中传入字符串，因会触发隐式 eval
    "no-implied-eval": 2,
    // 禁止隐式定义全局变量
    "no-implicit-globals": 2,
    // 禁止在块作用域内使用 var 或函数声明
    "no-inner-declarations": [2, "both"],
    // 禁止使用非法的正则表达式
    "no-invalid-regexp": 2,
    // 禁止使用不规范空格
    "no-irregular-whitespace": [
      2,
      {
        skipStrings: true, // 允许在字符串中使用
        skipComments: true, // 允许在注释中使用
        skipRegExps: true, // 允许在正则表达式中使用
        skipTemplates: true // 允许在模板字符串中使用
      }
    ],
    // 禁止使用无效的块作用域
    "no-lone-blocks": 2,
    // 禁止 else 中只有一个单独的 if
    // @off 单独的 if 可以把逻辑表达的更清楚
    "no-lonely-if": 2,
    // 禁止 for (var i) { function() { use i } }，使用 let 则可以
    "no-loop-func": 2,
    // 禁止使用混合的逻辑判断，必须把不同的逻辑用圆括号括起来
    "no-mixed-operators": [
      2,
      {
        groups: [["&&", "||"]]
      }
    ],
    // 禁止混用空格和 tab 来做缩进，必须统一
    "no-mixed-spaces-and-tabs": 2,
    // 禁止连等赋值
    "no-multi-assign": 2,
    // 禁止使用连续的空格
    "no-multi-spaces": 2,
    // 禁止使用 \ 来定义多行字符串，统一使用模板字符串来做
    "no-multi-str": 2,
    // 连续空行的数量限制
    "no-multiple-empty-lines": [
      2,
      {
        max: 3, // 文件内最多连续 3 个
        maxEOF: 1, // 文件末尾最多连续 1 个
        maxBOF: 1 // 文件头最多连续 1 个
      }
    ],
    // 禁止 new 一个类而不存储该实例
    "no-new": 2,
    // 禁止把原生对象 Math、JSON、Reflect 当函数使用
    "no-obj-calls": 2,
    // 禁止使用八进制转义符
    "no-octal-escape": 2,
    // 禁止使用0开头的数字表示八进制
    "no-octal": 2,
    // 禁止使用 __dirname + 'file' 的形式拼接路径，应该使用 path.join 或 path.resolve 来代替
    "no-path-concat": 2,
    // 禁止对函数的参数重新赋值
    "no-param-reassign": 2,
    // 禁止重复声明
    "no-redeclare": 2,
    // 禁止在正则表达式中出现连续空格
    "no-regex-spaces": 2,
    // 禁止在 return 中使用 await
    "no-return-await": 2,
    // 禁止将自己赋值给自己
    "no-self-assign": 2,
    // 禁止自己与自己作比较
    "no-self-compare": 2,
    // 禁止使用保留字作为变量名
    "no-shadow-restricted-names": 2,
    // 禁止在嵌套作用域中出现重名的定义，如 let a; function b() { let a }
    "no-shadow": 2,
    // 禁止数组中出现连续逗号
    "no-sparse-arrays": 2,
    // 禁止在构造函数的 super 之前使用 this
    "no-this-before-super": 2,
    // 禁止 throw 字面量，必须 throw 一个 Error 对象
    "no-throw-literal": 2,
    // 禁止行尾空格
    "no-trailing-spaces": [
      2,
      {
        skipBlankLines: true, // 不检查空行
        ignoreComments: true // 不检查注释
      }
    ],
    // 禁止将 undefined 赋值给变量
    "no-undef-init": 2,
    // 禁止访问未定义的变量或方法
    "no-undef": 2,
    // 禁止使用 undefined，如需判断一个变量是否为 undefined，请使用 typeof a === 'undefined'
    "no-undefined": 2,
    // 禁止出现难以理解的多行代码
    "no-unexpected-multiline": 2,
    // 禁止不必要的三元表达式
    "no-unneeded-ternary": [2, { defaultAssignment: false }],
    // 禁止出现不安全的否定，如 for (!key in obj} {}，应该写为 for (!(key in obj)} {}
    "no-unsafe-negation": 2,
    // 禁止出现无用的表达式
    "no-unused-expressions": [
      2,
      {
        allowShortCircuit: true, // 允许使用 a() || b 或 a && b()
        allowTernary: true, // 允许在表达式中使用三元运算符
        allowTaggedTemplates: true // 允许标记模板字符串
      }
    ],
    // 禁止在变量被定义之前使用它
    "no-use-before-define": [
      2,
      {
        functions: false, // 允许函数在定义之前被调用
        classes: false // 允许类在定义之前被引用
      }
    ],
    // 禁止不必要的字符串拼接
    "no-useless-concat": 2,
    // 禁止无效的重命名，如 import {a as a} from xxx
    "no-useless-rename": 2,
    // 禁止注释中出现 TODO 或 FIXME，用这个来提醒开发者，写了 TODO 就一定要做完
    "no-warning-comments": 1,
    // 禁止属性前出现空格，如 foo. bar()
    "no-whitespace-before-property": 2,
    // 禁止 with
    "no-with": 2,
    // 禁止 if 语句在没有花括号的情况下换行
    "nonblock-statement-body-position": 2,
    // 必须使用解构 ...args 来代替 arguments
    "prefer-rest-params": 2,
    // ...后面不允许有空格
    "rest-spread-spacing": [2, "never"],
    // 禁止行首出现分号
    "semi-style": [2, "last"],
    // new, delete, typeof, void, yield 等表达式前后必须有空格，-, +, --, ++, !, !! 等表达式前后不许有空格
    "space-unary-ops": [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    // 注释的斜线和星号后要加空格
    "spaced-comment": [
      2,
      "always",
      {
        block: {
          exceptions: ["*"],
          balanced: true
        }
      }
    ],
    // 所有文件头禁止出现 BOM
    "unicode-bom": 2,
    // typeof 判断条件只能是 "undefined", "object", "boolean", "number", "string", "function" 或 "symbol"
    "valid-typeof": 2,
    // 自执行函数必须使用圆括号括起来，如 (function(){do something...})()
    "wrap-iife": [2, "inside"],
    // 禁止Yoda格式的判断条件，如 if (true === a)，应使用 if (a === true)
    yoda: 2
  }
};
