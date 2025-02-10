import express from 'express'
// import a from 'qr-code-styling';
// import { QRCodeCanvas } from '@loskir/styled-qr-code-node';
import { QRCodeCanvas } from './qr.js';


const app = express()

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

app.get('/', async (req, res) => {
    res.send('Hello World')

    // const qrCodeImageUrl = await qrcode.toBuffer(
    //     'https://mp.weixin.qq.com/',
    //     {
    //         // type:'image/png',
    //         margin: 1,
    //         scale: 10,
    //         color: {
    //             dark: '#0000006c',
    //             light: '#00000000'
    //         }
    //     }
    // );
    // const qr_png = qr.imageSync('https://example.com', { type: 'png' });
    // // res.status(200).json({ qrCodeImageUrl });
    // // const imageData = qrCodeImageUrl.replace(/^data:image\/png;base64,/, "");
    // // const buffer = Buffer.from(imageData, 'base64');

    // res.writeHead(200, { 'Content-Type': 'image/png' });
    // res.end(qr_png);
    // res.type('png');
    // res.write(qrCodeImageUrl);
    // res.end()
    // res.send(qrCodeImageUrl.replace('data:image/png;base64,', ''));
    // res.sendFile()
    // var temp_qrcode = qr.image(
    //     'http://www.baidu.com',
    //     {

    //     }
    // );
    // res.type('png');

    // temp_qrcode.pipe(res);
})

// app.listen(9000, () => console.log('启动成功'))


module.exports = app