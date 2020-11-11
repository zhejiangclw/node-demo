/**
 * 本篇主要实现不同路径的访问，以及渲染内容
 * */
// 正常项目一般会有多个路由，渲染不同的数据，这次我们就来实现整个功能。
const http = require('http');
// url模块是处理url的，因为url中包含协议，端开，网址，参数等等，node设置了专门url模块来处理
const url = require('url');

http.createServer((req, res) => {
    // url的具体方法看官网，常用的有url.parse()：将一串url地址解析成一个对象，里面包含port，protocol，query，search，pathname等等，
    const urlParam = url.parse(req.url);

    // Content-type：设置内容格式，text/plain是文本格式，text/html是html格式，image/png是图片png格式
    // charset是设置编码格式，常用utf-8，这样中文不会乱码
    res.writeHead(200, {
        "Content-type": "text/html;charset=utf-8"
    });

    if (urlParam.pathname === '/') {
        res.write('首页');
    } else if (urlParam.pathname === '/login') {
        res.write('登录页');
    } else if (urlParam.pathname === '/uploadText') {
        res.write('上传文本');
    } else if (urlParam.pathname === '/uploadImg') {
        res.write('上传图片');
    } else if (urlParam.pathname === '/uploadForm') {
        res.write('上传表单');
    } else if (urlParam.pathname === '/show') {
        res.write('展示数据');
    } else {
        res.write('其他')
    }
    res.end();
}).listen(9000);

