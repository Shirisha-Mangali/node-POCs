// middleware/validateCategory.js
export default function validateCategory(req,res,next){
    const {name}=req.body;
    if(!name||typeof name!='string'||!name.trim()){
        return next({status:400,message:'name is required must not be empty'})

    }
    if(name.length>30){
        return next({status:400,message:'name too long max:30'});
    }
    req.body.name=name.trim();
    next();
}