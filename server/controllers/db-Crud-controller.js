const UserData = require('../models/test-model')

createUserData = (req,res)=>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success :false,
            error:'you must provide data'
        })
    }
    const userData = new UserData(body)

if (!userData){
    return res.status(400).json({success:false,error:err})
}

userData
.save()
.then(()=>{
    return res.status(201).json({
        success:true,
        id:userData._id,
        message:'UserData created'
    })
})

}

const updateUserData = (req,res)=>{
    const body = req.body
    if(!body){
        return res.status(400).json({
            success = false, 
            error:'you must provide a body to update'
        })
    }
    UserData.findOne({_id:req.params.id}, (err, userData) => {
        if(err){
            return res.status(400).json({
                err,
                message:'User not found'
            })
        }
        userData.name = body.name
        userData
        .save()
        .then (() => {
            return res.status(400).json({
                sucsess: true,
                id:userData._id,
                message: 'UserData updated'
            })
        })
        .catch(err =>{
            return res.status(404).json({
                err,
                message:'UserData not updated'
            })
        }) 
    })
}
deleteUserData =  (req, res) => {
      UserData.findOneAndDelete({ _id: req.params.id }, (err, userData) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!userData.success) {
            return res
                .status(404)
                .json({ success: false, error: `UserData not found` })
        }

        return res.status(200).json({ success: true, data: userData })
    }).catch(err => console.log(err))
}

getUserDataByID =  (req, res) => {
     UserData.findOne({ _id: req.params.id }, (err, userData) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!userData) {
            return res
                .status(404)
                .json({ success: false, error: `user not found` })
        }
        return res.status(200).json({ success: true, data: userData })
    }).catch(err => console.log(err))
}

getUserData =  (req, res) => {
     UserData.find({}, (err, userData) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!userData.length) {
            return res
                .status(404)
                .json({ success: false, error: `userData not found` })
        }
        return res.status(200).json({ success: true, data: userData })
    }).catch(err => console.log(err))
}


module.exports = {
    createUserData,
    updateUserData,
    deleteUserData,
    getUserDataByID,
    getUserData
 };