import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from "./component/home/Home";
import Login from "./component/login/Login";

function App() {

	return (
    <Router>
		    <Routes>
			<Route path="/"  element={<Login/>} />
			<Route path="/home"  element={<Home />} />
		</Routes>
    </Router>
	);
}

export default App;