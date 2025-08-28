import { Provider } from "react-redux";
import "./global.css";
import AppNavigation from "./navigation/AppNavigation";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
