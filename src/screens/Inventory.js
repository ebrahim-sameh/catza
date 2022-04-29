import React, { useState, useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const Inventory = () => {
  return (
    <div className="customers flex aic jc">
      <div className="wrap flex aic flex-col">
        <div className="filter-sec flex aic">
          <div className="search-box flex aic jc">
            <input
              type="text"
              placeholder="Search Products"
              className="txt-search cleanbtn s16"
            />
            <div className="search-icon">
              <SearchOutlinedIcon />
            </div>
          </div>
          <div className="list-view flex aic jc pointer s12 c888 b6">
            <ExitToAppOutlinedIcon /> EXPORT
          </div>
        </div>

        <div className="screens flex aic jc">
          {/* {step === "Success" && Success()}
          {step === "Abandoned" && Abandoned()} */}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
