import "./App.css";
import Navbar from "./components/navbar/navbar";
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Profile from './pages/profile';

function App() {
  return(
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/signup' exact component={Signup}></Route>
          <Route path='/profile' exact component={Profile}></Route>
        </Switch>
    </Router>
    
  );
}

export default App;
