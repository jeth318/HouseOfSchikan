const router = require('express').Router();
const TaskModel = require('../models/task');
const secret = require('../config/config').secret;
console.log('tasks');

router.get('/', (req,res,next)=>{
    console.log('tjena');
    TaskModel.getAllTasks((err, tasks)=>{
        res.json({
            success: err === null,
            err,
            tasks
        });
    });
});

router.get('/:id', (req,res,next)=>{
    TaskModel.getTaskById(req.params.id, (err, task)=>{
        res.json({
            success: err === null,
            err,
            task
        });
    });
});

router.post('/create', (req,res,next)=>{
    console.log('INSIDE CREATE');
    TaskModel.createTask(req.body.taskToCreate, (err, task)=>{
        console.log(req.body);
        res.json({
            success: err === null,
            err,
            task
        });
    });
});

router.put('/update/name', (req,res,next)=>{
    TaskModel.updateTaskName(req.body.taskToUpdate, (err, task) => {
        res.json({
            success: err === null,
            err,
            task
        });
    });
});

router.delete('/delete', (req,res,next)=>{
    TaskModel.deleteTask(req.body.taskToDeleteId, (err,task)=>{
        res.json({
            success: err === null,
            err,
            task
        });  
    });
});

module.exports = router;