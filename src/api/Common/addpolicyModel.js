import mongoose from 'mongoose'

const addpolicySchema = new mongoose.Schema({
    policyname: {
        type: String
    },
    minage: {
        type: String
    },
    minamount: {
        type: Number
    },
    description: {
        type: String
    }
},
    {
        timestamps: true

    });

const addpolicyModel = mongoose.model('Addpolices', addpolicySchema)

export default addpolicyModel