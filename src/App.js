import "./App.scss";
import {Route, Routes, Link } from "react-router-dom";
import Form from "./component/Form/Form";
import User from "./component/User/User";
import { useState } from "react";

function App() {
  
  return (
    <div className="App">
      <Form/>
    </div>
  );
}

export default App;
