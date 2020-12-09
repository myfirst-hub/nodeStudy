var fs = require('fs');
var Path = require('path');
// 定义一个 isDir 的方法判断一个资源到底时目录还是文件
async function isDir(path){
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if(err){
        console.log(err);
        reject(err);
        return;
      }
      if(stats.isDirectory()){
        resolve(true);
      }else{
        resolve(false);
      }
    })
  })
}

// 获取wwwroot里面的所有资源 循环遍历
function main(){
  var path = Path.resolve(__dirname, 'wwwroot');
  var dirArr = [];
  fs.readdir(path, async (err, data) => {
    if(err){
      console.log(err);
      return;
    }
    for(var i = 0; i < data.length; i++){
      if(await isDir(Path.join(path, data[i]))){
        dirArr.push(data[i]);
      }
    }
    console.log(dirArr);
  })
}

main();