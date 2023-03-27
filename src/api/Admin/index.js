import { Router } from 'express'

import {
  adminLogin,
  forgotPassword,
  chnagepassword,
  Agents,
  Polices,
  addcustomer,
  Viewagents,
  Viewpolicy,
  updateagent,
  updatepolicy,
  policydelete,
  agentdelete,
  viewpayment

} from './controller'

const router = new Router()

router.get('/', adminLogin)

router.get('/forgotpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)

router.post('/addagents', Agents)

router.get('/viewagents', Viewagents)

router.put('/:id', updateagent)

router.post('/polices', Polices)

router.get('/viewpolicy', Viewpolicy)

router.put('/updatepolicy/:id', updatepolicy)

router.post('/customers', addcustomer)

router.delete('/:id', policydelete)

router.delete('/delagent/:id', agentdelete)

router.get('/viewpayments', viewpayment)

export default router