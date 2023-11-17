import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// import getUser from './reducers/userSlice'
import getUser from './reducers/userSessionSlice'
const logger = createLogger();

const store = configureStore({ reducer: {
    getUser:getUser
},
middleware: [thunk, logger] 
})
export default store