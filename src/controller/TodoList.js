import { Todo } from "../model/Todo"
import { CheckTodoDuplicate } from './../utils/CheckDuplicates';



export const CreateToDo = async (req,res) => {
    try {
        let todoname = req.body.todo === "" ? null : req.body.todo
        let todostatus = req.body.status === "" ? null : req.body.status
        let tododescription = req.body.description === "" ? null : req.body.description

        if(await CheckTodoDuplicate(todoname,todostatus,tododescription)){
            res.status(201).send({
                message:"Duplicate found!",
                status:"error"
            })
        }else{
            if(todoname !== null && tododescription !== null){
        
                let todo = await Todo.create({name:todoname,status:todostatus,description:tododescription})
                let list = await Todo.findAll({where : { is_deleted:0}});

                res.status(200).send({message:"Successfully added", status:"ok", data:list})

            }else{
                res.status(201).send({
                    message:"All fields are required",
                    status:"error"
                })
            }
        }


    } catch (error) {
        res.status(500).send({
            message:error,
            status:"error"
        })
    }
}

export const GetAllToDo = async (req,res) => {
    try {

        let list = await Todo.findAll({where : { is_deleted:0}});
        res.status(200).send({message:"Successfully added", status:"ok", data:list})

    } catch (error) {
        res.status(500).send({
            message:"something went wrong",
            status:"error"
        })
    }
}

export const UpdateToDo = async (req,res) => {
    try {
        let todoname = req.body.todo  === "" ? null : req.body.todo
        let tododescription = req.body.description === "" ? null : req.body.description
        let todostatus = req.body.status  === "" ? null : req.body.status
        let todoDateCompleted = req.body.completedDate  === "" ? null : req.body.completedDate
        let entryId = req.body.id


        if(await CheckTodoDuplicate(todoname,todostatus,tododescription)){
            res.status(201).send({
                message:"Duplicate found!",
                status:"error"
            })

        }else{
            if(todoname !== null && tododescription !== null){
                let todo = await Todo.update({
                    name:todoname,
                    status:todostatus,
                    date_completed:todoDateCompleted
                },
                {
                    where:{
                        id:entryId
                    }
                });
                let list = await Todo.findAll({where : { is_deleted:0}});
                res.status(200).send({message:"Successfully added", status:"ok", data:list})
            }else{
                res.status(201).send({
                    message:"All fields are required",
                    status:"error"
                })
            }
        }
    } catch (error) {
        res.status(500).send({
            message:"something went wrong",
            status:"error"
        })
    }
}

export const DeleteToDo = async (req,res) => {
    try {
        let todoname = req.body.todo
        let todostatus = req.body.status
        let tododescription = req.body.description
        let entryId = req.body.id
        let todo = await Todo.update({
            name:todoname === null ? "" : todoname,
            status: todostatus === null ? "" : todostatus,
            description: tododescription === null ? "" : tododescription,
            is_deleted:1
        },
        {
            where:{
                id:entryId
            }
        });
        let list = await Todo.findAll({where : { is_deleted:0}});
        await Todo.findAll({where : { is_deleted:0}});
        res.status(200).send({message:"Successfully added", status:"ok", data:list})

    } catch (error) {
        res.status(500).send({
            message:"something went wrong",
            status:"error"
        })
    }
}