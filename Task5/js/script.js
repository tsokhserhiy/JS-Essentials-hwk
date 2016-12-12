//-------------------------------------1-------------------------------------
//a() => 5, typeof a() => number
function a() {
  return 5;
}

console.log(a());
console.log(typeof a());

//-------------------------------------2-------------------------------------
//b(1,15) => 16, b(55,3) => 58, b(-5, -5) => -10, typeof b() => number
function b(a,b) {
  return a+b;
}

console.log(b(55,3));
console.log(typeof b(55,3));

//-------------------------------------3-------------------------------------
//c(2,2) => 4, c(3,3) => 27, c(4,5) => 1024, typeof c() => number
function c(a,b) {
  return Math.pow(a,b);
}

console.log(c(4,5));
console.log(typeof c(4,5));

//-------------------------------------4-------------------------------------
//d(1) => {a:1}, d(123) => {a:123}, typeof d() => object
function d(a){
  return {a:a};
}

console.log(d(123));
console.log(typeof d(123));

//-------------------------------------5-------------------------------------
//e(55)() => 55, e(123)() => 123, typeof e() => function
function e(a){
  return a;
}

console.log(e(55));
console.log(typeof e);

//-------------------------------------6-------------------------------------
//f(1,3) => [1,1,1], f('x',5) => ['x','x','x','x','x'], f(-1,2) => [-1,-1], typeof f() => object (array)
function f(a,b){
  var array = [];
  for (var i = 0; i < b; i++) {
    array.push(a);
  }
  return array;
}

console.log(f(1,3));
console.log(typeof f(1,3));

//-------------------------------------7-------------------------------------
//g() => 99, g(1) => 1, g(2) => 2, g(3) => 3, g(99) => 99, typeof g() => number
function g(){
  return a;
}

console.log(g(a=99));
console.log(typeof g());

//-------------------------------------8-------------------------------------
//h(function(){return 5}) => 5, h(function(){return 123}) => 123, typeof h() => number
function h(a) {
  return a();
}

console.log(h(function(){return 5}));
console.log(typeof h(function(){return 5}));

//-------------------------------------9-------------------------------------
//j([1,2,3]) => 6, j([12,34,56]) => 102, typeof j() => number
function j(array = []) {
  return array[0]+array[1]+array[2];
}

console.log(j(array = [1,2,3]));
console.log(typeof j());

//-------------------------------------10------------------------------------
//k({a:1,b:2,c:3}) => 6, k({n:55,s:82}) => 137, typeof k() => number
function k(obj = {}){
	var sum = 0;
	for (var key in obj){
		sum += obj[key]
	}
	return sum;
}
console.log(k({a:1,b:2,c:3}));
console.log(typeof k());

//-------------------------------------11------------------------------------
//m([1,2,3],[55,12,33]) => [56,14,36], m([2,3],[5,-1]) => [7,2], typeof m() => object (array)
function m(array1 = [], array2 = []){
	var sum = [];
	for (var i = 0; i<array1.length; i++){
		sum[i] = array1[i] + array2[i];
	}
	return sum;
}
console.log(m([43,34,25], [56,23,14]));
console.log(typeof m());

//-------------------------------------12------------------------------------
//n(1)(2)(3) => 6, n(5)(25)(8) => 38, n(3)(-5)(0) => -2, typeof n() => number
function n(a){
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

console.log(n(2)(4)(6));
console.log(typeof n(2)(4)(6));
