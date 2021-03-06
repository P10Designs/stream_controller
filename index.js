const { json } = require('express');
const express = require('express');
const app = express();

const port = process.env.PORT || 3050;

app.use(express.json())


var data={
  tiros:{
    local:{
      p1:0,
      p2:0,
      p3:0,
      total:0
    },
    vistante:{
      p1:0,
      p2:0,
      p3:0,
      total:0
    }
  },
  time:"22:50",
  period:"1er",
  power_play:{
    local:{
      time:"",
    },
    visitor:{
      time:"",
    }
  },
  situtation: "4 v 4",
  saques:{
    local:"",
    visitante:""
  }
}

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/client/index.html')
})

app.get('/json',(req,res)=>{
  res.json([data]);
})

app.post('/update',(req,res) => {
  data = req.body
  res.send('OK')
})

app.get('/v2',(req,res) =>{
  res.sendFile(__dirname+'/v2/index.html')
})

app.get('/felipe',(req,res) =>{
  res.sendFile(__dirname+'/felipe_deja_de_llorar/index.html')
})

app.listen(port, ()=>{
  console.log(`App listening on http://localhost:${port}`);
})
