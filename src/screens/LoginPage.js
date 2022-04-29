import React from "react";
import { Link } from "react-router-dom";
import { GoogleIcon, AppleIcon } from "../Icons";
import { useDispatch, useSelector } from "react-redux";
const LoginPage = () => {
  const dispatch = useDispatch();
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
          {/* 
          <div className="tag-or flex aic jc">
            <div className="lbl-or">or</div>
          </div> */}
          {/* <div className="txt-box flex aic">
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="txt cleanbtn font s12"
            />
          </div> */}
          <Link
            to={{
              pathname: "/home",
              state: {
                idLink: "home",
              },
            }}
            onClick={(e) => {
              dispatch({
                type: "USER",
                payload: true,
              });
            }}
            className="btn login-btn cleanbtn button flex aic font"
          >
            <div className="lbl s10 font cfff">Log In</div>
          </Link>
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
