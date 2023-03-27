import adminLoginModel from './adminLoginModel';
import addagentModel from '../Common/addagentModel';
import addpolicyModel from '../Common/addpolicyModel';
import addcustomerModel from '../Common/addcustomerModel';
import addpaymentModel from '../Common/addpaymentModel';
import {sendEmail} from '../Common/email';


export const adminLogin = (req, res) => {
  adminLoginModel.findOne({ "username": req.query.username, "pwd": req.query.pwd }, (err, result) => {
    res.send(result);
  })
}

export const Agents = (req, res) => {
  addagentModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
	  const body = `Your are successfully registered in LIC Management System... <br>Please Login Using below Credentials<br>AgentName: ${req.body.agentname}<br>MobileNo: ${req.body.phno}<br>Thank You.`;      
	  sendEmail(req.body.email, subject, body);
      res.send(result);
    }
  })
}

export const forgotPassword = (req, res) => {
  console.log(req.query.emailid);
  adminLoginModel.findOne({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
		result.map(results => {
		  const subject = 'Credentials Recived';
		  const body = `UserName: ${results.username}<br>Password: ${results.pwd}<br>Please Login Using these Credentials<br>Thank You.`;
		  sendEmail(req.query.emailid, subject, body);
		})
      res.send(result);
    }
  })
}

export const chnagepassword = (req, res) => {
  adminLoginModel.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const Viewagents = (req, res) => {
  addagentModel.find(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updateagent = (req, res) => {
  addagentModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const Polices = (req, res) => {
  addpolicyModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const Viewpolicy = (req, res) => {
  addpolicyModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const updatepolicy = (req, res) => {
  addpolicyModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const addcustomer = (req, res) => {
  addcustomerModel.find(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const policydelete = (req, res) =>
  addpolicyModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  });

export const agentdelete = (req, res) =>
  addagentModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      res.send(deletedObj);
    }
  });

export const viewpayment = (req, res) => {
  addpaymentModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

