var worker = new Worker('./worker.js');
// 监听事件
worker.addEventListener('message', function (e) {
  console.log('MAIN: ', 'RECEIVE', e.data);
  console.log(e)
});
// 或者可以使用 onMessage 来监听事件：
// worker.onmessage = function () {
//  console.log('MAIN: ', 'RECEIVE', e.data);
//};


// 监听 error 事件
worker.addEventListener('error', function (e) {
  console.log('MAIN: ', 'ERROR', e);
  console.log('MAIN: ', 'ERROR', 'filename:' + e.filename + '---message:' + e.message + '---lineno:' + e.lineno);
});
// 或者可以使用 onMessage 来监听事件：
// worker.onerror = function () {
//  console.log('MAIN: ', 'ERROR', e);
//};


// 触发事件，传递信息给 Worker
worker.postMessage('Hello Worker, I am main.js');

// worker.terminate();
