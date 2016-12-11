//example answer: function () { return 5; }
//g() => 99, g(1) => 1, g(2) => 2, g(3) => 3, g(99) => 99, typeof g() => number
//h(function(){return 5}) => 5, h(function(){return 123}) => 123, typeof h() => number
//j([1,2,3]) => 6, j([12,34,56]) => 102, typeof j() => number
//k({a:1,b:2,c:3}) => 6, k({n:55,s:82}) => 137, typeof k() => number
//m([1,2,3],[55,12,33]) => [56,14,36], m([2,3],[5,-1]) => [7,2], typeof m() => object (array)
//n(1)(2)(3) => 6, n(5)(25)(8) => 38, n(3)(-5)(0) => -2, typeof n() => number

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
function e(){
  return 55;
}

console.log(e());
console.log(typeof e);

//-------------------------------------6-------------------------------------
//f(1,3) => [1,1,1], f('x',5) => ['x','x','x','x','x'], f(-1,2) => [-1,-1], typeof f() => object (array)
function f(){
  return 55;
}

console.log(e());
console.log(typeof e);
