import {combineReducers} from 'redux';
import {infoReducer} from './weather-info';

export const rootReducer = combineReducers({
    info: infoReducer,
    }

)