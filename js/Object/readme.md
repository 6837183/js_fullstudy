1. 目前对对象的认知
2. 对象属性的增 删 改 查
3. 对象的创建方法
    - 字面量
    - 构造函数
      1）系统自带的构造函数 object（）
      2） 自定义

# 构造函数的内部原理  2.js
1. 在函数体最前面隐式加上一个 this = {}
2. 执行this.xxx = xxx
3. 隐式的返回这个this
(构造函数中显示的return对象，会干扰原隐士的return值)


# 包装类  3.js

1. 原始值是没有属性和方法的，属性和方法只有对象才有，这是对象独有的