// worker1.js

console.log('hello, I,m worker 1');

importScripts('worker2.js', 'worker3.js');
// 或者
// importScripts('worker2.js');
// importScripts('worker3.js');
