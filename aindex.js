import express from 'express'
// import * as a from './qr.js';
// console.log(a)
// 创建Express应用
const app = express();


// 定义一下假数据，用于验证接口
const users = [
	{ id: 1, name: "刘玄德", role: "大哥" },
	{ id: 2, name: "关云长", role: "二哥" },
	{ id: 3, name: "张翼德", role: "三弟" }
];

// 简单写一个接口
app.get("/", (req, res) => {
	res.send("这是一个Node express简单服务。1");
});


// 简写写一个获取用户的接口
app.get("/user", (req, res) => {
	res.status(200).json({
		code: 200,
		msg: "ok",
		data: users
	});
});


app.get('/qq', async (req, res) => {
    // const qrCode = new QRCodeStyling({
    //     width: 300,
    //     height: 300,
    //     data: "https://example.com",
    //     image: "",
    //     dotsOptions: {
    //         color: "#4267b2",
    //         type: "rounded" // 修改点的样式
    //     },
    //     cornersSquareOptions: {
    //         color: "#4267b2",
    //         type: "extra-rounded" // 修改识别点的样式
    //     },
    //     cornersDotOptions: {
    //         color: "#4267b2",
    //         type: "dot" // 修改识别点中心点的样式
    //     }
    // });

    // const qrCode = new QRCodeCanvas({
    //     data: 'My text or trl',

    //     image: './'
    // });

    const qrCode = new QRCodeCanvas({
        data: 'https://zhuanlan.zhihuhttps://zhuanlan.zhihuhttps://zhuanlan.zhihuhttps://zhuanlan.zhihuhttps://zhuanlan.zhihuhttps://zhuanlan.zhihu',
        width: 1000,
        height: 1000,
        margin:20,
        // hideBackgroundDots:false,
        dotsOptions: {
            color: '#000000a9',
            // whiteColor:"#fff",
            // type: 'dots',
            // dotsSize:10,
            // roundSize:100,
        },
        cornersDotOptions:{
            type:'square'
        },
        cornersSquareOptions:{
            type:'square'
            
        },
        backgroundOptions: {
            color: "#00000000",
        },
        imageOptions: {
            // hideBackgroundDots:false
            // crossOrigin: "anonymous",
            // margin: 40,
        },
        
        // image: './pathToImage'
    });


    //"png" | "jpg" | "jpeg" | "pdf" | "svg"
    //   await qrCode.toFile('output.png', 'png');

    // 
    //   qrCode.getRawData("png").then((buffer) => {
    //     fs.writeFileSync("test.png", buffer);
    //   });
    res.writeHead(200, { 'Content-Type': 'image/png', });
    res.end(await qrCode.toBuffer())

})


// 运行服务器
app.listen(9000, () => {
	console.log("Express Server running at http://127.0.0.1:9000");
});

/**
 * 为了让Vercel将Express转变为无服务器功能，
 * 必须导出Express应用。
 */
module.exports = app;
