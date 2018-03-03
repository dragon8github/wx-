const fs      = require('fs')
const path    = require('path')
const cheerio = require('cheerio')
const yargs   = require('yargs')

// 最好是使用--来，不然容易导致冲突
const argv    = yargs.alias('n', 'name').alias('p', 'path').alias('o', 'output').argv


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
            var text = fs.readFileSync(filepath, {encoding:'utf-8'});
            getClass(text);
        } else {
            console.log("找不到目标文件");
        }
    } else {
        console.log("你缺少p参数，示例参考：node index.js -p src/index.wxml");
    }
}


function getClass (text) {
    var classArr = [];
    let $ = cheerio.load(text)
    $("[class]").each((index,element) => {
        var className = $(element).attr("class").replace(/\s/g, ".");
        if (!classArr.includes(className)) {
            classArr.push(className)
        }
    })
    renderCss(classArr)
}

function renderCss (arr) {
    var css = ''
    var ocss = '';
    var lcss = '';
    arr.forEach(function (e, i) {
       css += `.${e} {} \n`;
       ocss += `.o-${e} {} \n`;
       lcss += `.l-${e} {} \n`;
    })
    
    console.log(css)
    console.log(ocss)
    console.log(lcss)
}

readfile();