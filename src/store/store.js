import { combineReducers, createStore } from "redux";

import { authReducer } from "../reducers/authReducer";
import { uiReducer } from '../reducers/uiReducer';
import { userReducer } from "../reducers/userReducer";
import { registroUsuarioReducer } from "../reducers/registroUsuarioReducer";



const reducers = combineReducers({
    auth: authReducer,
    ui : uiReducer,
    user : userReducer,
    registroUsuario: registroUsuarioReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;