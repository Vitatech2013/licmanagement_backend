import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
    customername: {
        type: String
    },
    agentname: {
        type: String
    },
    policyname: {
        type: String
    },
    policyamount: {
        type: String
    },
    newamount: {
        type: String
    },
    joiningdate: {
        type: String
    }
},
    {
        timestamps: true

    });

const addpaymentModel = mongoose.model('Payments', paymentSchema)

export default addpaymentModel