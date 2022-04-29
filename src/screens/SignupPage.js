import React from "react";
import { Link } from "react-router-dom";
import { GoogleIcon, AppleIcon } from "../Icons";

const LoginPage = () => {
  return (
    <div className="signup-page flex">
      <div className="wrapWidth wrap flex aic jc flex-col">
        <div className="login-block flex aic flex-col">
          <div className="login-heading s18 b7 font">Create an account</div>
          <button className="btn login-google cleanbtn button flex aic font">
            <div className="ico">
              <GoogleIcon />
            </div>
            <div className="lbl s12 font">Sign Up with Google</div>
          </button>
          <button className="btn login-apple cleanbtn button flex aic font">
            <div className="ico">
              <AppleIcon />
            </div>
            <div className="lbl s10 font">Sign Up with Apple</div>
          </button>
          <div className="tag-or flex aic jc">
            <div className="lbl-or">or</div>
          </div>
          <div className="txt-box flex aic">
            <input
              type="text"
              placeholder="First Name"
              className="txt cleanbtn font s12"
            />
          </div>
          <div className="txt-box flex aic">
            <input
              type="text"
              placeholder="Last Name"
              className="txt cleanbtn font s12"
            />
          </div>
          <div className="txt-box flex aic">
            <input
              type="mail"
              placeholder="Email"
              className="txt cleanbtn font s12"
            />
          </div>
          <div className="txt-box flex aic">
            <input
              type="text"
              placeholder="Phone Number"
              className="txt cleanbtn font s12"
            />
          </div>
          <div className="txt-box flex aic">
            <input
              type="date"
              placeholder="Phone Number"
              className="txt cleanbtn font s12"
            />
          </div>
          <button className="btn login-btn cleanbtn button flex aic font">
            <div className="lbl s10 font cfff">Sing Up</div>
          </button>
          <div className="notifc flex aic jc">
            <div className="notic-lbl font">
              You will receive a SMS to proceed with signup in.
            </div>
          </div>
        </div>
        <div className="signup-option flex aic jc">
          <div className="lbl font b5">
            Already have an account? <> </>{" "}
            <Link to="/login" className="signup-now">
              {" "}
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
