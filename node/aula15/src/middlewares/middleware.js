exports.middlewareGlobal = (req,res,next) => {
    console.log('sou o middlewareGlobal');
    next();
}