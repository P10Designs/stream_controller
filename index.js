const express = require('express');
const app = express();

const port = process.env.PORT || 3050;

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
  }
}
app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/client/index.html')
})

app.listen(port, ()=>{
  console.log(`App listening on http://localhost:${port}`);
})
