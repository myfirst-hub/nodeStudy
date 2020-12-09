
var fs = require('fs');
var Path = require('path');
/*
1. fs.stat 检测时文件还是目录
2. fs.mkdir 创建目录
3. fs.writeFile 创建写入文件
4. fs.appendFile 追加文件
5. fs.readFile 读取文件
6. fs.readdir 读取目录
7. fs.rename 重命名兼移动文件
8. fs.rmdir 删除目录
9. fs.unlink 删除文件
*/

// 递归实现
var path = Path.resolve(__dirname, 'wwwroot');
var dirArr = [];
fs.readdir(path, (err, data) => {
  if(err){
    console.log(err);
    return
  }
  (function getDir(i){
    console.log(data);
    if(i == data.length){
      console.log(dirArr);
      return;
    }
    fs.stat(Path.join(path, data[i]), (err, stats) => {
      if(stats.isDirectory()){
        dirArr.push(data[i]);
      }
      getDir(++i);
    })
  })(0)
})