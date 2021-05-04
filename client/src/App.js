import React, { useEffect, createContext, useReducer, useContext } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  useHistory,
} from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import CreatePost from "./pages/createPost";
import {reducer,initialState} from "./reducers/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/')
    }else{
      history.push('/signin')
    }

  },[])
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/signin" exact component={SignIn}></Route>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/profile" exact component={Profile}></Route>
      <Route path="/createpost" exact component={CreatePost}></Route>
    </Switch>
  );
};

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <Router>
      <Navbar />
      <Routing />
    </Router>
    </UserContext.Provider>
  );
}

export default App;
