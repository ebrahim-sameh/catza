import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoogleIcon, AppleIcon } from "../Icons";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    if (password !== "" && email !== "") {
      const formData = new FormData();

      formData.append("email", email);
      formData.append("password", password);

      axios
        .post(`https://desolate-castle-27502.herokuapp.com/api/login`, formData)
        .then((res) => {
          console.log("user login resp", res.data);
          toast.success(`${res?.data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          localStorage.setItem("token", res?.data.token);
          dispatch({
            type: "USER",
            payload: true,
          });
          dispatch({
            type: "IS_USER",
            payload: res?.data.token,
          });
          history.push("/home");
        })
        .catch((err) => {
          toast.error(`Something went wrong ${err}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } else {
      toast.error(`Please enter email and password`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="login-page flex">
      <div className="wrapWidth wrap flex aic jc flex-col">
        <div className="login-block flex aic flex-col">
          <div className="login-heading s18 b7 font">Log in to Catza</div>
          <button className="btn login-google cleanbtn button flex aic font">
            <div className="ico">
              <GoogleIcon />
            </div>
            <div className="lbl s12 font">Sign In with Google</div>
          </button>
          <button className="btn login-apple cleanbtn button flex aic font">
            <div className="ico">
              <AppleIcon />
            </div>
            <div className="lbl s10 font">Sign In with Apple</div>
          </button>
          <Link
            to={"/signup"}
            className="btn login-google cleanbtn button flex aic font"
          >
            {/* <div className="ico">
              <GoogleIcon />
            </div> */}
            <div className="lbl s12 font">Sign In with Email</div>
          </Link>

          <div className="tag-or flex aic jc">
            <div className="lbl-or">or</div>
          </div>
          <div className="txt-box flex aic">
            <input
              type="mail"
              placeholder="Email"
              className="txt cleanbtn font s12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="txt-box flex aic">
            <input
              type="password"
              placeholder="Password"
              className="txt cleanbtn font s12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            // to={{
            //   pathname: "/home",
            //   state: {
            //     idLink: "home",
            //   },
            // }}
            onClick={(e) => {
              loginUser();
              // dispatch({
              //   type: "USER",
              //   payload: true,
              // });
            }}
            className="btn login-btn cleanbtn button flex aic font"
          >
            <div className="lbl s10 font cfff">Log In</div>
          </div>
          <div className="notifc flex aic jc">
            <div className="notic-lbl font">
              You will receive a SMS to proceed with signing in.
            </div>
          </div>
        </div>
        <div className="signup-option flex aic jc">
          <div className="lbl font b5">
            New to Catza?
            <Link to="/signup" className="signup-now">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
