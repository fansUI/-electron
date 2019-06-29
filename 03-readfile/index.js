var fs = require('fs')

let btn = document.querySelector('button')
btn.onclick = ()=>{
    fs.readFile('./package.json','utf8',(err,data)=>{
        if(err){
            return err
        }
        document.querySelector('textarea').innerHTML = data
    })
}