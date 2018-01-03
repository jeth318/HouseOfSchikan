let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userNotFoundError = new Error();
userNotFoundError.title = "userNotFoundError";
userNotFoundError.message = "Member found not found";

let MemberSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true}
});

MemberSchema.methods.toJSON = function () {
    let obj = this.toObject();
    delete obj.hashedPassword;
    delete obj.__v;
    delete obj.salt;
    return obj;
};

MemberSchema.virtual('id')
    .get(function () {
        return this._id;
});

const MemberModel = module.exports = mongoose.model('Member', MemberSchema);

module.exports.getMemberById = function(id, callback){
    MemberModel.findById(id, callback);
}

module.exports.getAllMembers = function(callback){
    MemberModel.find();
}

module.exports.createMember = function(userToCreate, callback){
    MemberModel.create(userToCreate, callback);
}

module.exports.updateMemberName = function(userToUpdate, callback){
    MemberModel.findById(userToUpdate._id, (err, user) => {
        if(err) {
            callback(err);
        }
        else if(!user) {
            callback(userNotFoundError);
        }
        else {
            user.firstname = userToUpdate.firstname;
            user.lastname  = userToUpdate.lastname;
            user.save(callback);
        }
    });
}

module.exports.deleteMember = function(id, callback){
    MemberModel.findByIdAndRemove(id, callback);
};

