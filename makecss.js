// 读取指定文件的文本(wxml文件)
// 正则表达式获取所有的class数组，不可重复，可以试试new Set，或者先获取再去重
// 然后转换成css代码。


const fs      = require('fs')
const path    = require('path')
const cheerio  = require('cheerio')

function readfile() {
    var filepath = path.join(__dirname, 'src/pages/my/my.wxml');
    var text = fs.readFileSync(filepath, {encoding:'utf-8'});
    getClass(text);
}


function getClass (text) {
    var classArr = [];
    let $ = cheerio.load(text)
    $(".My [class]").each((index,element) => {
        var className = $(element).attr("class");
        if (!classArr.includes(className)) {
            classArr.push(className)
        }
    })
    renderCss(classArr)
}

function renderCss (arr) {
    var css = '';
    arr.forEach(function (e, i) {
       css += `.${e} {} \n`;
    })
    console.log(css)
}

readfile();