/**
 https://www.npmjs.com/package/koa-router

 1.安装模块

 2.看文档使用

 */

 /*
 路由是由一个URL（或者叫路径）和一个特定的HTTP方法（GET,POST等）组成的，涉及到应用如何响应客户端对某个网站节点的访问。
通俗地讲：路由就是根据不同的URL地址，加载不同的页面实现不同的功能。
 */

//引入 koa模块

var Koa=require('koa');

var router = require('koa-router')();  /*引入是实例化路由** 推荐*/

//实例化
var app=new Koa();

//ctx 上下文 context，包含了 request 和 response 等信息
router.get('/',async (ctx)=>{
    ctx.body="首页"; // 返回数据， 相当于原生的res.writeHead()  res.end()

})

router.get('/news',async (ctx)=>{
    ctx.body="新闻列表页面";

})
//动态路由  http://localhost:3002/newscontent/xxxx
router.get('/newscontent/:aid',async (ctx)=>{

    //获取动态路由的传值

    console.log(ctx.params);  //{ aid: '456' }

    ctx.body="新闻详情";

})
//动态路由里面可以传入多个值

//http://localhost:3002/package/123/456

router.get('/package/:aid/:cid',async (ctx)=>{

    //获取动态路由的传值

    console.log(ctx.params);  //{ aid: '123', cid: '456' }

    ctx.body="新闻详情";

})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods()); //可以配置也可以不配置，建议配置
/*
router.allowedMethods()作用：这是官方的推荐用法，我们可以看到router.allowedMethods()
用在了路由匹配router.routes()之后，所以在所有路由中间件最后调用，此时根据ctx.status设置response响应头
*/

app.listen(3000);







