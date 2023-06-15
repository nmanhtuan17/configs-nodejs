
import userRouter from './user.js'
import homeRouter from './home.js'
import adminRouter from './admin/admin.js'
const initWebRoute = (app) => {


    app.use('/user', userRouter)
    app.use('/admin', adminRouter)
    app.use('/', homeRouter)
}

export default initWebRoute