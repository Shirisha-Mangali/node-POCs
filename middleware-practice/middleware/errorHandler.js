export default function errorHandler(err,req,res,next){
    console.log(err);
    const status=err.status||500;
    const payload={
        success:false,
        error:err.message||'internal server err'
    };
    //if(process.env.)
    res.status(status).json(payload);
}