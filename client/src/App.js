import React, { useEffect, createContext, useReducer, useContext } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  useHistory,
} from "react-router-dom";
import Explore from "./pages/explore";
import SignIn from "./pages/signin";
import Signup from "./pages/signup";
import Profile from "./pages/profile";
import CreatePost from "./pages/createPost";
import UserProfile from "./pages/userProfile";
import { reducer, initialState } from "./reducers/userReducer";
import Feed from "./pages/feed";
import Reset from "./pages/resetPassword";
import NewPassword from "./pages/newPassword";

export const UserContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      if (!history.location.pathname.startsWith("/reset"))
        history.push("/signin");
    }
  }, []);
  return (
    <Switch>
      <Route path="/explore" exact component={Explore}></Route>
      <Route path="/signin" exact component={SignIn}></Route>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/profile" exact component={Profile}></Route>
      <Route path="/createpost" exact component={CreatePost}></Route>
      <Route path="/profile/:userid" exact component={UserProfile}></Route>
      <Route path="/" exact component={Feed}></Route>
      <Route path="/reset" exact component={Reset}></Route>
      <Route path="/reset/:token" exact component={NewPassword}></Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
