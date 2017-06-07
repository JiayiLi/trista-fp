# 尝试函数式编程之jquery类库
> Everyday, it gets a little easier.


### 遗漏知识点记录
*function* getObjKeys：for in 循环需要加上对hasOwnProperty的验证，不然会查找原型链。例子：
``` javascript
var cc = {name:"ll"}
Object.prototype.test1 = function(){}

for(var k in demo){
	console.log(k); // name test
}
```




### 思考
对dom元素进行操作
链式方法
测试用例 
demo
周期
规范（umd）
报错
边缘判断


### 文献资料

学习并参考
https://github.com/cssmagic/blog/issues/56


类库 参考 
zepto
https://www.kancloud.cn/wangfupeng/zepto-design-srouce/173685
http://www.css88.com/doc/zeptojs_api/
