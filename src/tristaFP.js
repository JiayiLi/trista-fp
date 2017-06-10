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
		// concat = Array.prototype.concat,
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

	// 获取obj对象 value 集合
	function getObjValues(obj){
		if(!obj){
			throw "function:getValue need 1 param"
		}

		var valArr = [];
		for(var key in obj){
			if(hasKey(obj,key)){
				valArr.push(obj[key]);
			}
		}

		return valArr;
	}

	function cb (cb,target){
		if(!target){
			return cb;
		}

		var typeCb = type(cb);

		if(typeCb === "Function"){
			return optimizeCb(cb,target);
		}
	}

	function optimizeCb(cb,target){
		if(!target){
			return cb;
		}	

		return function(value,index){
			return cb.call(target,value,index)
		}
	}


	tristaFP.each = function(target,func){
		if(!target){
			return [];
		}
		var result = cb(func,target);

		for(var i = 0;i<target.length;i++){
			result(target[i],i);
		}
		console.log(result);
	} 




	// test
	tristaFP.type = type;
	tristaFP.isArrayLike = isArrayLike;

	return  tristaFP;
})