//数组求差集
Array.prototype.diff=function(a){
	return this.filter(function(i){return a.indexOf(i)<0;});
}