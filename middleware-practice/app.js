//app.js
import express from 'express';
//import morgan from 'morgan';
import indexRoutes from './routes/index.js';
import categoryRoutes from './routes/category.routes.js';
import logger from './middleware/logger.js';
import errorHandler  from './middleware/errorHandler.js';

const app=express();
const PORT =process.env.PORT||3000;

app.use(express.json());

//app.use(morgan('dev'));
app.use(logger);

//api mount points
app.use('/api',indexRoutes);//
app.use('/api/categories',categoryRoutes);

//404--It runs only when no previous route matched
app.use((req,res)=>{
    res.status(404).json({success:false,error:'not found'});
})



//err handler
app.use(errorHandler);//next in the controller is handled here ---Because Express recognizes a middleware with 4 arguments as the error handler
/*Express only calls this when:
You throw an error
Or call next(err)
Or an exception occurs inside async handler
*/

app.listen(PORT,()=>{
    console.log(`server listening on http://localhost:${PORT}`);
});