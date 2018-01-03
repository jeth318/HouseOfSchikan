let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let memberNotFoundError = new Error();
memberNotFoundError.title = "memberNotFoundError";
memberNotFoundError.message = "Member found not found";

let MemberSchema = new Schema({
    priority: {type: Number, required: false},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true}
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
    MemberModel.find().sort('priority').exec(callback);
}

module.exports.createMember = function(memberToCreate, callback){
    console.log(memberToCreate);
    MemberModel.create(memberToCreate, callback);
}

module.exports.updateMemberName = function(memberToUpdate, callback){
    MemberModel.findById(memberToUpdate._id, (err, member) => {
        if(err) {
            callback(err);
        }
        else if(!member) {
            callback(memberNotFoundError);
        }
        else {
            member.firstname = memberToUpdate.firstname;
            member.lastname  = memberToUpdate.lastname;
            member.save(callback);
        }
    });
}

module.exports.deleteMember = function(id, callback){
    MemberModel.findByIdAndRemove(id, callback);
};

