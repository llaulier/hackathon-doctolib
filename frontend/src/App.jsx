import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import PracticianPage from "./components/PracticianPage";
import SignIn from "./components/Join";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Patients from "./Patients";
import PatientsContext from "./contexts/patients-context";
import "./App.css";

const App = () => {
  const [patients, setPatients] = useState([...Patients]);
  const [title, setTitle] = useState("Patients Lists");
  const value = { patients, setPatients, title, setTitle };

  return (
    <PatientsContext.Provider value={value}>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/patient" exact component={SignIn} />
          <Route path="/chat/:type/:name/:room" component={Chat} />
          <Route exact path="/" component={Login} />
          <Route path="/practician" exact component={PracticianPage} />
          <Route exact path="/register" component={SignUp} />
        </Switch>
      </Router>
    </PatientsContext.Provider>
  );
};

export default App;
