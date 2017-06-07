(function(root,factory){
	if(typeof define === "function" && define.amd){
		define(factory)
	}else if(typeof exports === "object"){
		module.exports = factory();
	}else {
		root.tristaFP = factory();
	}	
})(this,function(){

 	var ArrayProto = Array.prototype,
 		ObjectProto = Object.prototype;

	var slice = Array.prototype.slice,
		concat = Array.prototype.concat,
		push = Array.prototype.push,
		toString = Object.prototype.toString,
		hasOwnProperty =  Object .prototype.hasOwnProperty;

	var tristaFP = {};

	// 判断类型
	function type(obj){
		if(!obj){
			throw "function:type need 1 param";
		}

		return toString.apply(obj).split(' ')[1].split(']')[0];
	}

	function isArrayLike(obj){
		if(!obj){
			throw "function:isArrayLike need 1 param";
		}
		var length = "length" in obj && obj.length;
		return typeof length == 'number' && length >0  && (length-1) in obj;
	}

	function toArray(obj){
		// 如果obj没有内容
		if(!obj){
			throw "function:toArray need 1 param";
		}

		//如果obj是数组
		if(obj && obj.length){
			return obj
		}else {
			var allKeysArr = getObjKeys(obj);

			// 如果obj有length属性
			if(obj.length){

			}else{
				obj.length = allKeysArr.length;
				return obj;
			}
		}

		// 如果是对象
		
	}

	// 获取对象的 keys
	function getObjKeys(obj){
		if(!obj){
			throw "function:getObjKeys need 1 param";
		}

		var keysArr = [];
		for(var k in obj){
			if(hasKey(obj,k)){
				keysArr.push(k);
			}
		}

		return keysArr;
	}

	// 判断 obj 中是否存在某个 key
	function hasKey(obj,key){
		return obj != null && hasOwnProperty.call(obj, key);
	}


	// test
	tristaFP.toArray = toArray;
	tristaFP.isArrayLike = isArrayLike;

	return  tristaFP;
})