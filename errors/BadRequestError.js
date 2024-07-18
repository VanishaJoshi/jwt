import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./CustomAPIError.js";

class BadRequestError extends CustomAPIError{
    constructor(message)
    {
        super(message);
        this.statusCode=StatusCodes.BAD_REQUEST;
    }
}
export default BadRequestError;
//401-badrequest
//404-not found
//400-unauthorized