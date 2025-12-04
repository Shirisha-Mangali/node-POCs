// controllers/category.controller.js
import { readDB,writeDB ,generateID} from "../utils/db.js";

export async function listCategories(req,res,next) {
    try{
        const db=await readDB();
        const q=(req.query.q||'').toLowerCase().trim();
        let categories=db.categories||[];
        if(q){
            categories=categories.filter(c=>c.name.toLowerCase().includes(q));
        }
        res.json({success:true,data:categories});
    }
    catch(err){
        next(err);
    }
}

export async function getCategory(req,res,next) {
    try{
        const db=await readDB();
        const cat=db.categories.find(c=>c.id===req.params.id);
        if(!cat)return next({status:404,message:'cat not found'});
        res.json({success:true,data:cat});
    }catch(err){next(err);}   
}

export async function createCategory(req,res,next) {
    try{
        const {name}=req.body;
        const db=await readDB();
        // unique name check (case-insensitive)
    const exists = db.categories.some(c => c.name.toLowerCase() === name.toLowerCase());
    if (exists) return next({ status: 400, message: 'Category already exists' });
    const newCat={id:generateID('cat_'),name:name.trim()};
    db.categories.push(newCat);
    await writeDB(db);
        res.status(201).json({success:true,data:newCat});
    }catch(err){
        next(err);
    }
}

export async function updateCategory(req, res, next) {
  try {
    const { name } = req.body;
    const db = await readDB();
    const idx = db.categories.findIndex(c => c.id === req.params.id);
    if (idx === -1) return next({ status: 404, message: 'Category not found' });

    // unique name check excluding current category
    const exists = db.categories.some((c, i) => i !== idx && c.name.toLowerCase() === name.toLowerCase());
    if (exists) return next({ status: 400, message: 'Another category with this name exists' });

    db.categories[idx].name = name.trim();
    await writeDB(db);
    res.json({ success: true, data: db.categories[idx] });
  } catch (err) {
    next(err);
  }
}

export async function deleteCategory(req, res, next) {
  try {
    const db = await readDB();
    const idx = db.categories.findIndex(c => c.id === req.params.id);
    if (idx === -1) return next({ status: 404, message: 'Category not found' });

    // Prevent deletion if products reference this category
    const productsUsing = db.products.some(p => p.categoryId === req.params.id);
    if (productsUsing) return next({ status: 400, message: 'Cannot delete category: products reference it' });

    const removed = db.categories.splice(idx, 1)[0];
    await writeDB(db);
    res.json({ success: true, data: removed });
  } catch (err) {
    next(err);
  }
}