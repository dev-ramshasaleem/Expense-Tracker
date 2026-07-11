import { Router } from "express";

const router = Router();

router.get('/',(req,res)=>{
    res.json({message: "Expense Routes"})
})


export default router;