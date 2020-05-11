const express=require("express")
const app=express();

const axios=require("axios")
// 解决跨域问题
const cors=require("cors")
app.use(cors())
app.listen(3000)

// 获取top新闻
app.get("/top",(req,res)=>{
	let url="http://v.juhe.cn/toutiao/index/type=top&key=69b0c503777ad084ab679971ce8ada50"
	axios.get(url).then(result=>{
		console.log(result)
	})
})