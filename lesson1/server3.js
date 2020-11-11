/**
 * 本篇主要实现不同路径的访问，以及渲染内容
 * */
const http = require('http');
const url = require('url');
// querystring模块主要是解析url问号后面的参数：a=1&b=2&c=3
const querystring = require('querystring');

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
        res.end();
    } else if (urlParam.pathname === '/login') {
        res.write('登录页');
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Login</title>
            </head>
            <body>
            <form action="/show">
                用户名：<input type="text" name="username">
                密码：<input type="password" name="password">
                <button>登录</button>
            </form>
            </body>
            </html>
        `);
        res.end();
    } else if (urlParam.pathname === '/uploadText') {
        res.write('上传文本');
    } else if (urlParam.pathname === '/uploadImg') {
        res.write('上传图片');
    } else if (urlParam.pathname === '/uploadForm') {
        res.write('上传表单');
    } else if (urlParam.pathname === '/show') {
        res.write('展示数据');
        res.write('<br/>');
        if (res.method.toLowerCase() === 'get') {
            console.log(1);
            res.write(querystring.parse(urlParam.query));
            res.end()
        } else if (res.method.toLowerCase() === 'post') {

        }
        res.write('<br/>');
    } else {
        res.write('其他');
    }
}).listen(9000);

