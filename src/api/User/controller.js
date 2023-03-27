
import addagentModel from '../Common/addagentModel';
import addpolicyModel from '../Common/addpolicyModel';
import addcustomerModel from '../Common/addcustomerModel';
import addpaymentModel from '../Common/addpaymentModel';
import {sendEmail} from '../Common/email';



export const show = (req, res) => {
  addagentModel.findOne({ "agentname": req.query.agentname, "phno": req.query.phno }, (err, result) => {
    res.send(result);
  })
}

export const forgotPassword = (req, res) => {
  console.log(req.query.email);
  addagentModel.findOne({"email":req.query.email}, (err, result) => {
    if (err) {    
      res.send(err);
    }
     else {
		result.map(results => {
		  const subject = 'Credentials Recived';
		  const body = `AgentName: ${results.agentname}<br>MobileNo: ${results.phno}<br>Please Login Using these Credentials<br>Thank You.`;
		  sendEmail(req.query.email, subject, body);
		})
      res.send(result);
    }
  })
}

export const addagent = (req, res) => {
  addagentModel.find(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const addpolicy = (req, res) => {
  addpolicyModel.find(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const addcustomer = (req, res) => {
  addcustomerModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const addpayment = (req, res) => {
  addpaymentModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewcustomer = (req, res) => {
  addcustomerModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const viewpayment = (req, res) => {
  addpaymentModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const updatecustomer = (req, res) => {
  addcustomerModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const updatepayments = (req, res) => {
  addpaymentModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const customerdelete = (req, res) =>
  addcustomerModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  });

export const getcusnames = (req, res) => {
  addcustomerModel.find({ "customername": req.query.customername }, (err, result) => {
    res.send(result.map(record => {
      return record;

    }));
  })
}

export const viewagent = (req, res) => {
  addagentModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const viewpolicy = (req, res) => {
  addpolicyModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const viewprofile = (req, res) => {
  addagentModel.find({ "agentname": req.query.agentname }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const updateProfile = (req, res) => {
  addagentModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const chnagepassword = (req, res) => {
  addagentModel.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}