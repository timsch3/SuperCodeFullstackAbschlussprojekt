const Test = require('../models/test-model')

createTest = (req,res)=>{
    const body = req.body

    if(!body){
        return res.status(400).json({
            success :false,
            error:'you must provide data'
        })
    }
    const test = new Test(body)

if (!test){
    return res.status(400).json({success:false,error:err})
}

test
.save()
.then(()=>{
    return res.status(201).json({
        success:true,
        id:test._id,
        message:'Test created'
    })
})

}


module.exports = createTest;