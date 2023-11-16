const ApiError = require('../utilities/ApiError');
const jwt = require("jsonwebtoken")
const config = require('../config/config')
const debugJwt = require('debug')('app:jwt');


const auth = (req, res, next) =>{
    // load bearer token from header 
    let token = req.header("Authorization")

    // 401 token 
    if(!token){
        return next(ApiError.denyAccess("Not token Provided"))
    }else{
        "Bearer "
        token= token.substring(7, token.length)
        debugJwt(`DEBUG- Returned token: ${token}`);
    }
    // Test whether token is validate
    try {
        const decoded= jwt.verify(token, config.authentication.jwtSecret);
        req.user = decoded;
        debugJwt(`User Credentials verified: ${req.user.username}`);
        next();
        

    } catch (ex) {
        debugJwt(ex)
        return next(ApiError.denyAccess("Invalid token"));
    }
}
    const admin = (req, res, next) =>{
    // 403 ERROR: FORBIDDEN
    // NOTE: Has access to req.user, as auth.js middleware exposes this data to subsequent middleware
    if (!req.user.isAdmin) {
        debugJwt(req.user);
        return next(ApiError.forbidden("Insufficient permissions"));
    }
    debugJwt(`Administrative access granted: ${req.user.isAdmin}`)
    next();
    }


const verfiyAuth ={
    auth,
    admin
}

module.exports =verfiyAuth