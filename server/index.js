const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;


//value of users

let users = [
    {
        id:1,
        name:'Dulal Miah',
        email:'dulal@gmail.com'
    }
    ,
    {
        id:2,
        name:'Shohan',
        email:'sohan@gmail.com'
    }
    ,
    {
        id:3,
        name:'ismail',
        email:'ismail@gmail.com'

    }
]

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!Tor khobor ace ami aytachi ')
});

app.get('/users' , (req , res)=>{

    res.send(users);
});


app.post('/addUser' , (req , res)=>{

    const user = req.body;
    user.id = users.length+1;
    users.push(user);
    res.send(user);
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});