
import jwt from 'jsonwebtoken'
import BadRequestError from '../errors/BadRequestError.js';
import UnauthorizedError from '../errors/UnAuthorizedError.js';
//import CustomAPIError from '../errors/CustomAPIError.js';



const auth=(req,res,next)=>{
//console.log(req.header.auhorization);
const authHeader=req.headers.authorization;
if(!authHeader||!authHeader.startsWith("Bearer "))
{
    throw new BadRequestError("No token provided",400);
}
const token=authHeader.split(' ')[1];
//console.log("show my token",token);
try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    const {id,username}=decoded;
    req.user={id,username};
    next();
}
catch(error)
{
    throw new UnauthorizedError("Not authorized to access this route");
}

}
//profile page can be accesed by next
//let say home page profile page cart dashboard
export default auth;