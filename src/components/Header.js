import React from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../Icons";

import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state);
  return (
    <div className={`header-cmp flex aic sticky `}>
      <div className="wrap flex aic">
        <div className="header-left flex">
          <Link to="/">
            <img src="/images/catza-logo.svg" className="logo-img" />
          </Link>
          <div className="header-list flex aic">
            <div className="list-item flex s16 b4">Price</div>
            <div className="list-item flex s16 b4">Example Use</div>
            <div className="list-item flex s16 b4 flex aic">
              Software
              <div className="arrow-icon">
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="header-right flex">
          <div className="meta flex aic">
            <div className="language flex aic">
              <div className="language-name b3 s18">EN</div>
              <img src="/images/icon-en.png" className="language-flag" />
            </div>
            <Link to="/login" className="right-lbl ct s16 b4">
              Log in
            </Link>
            <div className="btn-trail button cleanbtn cfff b6 s18">
              Register for a 14 day trial
            </div>
            <div className="icon-menu flex aic jc">
              <img src="/images/icon-menu.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
