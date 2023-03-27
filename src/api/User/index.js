import { Router } from 'express'

import {
  show,
  forgotPassword,
  chnagepassword,
  addcustomer,
  addpayment,
  viewagent,
  viewpolicy,
  viewpayment,
  viewcustomer,
  updatecustomer,
  updatepayments,
  getcusnames,
  viewprofile,
  updateProfile

} from './controller'

const router = new Router()

router.get('/show', show)


router.get('/forgotpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)


router.post('/customers', addcustomer)

router.post('/payments', addpayment)

router.get('/viewagent', viewagent)

router.get('/viewpolicy', viewpolicy)

router.get('/viewpayments', viewpayment)

router.get('/viewcustomer', viewcustomer)

router.put('/updateprofile/:id', updateProfile)

router.put('/customerupdate/:id', updatecustomer)

router.put('/:id', updatepayments)

router.get('/getcusnames', getcusnames)

router.get('/viewprofile', viewprofile)



export default router