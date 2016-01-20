// js继承
// 1.对象冒充
fucntion Parent(username){
	this.username=username;
	this.hello=function(){
		alert(this.username);
	}
}
function Child(username,password){
	this.method=Parent;
	this.method(username);
	delete this.method;

	this.password=password;
	this.world=function(){
		alert(this.password);
	}
}
var parent=new Parent("zhangsan");
var child= new Child("lisi","123456");
parent.hello();
child.hello();
child.world();
// 2.call()方法
function test(str){
	alert(this.name+""+str);
}
var object=new Object();
object.name="zhangsan";
test.call(object,"langsin");

function Parent(username){
	this.username=username;
	this.hello=function(){
		alert(this.username);
	}
}
function Child(username,password){
	Parent.call(this.username);

	this.password=password;
	this.world=function(){
		alert(this.password);
	}
}
var parent=new Parent("zhangsan");
var child=new Child("lisi","123456");
parent.hello();
child.hello();
child.world();
//3. apply()方法
function Parent(username){
	this.username=username;
	this.hello=function(){
		alert(this.username);
	}
}
function Child(username,password){
	Parent.apply(this.new Array(username));

	this.password=password;
	this.world=function(){
		alert(this.password);
	}
}
var parent=new Parent("zhangsan");
var child=new Child("lisi","123456");
parent.hello();
child.hello();
child.world();
//4.原型链方式
function Person(){
	Person.prototype.sayHello=function(){
		alert(this.hello);
	}
}
function Child(){
	Child.prototype=new Person();
	Child.prototype.world="world";
	Child.prototype.sayWorld=function(){
		alert(this.world);
	}
}
var c=new Child();
c.sayHello();
c.sayWorld();
//5.混合方式（混合了call方式，原型链方式）
function Parent(hello){
	this.hello=hello;
}
Parent.prototype.sayHello=function(){
	alert(this.hello);
}
function Child(hello,world){
	Parent.call(this.hello);
	this.world=world;
}
Child.prototype=new Parent();
Child.prototype.sayWorld=function(){
	alert(this.world);
}
var c=new Child("zhangsan","lisi");
c.sayHello();
c.sayWorld();