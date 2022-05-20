import React from "react";
import "./app.css";
import Navbar from './components/Navbar/Navbar'
import Form from './components/Form/Form'

//import CreateCourse from "./components/CreateCourse/CreateCourse";
const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Form />

    </div>
  );
};

export default App;
