//数组顺序扰乱
function shuffle(array){
	var copy=[];
		n=array.length;
		i;
	while(n){
		i=Math.floor(Math.random()*array.length);
		if (i in array){
			copy.push(array[i]);
			delete array[i];
			n--;
		}
	}
}