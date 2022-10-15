import "./App.scss";
import {Route, Routes } from "react-router-dom";
import Form from "./component/Form/Form";
import User from "./component/User/User";

function App() {
  return (
    <div className="App">
      <Routes basename="/form">
        <Route path="/" element={<Form />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
