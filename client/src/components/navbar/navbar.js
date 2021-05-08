import React, { useContext, useRef, useEffect, useState } from "react";
import {
  Link,
  useHistory,
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { UserContext } from "../../App";
import M from "materialize-css";

const Navbar = () => {
  const searchModal = useRef(null);
  const [search, setSearch] = useState("");
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    M.Modal.init(searchModal.current);
  }, []);
  const renderList = () => {
    if (state) {
      return [
        <li key="1">
          <i
            data-target="modal1"
            className="large material-icons modal-trigger"
            style={{ color: "black" }}
          >
            search
          </i>
        </li>,
        <li key="2">
          <Link to="/profile">Profile</Link>
        </li>,
        <li key="3">
          <Link to="/createpost">Create Post</Link>
        </li>,
        <li key="4">
          <Link to="/explore">Explore</Link>
        </li>,
        <li key="5">
          <button
            className="btn waves-effect waves-light red darken-3"
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              history.push("/signin");
            }}
          >
            Logout
          </button>
        </li>,
      ];
    } else {
      return [
        <li key="6">
          <Link to="/signin">Sign In</Link>
        </li>,
        <li key="7">
          <Link to="/signup">Sign Up</Link>
        </li>,
      ];
    }
  };

  const fetchUsers = (query) => {
    setSearch(query);
    fetch("/search-users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => res.json())
      .then((results) => {
        setUserDetails(results.user);
      });
  };

  return (
    <div>
      <nav>
        <div
          className="nav-wrapper white"
          style={{ paddingRight: "5%", paddingLeft: "2%" }}
        >
          <Link to={state ? "/" : "/signin"} className="brand-logo left big">
            Aliferous
          </Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
        <div id="modal1" className="modal" ref={searchModal}>
          <div className="modal-content" style={{ color: "black" }}>
            <input
              type="text"
              placeholder="Search user.."
              value={search}
              onChange={(e) => fetchUsers(e.target.value)}
            />
            <ul className="collection">
              {userDetails.map((item) => {
                return (
                  <Link
                    to={
                      item._id !== state._id
                        ? "/profile/" + item._id
                        : "/profile"
                    }
                    onClick={() => {
                      M.Modal.getInstance(searchModal.current).close();
                      setSearch("");
                      setUserDetails([]);
                      console.log(item._id);
                    }}
                  >
                    <li className="collection-item">{item.email}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setSearch("")}
              className="modal-close waves-effect waves-green btn-flat"
            >
              Close
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
