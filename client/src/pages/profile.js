import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../App";

const Profile = () => {
  const [mypics, setMypics] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("/myposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setMypics(result.mypost);
      });
  }, []);
  return (
    <div style={{ maxWidth: "700px", margin: "0px auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQFBuvvDo8XHpg/profile-displayphoto-shrink_800_800/0/1602933018847?e=1625097600&v=beta&t=ZCYK4YnBGg0Iqyxc11KwwbfZPoEJgR4nRnXQwIf2D_M"
            alt=""
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
          />
        </div>
        <div>
          <h4>{state ? state.name : "loading"}</h4>
          <h5>{state ? state.email : "loading"}</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "108%",
            }}
          >
            <h6>{mypics.length} posts</h6>
            <h6>{state ? state.followers.length : "0"} followers</h6>
            <h6>{state ? state.following.length : "0"} following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        {mypics.map((item) => {
          return (
            <img
              key={item._id}
              src={item.photo}
              alt={item.title}
              className="item"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
