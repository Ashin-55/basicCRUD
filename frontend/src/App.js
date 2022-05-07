import {Route, Routes} from "react-router-dom"
import './App.css';
import AddProduct from "./screens/AddProduct";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Registration from "./screens/Registration";

function App() {
  return (
    <Routes>
     <Route path="/" exact element={<Home/>}/>
     <Route path="/login" exact element={<Login/>}/>
     <Route path="/registration" exact element={<Registration/>}/>
     <Route path="/addproduct" exact element={<AddProduct/>}/>
    </Routes>
  );
}

export default App;
