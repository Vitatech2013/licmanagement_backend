import {Router} from 'express'


import Admin from './Admin'
import User from './User'

const router =new Router()

router.use('/admin', Admin)
router.use('/user', User)


export default router