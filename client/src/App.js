import React, { useEffect } from "react";
import "./App.css";
import {Route, Switch} from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Home from './pages/Home.jsx'
import { useDispatch } from 'react-redux';
import {getDogs, getTemperaments} from './redux/actions.js'




function App() {

  const dispatch = useDispatch();

  const getDogsData = async () => {
    const response = await fetch('http://localhost:3001/dogs')

    const responseJSON = await response.json();
    dispatch(getDogs(responseJSON))
  }

  const getTemperamentData = async () => {
    const response = await fetch("http://localhost:3001/temperaments");
    const responseJSON = await response.json()
    dispatch(getTemperaments(responseJSON))
  }


  useEffect(() => {
    getDogsData();
    getTemperamentData()
  }, [])



  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/home" >
          <Home/>
        </Route> 
      </Switch>
    </div>
  );
}

export default App;
