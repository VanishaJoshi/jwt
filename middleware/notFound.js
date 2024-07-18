import NotFoundError from "../errors/NotFoundError.js";

const notFound =(req,res)=>{
    throw new NotFoundError("route does not exist");
    //res.send("Route does not exist");
}
export default notFound;

