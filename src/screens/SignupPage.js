import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { GoogleIcon, AppleIcon } from "../Icons";

const LoginPage = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [dob, setDob] = useState("");
  //Register a User
  const RegisterUser = () => {
    if (password === cpassword) {
      const formData = new FormData();
      formData.append("firstname", firstName);
      formData.append("lastname", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("phoneno", phoneNo);
      formData.append("dob", dob);

      axios
        .post(
          `https://desolate-castle-27502.herokuapp.com/api/register`,
          formData
        )
        .then((res) => {
          console.log("user Register resp", res.data);
          toast.success(`User Registered Successfully!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          history.push("/login");

          // if (res?.data == "true") {
          //   props.history.push("/");
          // } else {
          //   alert(res?.data?.message);
          // }
        })
        .catch((err) => {
          toast.error(`Something went wrong`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          console.log("Error at Post user Data", err);
        });
    } else {
      console.log("Password not same");
      toast.error(`Password not same`, {
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="txt-box flex aic">
            <input
              type="text"
              placeholder="Last Name"
              className="txt cleanbtn font s12"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
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
              type="text"
              placeholder="Phone Number"
              className="txt cleanbtn font s12"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
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
          <div className="txt-box flex aic">
            <input
              type="password"
              placeholder="Confirm Password"
              className="txt cleanbtn font s12"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>
          <div className="txt-box flex aic">
            <input
              type="date"
              placeholder="Date of Birth"
              className="txt cleanbtn font s12"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <button
            className="btn login-btn cleanbtn button flex aic font"
            onClick={RegisterUser}
          >
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
