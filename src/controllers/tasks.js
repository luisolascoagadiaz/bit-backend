import TaskModel from '../models/tasks.js'

const TasksController = {
    create: async (req, res) => {
        try {
            const {date, priority, task, state} = req.body;
            const newTask = new TaskModel({
                date: req.body.date,
                priority: req.body.priority,
                task: req.body.task,
                state: req.body.state,
            });
            console.log(newTask);
            const TaskCreated = await newTask.save();
            res.status(201).json({allOK:true, message:'Task created successfully!',  data: TaskCreated});
        }catch (error) {
            res.status(500).json({allOK:false, message:'Error creating Task',  data: error.message});
        }
    },
    readAll: async (req, res) => {
        try {
            const tasks = await TaskModel.find();
            res.status(200).json({allOK:true, message:'All Task retrieved successfully!',  data: tasks});
        } catch (error) {
            res.status(500).json({allOK:false, message:'Error retrieving Task',  data: error.message});
        }
    },
    readOne: async (req, res) => {
        try {
            const {id} = req.params
            const task = await TaskModel.findById(id);
            if(!task){
                res.status(404).json({allOK:false, message:`Task with ID ${id} not found`});
            }
            res.status(200).json({allOK:true, message:`Task with ID ${id} retrieved successfully`, data: task});
        } catch (error) {
            res.status(500).json({allOK:false, message:'Error retrieving Task',  data: null});
        }
    },
    update: async (req, res) => {
        try {
            const {id} = req.params
            const {date, priority, task, state} = req.body
            const taskUpdated = await TaskModel.findByIdAndUpdate(id,{
                date, priority, task, state,
            });
            if(!taskUpdated){
                res.status(404).json({allOK:false, message:`Task with ID ${id} not found`});
            }
            res.status(200).json({allOK:true, message:`Task with ID ${id} updated successfully`, data: taskUpdated});
        } catch (error) {
            res.status(500).json({allOK:false, message:'Error retrieving Task',  data: null});
        }
    },
    delete: async (req, res) => {
       try {
            const {id} = req.params
            const taskDeleted = await TaskModel.findByIdAndDelete(id);
            if(!taskDeleted){
                res.status(404).json({allOK:false, message:`Task with ID ${id} not found`});
            }
            res.status(200).json({allOK:true, message:`Task with ID ${id} deleted successfully`, data: null});
        } catch (error) {
            res.status(500).json({allOK:false, message:'Error retrieving Task',  data: null});
        }
    },
};

export default TasksController;