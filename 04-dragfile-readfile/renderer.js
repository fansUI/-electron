const fs = require('fs')

let content = document.querySelector('.content')

// 这个默认事件必须阻止下
content.ondragenter = content.ondragover = content.ondragleave = function(){
    return false
}

content.ondrop = function(e){
    // 阻止默认事件
    e.preventDefault()

    // 看下事件对象是个什么鬼东西
    console.log(e)
    console.log(e.dataTransfer.files[0])
    console.log(e.dataTransfer.files[0].path)

    // 拿到拖拽的文件路径
    let filePath = e.dataTransfer.files[0].path

    // 使用node的fs模块读取托拽的文件 && 把文件内容填到div.content中
    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
            return err
        }
        content.innerHTML = data
    })
}