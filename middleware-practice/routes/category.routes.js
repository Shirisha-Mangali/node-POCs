// routes/category.routes.js
import express from 'express';
import {listCategories,getCategory,createCategory,updateCategory,deleteCategory} from  '../controllers/category.controller.js';
import validateCategory from '../middleware/validateCategory.js';

const router=express.Router();

// GET /api/categories?q=search
router.get('/',listCategories);

// POST /api/categories
router.post('/',validateCategory,createCategory);

// GET /api/categories/:id
router.get('/:id',getCategory);

// PUT /api/categories/:id
router.put('/:id',validateCategory,updateCategory);


// DELETE /api/categories/:id
router.delete('/:id',deleteCategory);
export default router;
