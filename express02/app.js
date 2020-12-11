/*
1、安装  cnpm install ejs --save

2、app.set("view engine","ejs")

3、使用  (默认加载模板引擎的文件夹是views)
    res.render("index",{

    })

*/

const express = require("express");
const app = express()
//配置模板引擎
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    let title = "你好ejs";
    res.render("index",{
        title:title
    })
})

app.get("/news",(req,res)=>{
    let userinfo={
        username:"张三",
        age:20
    }
    let article="<h3>我是一个h3</h3>"

    let list=["1111","22222","3333333"]

    let newsList=[
        {
            title:"新闻1111",          
        },
        {
            title:"新闻122222",          
        },
        {
            title:"新闻33331",          
        },
        {
            title:"新闻44444",          
        }
    ]

    res.render("news",{
        userinfo:userinfo,
        article:article,
        flag:true,
        score:60,
        list:list,
        newsList:newsList
    })
})


//监听端口  端口号建议写成3000以上
app.listen(3000)