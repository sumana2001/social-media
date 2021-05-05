import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const SignUp = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState(undefined);
  useEffect(() => {
    if (url) {
      UploadFields();
    }
  }, [url]);

  const UploadPic = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "aliferous");
    data.append("cloud_name", "dqlh4eyt8");
    fetch("https://api.cloudinary.com/v1_1/dqlh4eyt8/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const UploadFields = () => {
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        pic: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "red darken-3" });
        } else {
          M.toast({ html: data.message, classes: "green darken-1" });
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const PostData = () => {
    if (image) {
      UploadPic();
    } else {
      UploadFields();
    }
  };

  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Aliferous</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="file-field input-field">
          <div className="btn">
            <span>Upload Profile Picture</span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          className="btn waves-effect waves-light"
          onClick={() => PostData()}
        >
          Sign Up
        </button>
        <p>
          <Link to="/signin">Already have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
