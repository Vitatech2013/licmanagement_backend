import mongoose from 'mongoose'


const customerSchema = new mongoose.Schema({
    agentname: {
        type: String
    },
    policyname: {
        type: String
    },
    customername: {
        type: String
    },
    dob: {
        type: String
    },
    phno: {
        type: Number
    },
    email: {
        type: String
    },
    policyamount: {
        type: Number
    },
    policyterm: {
        type: String
    },
    policyperiod: {
        type: String
    },
    joiningdate: {
        type: String
    },
    address: {
        type: String
    }
}, {
        timestamps: true

    });

const addcustomerModel = mongoose.model('Addcustomers', customerSchema)

export default addcustomerModel