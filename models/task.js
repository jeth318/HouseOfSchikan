let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TaskSchema = new Schema({
    _id: {type: String, required: true},
    name: {type: String, required: true}
});

TaskSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.hashedPassword;
    delete obj.__v;
    delete obj.salt;
    return obj;
};

TaskSchema.virtual('id')
    .get(function () {
        return this._id;
});

const TaskModel = module.exports = mongoose.model('Task', TaskSchema);

module.exports.getTaskById = function(id, callback){
    TaskModel.findById(id, callback);
}

module.exports.getAllTasks = function(callback){
    TaskModel.find().sort('priority').exec(callback);
}

module.exports.createTask = function(taskToCreate, callback){
    TaskModel.create(taskToCreate, callback);
}

module.exports.updateTaskName = function(taskToUpdate, callback){
    TaskModel.findById(taskToUpdate._id, (err, task) => {
        if(err) {
            callback(err);
        }
        else if(!task) {
            callback(taskNotFoundError);
        }
        else {
            task.name = taskToUpdate.name;
            task.save(callback);
        }
    });
}

module.exports.deleteTask = function(id, callback){
    TaskModel.findByIdAndRemove(id, callback);
};

