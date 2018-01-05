const router = require('express').Router();
const TaskModel = require('../models/task');
const secret = require('../config/config').secret;

let tasksMock = [
    
    {
        id: '1',
        name: 'köket'
    },
    {
        id: '2',
        name: 'tvätt'
    },
    {
        id: '3',
        name: 'stora-badrummet'
    },
    {
        id: '4',
        name: 'lilla-badrummen'
    },
    {
        id: '5',
        name: 'damsuga'
    }
]

router.get('/', (req,res,next)=>{
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
    TaskModel.createTask(req.body.taskToCreate, (err, task)=>{
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