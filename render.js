const fs      = require('fs')
const path    = require('path')
const ejs     = require('ejs')
const extract = require('extract-zip')


// ejs编译
function compile (jspath, obj) {
    var js_str =  fs.readFileSync(jspath, 'utf8')
    const ejs_js_str = ejs.render(js_str, obj)
    var fd = fs.openSync(jspath, 'w')
    fs.writeSync(fd, ejs_js_str)
}

// 人机交互
function readSyncByfs(tips) {
    tips = tips || '> '
    process.stdout.write(tips)
    process.stdin.pause()

    const buf = Buffer.allocUnsafe(10000)
    let response = fs.readSync(process.stdin.fd, buf, 0, 10000, 0)
    process.stdin.end()

    return buf.toString('utf8', 0, response).trim()
}

function renderPages () {
    var files = fs.readdirSync('./src/pages')
    files.forEach(function (f, i) {
       const Path = path.join(__dirname, `src/pages/${f}`);
       var stat = fs.lstatSync(Path);
       if (stat.isDirectory()) {
           _renderPages(Path, f)
       }
    })
}

function _renderPages (Path, f) {
    var filelist =  fs.readdirSync(Path)
    filelist.forEach(function (ff, i) {
        const filePath = path.join(Path, ff);
        var stat = fs.lstatSync(filePath);
        if (!stat.isDirectory() && f.indexOf('template')) {
            compile(filePath, { title: f.toLocaleLowerCase(), name: f.toLocaleLowerCase(), isComponent: false })
            var fix = ff.substr(ff.lastIndexOf('.'));
            var rename = f + fix;
            fs.renameSync(path.join(Path, ff), path.join(Path, rename))
        }
    })
}


function renderComponents () {
    var files = fs.readdirSync('./src/components')
    files.forEach(function (f, i) {
       const Path = path.join(__dirname, `src/components/${f}`);
       var stat = fs.lstatSync(Path);
       if (stat.isDirectory()) {
           _renderComponents(Path, f)
       }
    })
}

function _renderComponents (Path, f) {
    var filelist =  fs.readdirSync(Path)
    filelist.forEach(function (ff, i) {
        const filePath = path.join(Path, ff);
        var stat = fs.lstatSync(filePath);
        if (!stat.isDirectory() && f.indexOf('template')) {
            compile(filePath, { name: f.toLocaleLowerCase(), isComponent: true })
            var fix = ff.substr(ff.lastIndexOf('.'));
            var rename = f + fix;
            fs.renameSync(path.join(Path, ff), path.join(Path, rename))
        }
    })
}

function extractTemplate () {
     // 遍历pages文件夹
     fs.readdir('./src/pages', function (err, pages) {
        pages.forEach(function (ff, i) {
           const Path = path.join(__dirname, `src/pages/${ff}`);
           var stat = fs.lstatSync(Path);
           if (stat.isDirectory()) {
               var fileslist =  fs.readdirSync(Path);
               if (fileslist.length === 0) {
                   extract(path.join(__dirname, 'template/Page.zip'), {dir: Path}, function (err) {
                         // ... 
                        renderPages();
                   });
               }
           }
        })
     });

     // 遍历components
     fs.readdir('./src/components', function (err, components) {
        components.forEach(function (ff, i) {
           const Path = path.join(__dirname, `src/components/${ff}`);
           var stat = fs.lstatSync(Path);
           if (stat.isDirectory()) {
               var fileslist =  fs.readdirSync(Path);
               if (fileslist.length === 0) {
                   extract(path.join(__dirname, 'template/Component.zip'), {dir: Path}, function (err) {
                       // ...
                       renderComponents();
                   });
               }
           }
        })
     });
}

extractTemplate();
renderPages();
renderComponents();

