// 表示引入http模块
var http = require('http');
var url = require('url');
/*
    request 获取url传过来的信息
    response 给浏览器相应信息
  */
http.createServer(function (request, response) {
  // 获取浏览器访问的地址 http://127.0.0.1?name=zhangsan&age=20
  console.log(request.url);
  if(request.url != '/favicon.ico'){
    var userinfo = url.parse(request.url, true).query;
    console.log(`姓名：${userinfo.name}--年龄：${userinfo.age}`);
  }
  // 设置响应头
  // 状态码是 200，文件类型 html，字符集 utt-8
  response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8'});
  // 保持浏览器和服务器响应的编码保持一致，否则乱码
  response.write('<head><mate charset="UTF-8" /></head>');
  response.write('你好 nodejs');
  response.write('<h2>你好 nodejs1</h2>');
  // 表示给我们页面上面输出一句话并且结束响应
  response.end('Hello World');
}).listen(8081); // 端口号

console.log('Server running at http://127.0.0.1:8081/');
// 使用 supervisor（全局安装） 代替 node 命令启动应用，监听动态重启服务