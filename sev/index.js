const express =  require("express")
const app =  express()
const bodyParser = require('body-parser')
const axios = require('axios')
require('dotenv').config()

app.use(bodyParser.urlencoded({ limit:"50mb",extended: false }))
app.use(bodyParser.json({limit: "50mb"}))
const clientId = process.env.API_ClientId
const accessToken = process.env.API_AccessToken

// console.log(clientId,'yooo')

app.get('/', (req, res) => res.send('Hello World!'))
app.post('/upload', (req, res) =>{
//post to imgur API
//need image
//need album name noir
//title str
//type?
  let data = req.body.file

  axios.post('api.imgur.com/3/image',data,{
    headers: `Authorization: Client-ID ${clientId}`,
    name:'test'
  }).then((resp)=>{
    console.log(resp,'resp')
  }).catch((err)=>{
    console.log(err,'err')
  })


// console.log(req.body,'req body<<<<<<<')

})




app.listen(3000,()=>console.log('good things happen on port 3000'))
