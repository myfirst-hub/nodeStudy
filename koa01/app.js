/**
 * Created by Administrator on 2018/3/12 0012.
 */

 /*
 koa是由express原班人马打造的，致力于成为一个更小，更富有表现力，更健壮的web框架。
 使用koa编写web应用，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。
 koa不在内核方法中绑定任何的中间件，它仅仅提供了一个轻量优雅的函数库，使得编写web应用
 变得得心应手。开发思路和express差不多，最大的特点就是可以避免异步嵌套。
 */

var koa =require('koa');
var app=new koa();

//配置路由

//中间件

//express写法
//app.use(function(req,res){
//
//    res.send('返回数据')
//})


app.use( async (ctx)=>{
     ctx.body='你好 koa2.x';
})

app.listen(3000);




