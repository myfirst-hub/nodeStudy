/**
     中间件：就是匹配路由之前和匹配路由之后做的一系列的操作

     中间件可以用来做权限判断：没有登录 跳转到登录页面，登录以后就显示登录以后的页面

     Express 应用可使用如下几种中间件：应用级中间件、路由级中间件(用的比较少)、错误处理中间件、内置中间件、第三方中间件
 */

const express = require("express");
const app = express()

//4、内置中间件
app.use(express.static("static"))

//1、应用级中间件 (用于权限判断)
app.use((req,res,next)=>{
    console.log(new Date())    
    next()
})

app.get("/",(req,res)=>{
    res.send("首页")
})

app.get("/login",(req,res)=>{
    res.send("执行登录")
})

//2、路由级中间件(用的比较少)
app.get("/news/add",(req,res,next)=>{
    // res.send("执行增加新闻")
    console.log("执行增加新闻")
    next()
})

app.get("/news/:id",(req,res)=>{
    res.send("新闻动态路由")
})

//3、错误处理中间件  /css/base.css
app.use((req,res,next)=>{
   res.status(404).send("404")
})

app.listen(3000)