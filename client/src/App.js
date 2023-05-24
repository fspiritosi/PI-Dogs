import "./App.css";
import {Route, Switch} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Home from './pages/Home.jsx'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
