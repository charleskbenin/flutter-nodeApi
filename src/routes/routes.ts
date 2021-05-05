import express, { request } from 'express';
import {Request, Response} from 'express';
import {Router} from 'express';
import { Todo } from '../model/database_model';
// import { connectDB } from '../database/data';

const router = Router();
// connectDB()
// Posting
router.post("/add",async (req: Request, res: Response)=>{
    const { title, description} = req.body;

    const DataItem = await Todo.create({title, description});

    return res.status(200).json({
        data: DataItem
    })
});

// Get
router.get("/", async(req: Request, res: Response)=>{
    try{
        const dataItem = await Todo.find();

        res.status(200).json({
            data: dataItem
        })
    }catch (error){
        console.log(error);
    }
});

//Delete
router.delete("/delete", async (req: Request, res: Response) => {

    const filter = {
        title: req.body.title
    }
    try {
        const dataItem = await Todo.deleteOne(filter);

        res.status(200).json({
            data: dataItem
        })
    } catch (error) {
        console.log(error);
    }
});

// Update

router.patch("/update", async (req: Request, res: Response) => {
    const filterTitle = {
        title: req.body.title
    }
    const filterDescription = {
        description: req.body.description
    }
    try {
        const dataItem = await Todo.updateOne(filterTitle, filterDescription, {
            new:true
        });

        res.status(200).json({
            data: dataItem
        })
    } catch (error) {
        console.log(error);
    }
});


export { router };

// router.get("/", (req: Request, res: Response)=>{
//     res.send('Hello')
// });

// router.get("/about", (req: Request, res: Response) => {
//     res.json({
//         'title':'Book1'
//     });

// });

// router.post("/", (req: Request, res: Response) => {
//     // const data = {
//     //     "name": "heya"
//     // };

//     const {name, age} = req.body
//     res.json({
//         name,
//         age
//     })

//     console.log(name, age);
// });


