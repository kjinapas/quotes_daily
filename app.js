const express = require('express')
const app = express()
const path =require('path')
const axios  = require('axios')

const key_api = require('./public/js/key_api')

app.use('/public',express.static(__dirname +'/public'));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')



app.get('/',async (req,res,next)=>{
    try{
        const quotes_data = await axios.get("https://api.api-ninjas.com/v1/quotes?category=happiness",
        {
           headers: {
               'X-Api-Key': key_api
           }
       })
      // console.log(quotes_data.data)
       res.render('index',quotes_data)

       
    }catch(err){
        console.log('err',err)
    }
})

app.listen(3000,()=>{
    console.log("Connected.....")
})


