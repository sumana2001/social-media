import "./App.css";
import Navbar from "./components/navbar/navbar";
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/signin';
import Signup from './pages/signup';
import Profile from './pages/profile';
import CreatePost from './pages/createPost';

function App() {
  return(
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/signin' exact component={SignIn}></Route>
          <Route path='/signup' exact component={Signup}></Route>
          <Route path='/profile' exact component={Profile}></Route>
          <Route path='/createpost' exact component={CreatePost}></Route>
        </Switch>
    </Router>
    
  );
}

export default App;
