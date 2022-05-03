import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header_Dashboard = () => {
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state);

  return (
    <div className={`header-db flex aic sticky ${sidebar ? "hid" : "show"}`}>
      <div className="wrap flex aic">
        <div className="left flex">
          <div
            className="menu-icon flex aic jc"
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: "SIDEBAR", payload: !sidebar });
            }}
          >
            <img src="/images/icon-menu.svg" className="ico" />
          </div>
          <div className="user-name">Muddasir Nazir</div>
        </div>
        <div className="right flex"></div>
      </div>
    </div>
  );
};

export default Header_Dashboard;
