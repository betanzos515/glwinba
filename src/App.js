import { Provider } from "react-redux";
import { AppRoute } from "./routes/AppRoute";

import store from "./store/store";

const init = () =>{
  return JSON.parse(localStorage.getItem('estadoLoggin')) ||  { cargando:false, isLogged:false }
}
function App() { 
  localStorage.setItem('estadoLoggin',JSON.stringify(init()));
  return (
    <Provider store={store}>
      <AppRoute/>
    </Provider>
  );
}

export default App;
