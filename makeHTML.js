const fs      = require('fs')
const path    = require('path')
const cheerio = require('cheerio')
const yargs   = require('yargs')

// 最好是使用--来，不然容易导致冲突
const argv    = yargs.alias('n', 'name').alias('p', 'path').alias('o', 'output').alias('h', 'html').argv


function isDir(Path) {
   var stat = fs.lstatSync(Path);
   if (stat.isDirectory()) {
        return true;
   }
   return false;
}


function readfile() {
    if (argv.p) {
        var filepath = argv.p;
        if (!isDir(filepath)) {
            var text = fs.readFileSync(filepath, { encoding:'utf-8' });
            setClass(text);
        } else {
            console.log("找不到目标文件");
        }
    } else {
        console.log("你缺少p参数，示例参考：node index.js -p src/index.wxml");
    }
}

function setClass(text) {
    let $ = cheerio.load(text, {decodeEntities: false})
    $("[class]").each((index, element) => {
        var className = $(element).attr("class").replace(/\s/g, ".");
        $(element).removeClass(className);
        var newClass = `o-${className} l-${className}`;
        $(element).addClass(newClass);
    })
    var html = $('*').remove('head').html();
    html = html.replace(/<body>|<\/body>/ig, '');
    // TODO: image会变成img而且去掉了</img>需要给他加上才行
    console.log(html);
}

readfile();