import { combineReducers } from 'redux';
import testReducer from '../../features/testarear/testReducer'

const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer;