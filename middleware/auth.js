const {UnauthenticatedError} = require('../errors')
const jwt = require('jsonwebtoken')

const authenticate = async(req,res,next)=>{
    const authHeader = req.headers.authorization

    const token = authHeader.split(' ')[1]

    if(!authHeader || !authHeader.startsWith('Bearer ')){
      throw new UnauthenticatedError('No token provided')
    }
  
  
     try {
      const tokens = jwt.verify(token,process.env.JWT_SECRET)
      const {id,username} = tokens
       req.user = {id,username}
      next()
      
     } catch (error) {
      throw new UnauthenticatedError('not authorized to access this route')
     }
     
}


module.exports = authenticate