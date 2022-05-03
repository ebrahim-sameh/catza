import React, { useState, useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";

const Coupons = () => {
  const { sidebar } = useSelector((state) => state);
  return (
    <div className={`coupons flex aic jc ${sidebar ? "show" : "hid"}`}>
      <div className="wrap flex aic  jc flex-col">
        <div className="filter-sec flex aic">
          <div className="search-box flex aic jc">
            <input
              type="text"
              placeholder="Search Transaction"
              className="txt-search cleanbtn s16"
            />
            <div className="search-icon">
              <SearchOutlinedIcon />
            </div>
          </div>
        </div>
        <div className="add-new-prd flex aic">
          <div className="left-btn flex">
            <button className="btn-add cleanbtn button">
              <AddCircleOutlineOutlinedIcon />
              <div className="btn-lbl b6 s16">Create New Product</div>
            </button>
          </div>
          <div className="right-btn flex">
            {/* <button className="btn-set button s10 b5">SET WEIGHT</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
