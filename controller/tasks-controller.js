const Task = require('../Models/tasks-Models')
const asyncWrapper = require("../middleware/async")


// Get All tasks
const getAllTasks =  asyncWrapper( async (req,res)=>{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
   
})

// Create tasks
const createTasks = asyncWrapper( async (req,res)=>{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    
})

// Get Single Tasks
const getTasks = asyncWrapper( async (req,res)=>{
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task){
        return res.status(404).json({message:`message:'No task with Id : ${taskID}`})
    }
    res.status(200).json({task})
   
})


// Update Tasks
const updateTasks =asyncWrapper( async (req,res)=>{
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({message:`message:'No task with Id : ${taskID}`})
        }
        res.status(200).json({task})
   
})


// Detele task
const deleteTasks = asyncWrapper( async (req,res)=>{
  
      const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task){
        return res.status(404).json({message:`message:'No task with Id : ${taskID}`})
    }
    res.status(200).json({task})
    //res.status(200).send()
    //res.status(200).json({task:null,status:'success'})
})


module.exports ={
    getAllTasks,updateTasks,getTasks,deleteTasks,createTasks
}