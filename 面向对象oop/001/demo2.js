




//工厂模式
// function createObject(name, age) {
// 	var obj = new Object();									//创建对象
// 	obj.name = name;											//添加属性
// 	obj.age = age;
// 	obj.run = function () {										//添加方法
// 		return this.name + this.age + '运行中...';
// 	};
// 	return obj;														//返回对象引用
// };
//构造方式
//
// function Desk(name, age) {			//创建一个对象，所有构造函数的对象其实就是Object
// 	this.name = name;					//添加一个属性
// 	this.age = age;			
// 	this.run = function () {			//添加一个方法
// 		return this.name + this.age + '运行中...';
// 	};
// };
// function Desk2(name, age) {			//创建一个对象，所有构造函数的对象其实就是Object
// 	this.name = name;					//添加一个属性
// 	this.age = age;			
// 	this.run = function () {			//添加一个方法
// 		return this.name + this.age + '运行中...';
// 	};
// };


//使用构造函数的方法，即解决了重复实例化的问题，又解决了对象识别的问题，但问题
// 是，这里并没有new Object()，为什么可以实例化Box()，这个是哪里来的呢？
// 使用了构造函数的方法，和使用工厂模式的方法他们不同之处如下：
// 1.构造函数方法没有显示的创建对象(new Object())；但它后台会自动var obj = new Object
// 2.直接将属性和方法赋值给this 对象；//2.this就相当于obj
// 3.没有renturn 语句。3.构造函数不需要返回对象引用，它是后台自动返回的
// 
// // 构造函数的方法有一些规范：
// 1.函数名和实例化构造名相同且大写，(PS：非强制，但这么写有助于区分构造函数和
// 普通函数)；
// 2.通过构造函数创建对象，必须使用new 运算符。
// 
// 既然通过构造函数可以创建对象，那么这个对象是哪里来的，new Object()在什么地方
// 执行了？执行的过程如下：
// 1.当使用了构造函数，并且new 构造函数()，那么就后台执行了new Object()；
// 2.将构造函数的作用域给新对象，(即new Object()创建出的对象)，而函数体内的this 就
// 代表new Object()出来的对象。
// 3.执行构造函数内的代码；
// 4.返回新对象(后台直接返回)。
// 关于this 的使用，this 其实就是代表当前作用域对象的引用。如果在全局范围this 就代
// 表window 对象，如果在构造函数体内，就代表当前的构造函数所声明的对象。

// var box1 = createObject('lee', 100);	//实例化
// var box2 = new Desk('Jack', 200);	//实例化
// var box3 = new Desk2('kkk', 500);	//实例化
// var box4= createObject("ccc",111);
// console.log(box1.run());
// console.log(box2.run());
// console.log(box3.run());
// console.log(box4.run());
// console.log(box1 instanceof Object);
// console.log(box1 instanceof createObject);
// console.log(box2 instanceof Desk);
// console.log(box3 instanceof Desk2);			//可以识别了，因为box3是Desk对象的引用
// console.log(box1 instanceof Desk);			//可以识别

// var box1 = new Box('Lee', 100);		//实例化
// alert(box1.run());

// var user = 'bbb';
// alert(this.user);							//window,name变量比较特殊

// function box() {  //普通函数，首字母无须大写

// }


// alert(Box('Lee', 100));					//构造函数，用普通函数调用一般是无效的，必须使用new运算符
// function Desk2(name, age) {			//创建一个对象，所有构造函数的对象其实就是Object
// 	this.name = name;					//添加一个属性
// 	this.age = age;			
// 	this.run = function () {			//添加一个方法
// 		return this.name + this.age + '运行中...';
// 	};
// };
// var o = new Object();
// Desk2.call(o, 'Lee', 100);					//对象冒充
// alert(o.run());

// function Box(name, age) {			//创建一个对象，所有构造函数的对象其实就是Object
// 	this.name = name;					//添加一个属性
// 	this.age = age;			
// 	this.run = function () {			//添加一个方法
// 		return this.name + this.age + '运行中...';
// 	};
// };
// var box1= new Box('lee',100);//实例化后地址为1
// var box2= new Box('lee',100);//实例化后地址为2


// // alert(box1.name == box2.name);
// // alert(box1.age == box2.age);
// // alert(box1.run() == box1.run());	// 构造函数体内的方法的值是相当的
// alert(box1.run == box2.run);
// //因为他们比较的是引用地址，false

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
function Box(name, age) {			//创建一个对象，所有构造函数的对象其实就是Object
	this.name = name;					//添加一个属性
	this.age = age;			
	this.run = run;
};
function run() {	//把构造函数内部的方法通过全局来实现引用地址一致

		return this.name + this.age + '运行中...';
	};
var box1= new Box('lee',100);//实例化后地址为1
var box2= new Box('lee',100);//实例化后地址为2

alert(box1.run() == box2.run());	// 
alert(box1.run == box2.run);
// //值跟
//////////////////////////////////////////////////////////////////

// //构造函数
// function Box(user, age) {			//创建一个对象，所有构造函数的对象其实就是Object
// 	this.user = user;					//添加一个属性
// 	this.age = age;			
// 	this.run = run;
// };


// function run() {							//把构造函数内部的方法通过全局来实现引用地址一致
// 	return this.user + this.age + '运行中...';
// }


// var box1 = new Box('Lee', 100);	//实例化后地址为1
// var box2 = new Box('Lee', 100);  //实例化后地址为2
// //alert(box1.run == box2.run);			//
// alert(box1.run());
// alert(run());






