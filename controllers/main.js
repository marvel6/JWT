const {BadRequest} = require('../errors')
const jwt = require('jsonwebtoken')

const login = async(req,res)=>{
  const {username,password} = req.body
   
  if(!username || !password){
    throw new BadRequest('username and password not provided')
  }
   const id = new Date().getDate()
  const Token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

  res.status(200).json({msg:'User Created',Token})
}


const Dashboard = async(req,res)=>{

  const lucky = Math.floor(Math.random() * 100)
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${lucky}`,
  })
       
}



module.exports = {
    Dashboard,
    login,
}