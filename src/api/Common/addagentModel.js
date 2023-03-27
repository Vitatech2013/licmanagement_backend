import mongoose from 'mongoose'

const agentSchema = new mongoose.Schema({
    agentname: {
        type: String
    },
    phno: {
        type: Number
    },
    email: {
        type: String
    },
    dob: {
        type: String
    },
    gender: {
        type: String
    },
    adharno: {
        type: Number
    },
    address: {
        type: String
    }
},
    {
        timestamps: true

    });

const addagentModel = mongoose.model('addagents', agentSchema)

export default addagentModel