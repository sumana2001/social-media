import React from "react";

const Profile = () => {
  return (
    <div style={{maxWidth:"700px",margin:"0px auto"}}>
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
          <h4>Sumana Basu</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "108%",
            }}
          >
            <h6>10 posts</h6>
            <h6>10 followers</h6>
            <h6>10 following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img className="item" src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="post"/>
        <img className="item" src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="post"/>
        <img className="item" src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="post"/>
        <img className="item" src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="post"/>
        <img className="item" src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="post"/>
        <img className="item" src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="post"/>
        <img className="item" src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="post"/>
        <img className="item" src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="post"/>
      
      </div>
    </div>
  );
};

export default Profile;
