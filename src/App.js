import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/Store";
import ZuzApp from "./ZuzApp";

function App() {
  return (
    <Provider store={store}>
      <ZuzApp />
    </Provider>
  );
}

export default App;
