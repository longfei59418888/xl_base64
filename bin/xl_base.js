#!/usr/bin/env node

const path = require('path');
var base64Img = require('base64-img');

// 如果存在本地的命令，执行本地的
try {
    var localWebpack = require.resolve(path.join(process.cwd(), "node_modules", "xl_base64", "bin", "xl_base.js"));
    if (__filename !== localWebpack) {
        return require(localWebpack);
    }
} catch (e) {
}
base64Img.base64(process.argv[2], function(err, data) {
    console.log(data)
})
