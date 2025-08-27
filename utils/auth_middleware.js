const auth_middleware = (req,res,next)=>{
    try {
        next()
    } catch (error) {
        res.status(401).send("Invalid Authorization")
    }
}

module.exports = auth_middleware