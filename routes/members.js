const router = require('express').Router();
const MemberModel = require('../models/member');
const secret = require('../config/config').secret;
console.log('memb');

router.get('/', (req,res,next)=>{
    console.log('tjena');
    MemberModel.getAllMembers((err, members)=>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json({
            success: err === null,
            err,
            members
        });
    });
});

router.get('/:id', (req,res,next)=>{
    MemberModel.getMemberById(req.params.id, (err, member)=>{
        res.json({
            success: err === null,
            err,
            member
        });
    });
});

router.post('/create', (req,res,next)=>{
    console.log('INSIDE CREATE');
    MemberModel.createMember(req.body.userToCreate, (err, member)=>{
        console.log(req.body);
        res.json({
            success: err === null,
            err,
            member
        });
    });
});

router.put('/update/name', (req,res,next)=>{
    MemberModel.updateMemberName(req.body.userToUpdate, (err, member) => {
        res.json({
            success: err === null,
            err,
            member
        });
    });
});

router.delete('/delete', (req,res,next)=>{
    MemberModel.deleteMember(req.body.userToDeleteId, (err,member)=>{
        res.json({
            success: err === null,
            err,
            member
        });  
    });
});

module.exports = router;