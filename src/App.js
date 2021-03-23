import Routes from "./Routes";
import { Provider } from 'react-redux';
import store from './Redux/store'
import './App.css'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
}

export default App;
