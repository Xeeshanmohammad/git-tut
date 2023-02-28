
const express =  require('express')
const app = express()

console.log('Git command');

app.get((req,res)=>{
    res.send('Git Command')
})

app.listen(2525)