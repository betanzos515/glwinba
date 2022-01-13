import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from '../reducers/uiReducer';
import { userReducer } from "../reducers/userReducer";
import { registroUsuarioReducer } from "../reducers/registroUsuarioReducer";
import { moduloActual } from "../reducers/moduloActualReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    auth: authReducer,
    ui : uiReducer,
    user : userReducer,
    registroUsuario: registroUsuarioReducer,
    moduloActual : moduloActual
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store;