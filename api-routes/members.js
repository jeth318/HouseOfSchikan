const router = require('express').Router();
const MemberModel = require('../models/member');
const secret = require('../config/config').secret;

/* let members = [
    {
        id: '1',
        priority: 1,
        firstName: 'Joline',
        lastName: 'Schikan'
    },
    {
        id: '2',
        priority: 2,
        firstName: 'Joline',
        lastName: 'Schikan'
    },
    {
        id: '3',
        priority: 3,
        firstName: 'Joline',
        lastName: 'Schikan'
    },
    {
        id: '4',
        priority: 4,
        firstName: 'Joline',
        lastName: 'Schikan'
    },
    {
        id: '5',
        priority: 5,
        firstName: 'Joline',
        lastName: 'Schikan'
    },
] */

router.get('/', (req,res,next)=>{
    MemberModel.getAllMembers((err, members)=>{
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
    MemberModel.createMember(req.body.memberToCreate, (err, member)=>{
        res.json({
            success: err === null,
            err,
            member
        });
    });
});

router.put('/update/name', (req,res,next)=>{
    MemberModel.updateMemberName(req.body.memberToUpdate, (err, member) => {
        res.json({
            success: err === null,
            err,
            member
        });
    });
});

router.delete('/delete', (req,res,next)=>{
    MemberModel.deleteMember(req.body.memberToDeleteId, (err,member)=>{
        res.json({
            success: err === null,
            err,
            member
        });  
    });
});

module.exports = router;