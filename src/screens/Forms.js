import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useDispatch, useSelector } from "react-redux";

const Forms = () => {
  const { sidebar } = useSelector((state) => state);
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className={`forms flex aic jc ${sidebar ? "show" : "hid"}`}>
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
        <div className="form-block flex flex-col">
          <div className="form-item flex">
            <div className="item-left flex flex-col">
              <div className="title s15 b6 c333">Sample Form</div>
              <div className="title s13 b5 c888">Product 1</div>
            </div>
            <div className="item-center flex flex-col aic jc">
              <div className="title s13 b5 c888">Clicks: 0</div>
            </div>
            <div className="item-right flex aic">
              <div className="ions-side flex flex-col aic jc">
                <div className="icons">
                  <ShareOutlinedIcon className="pointer icon-share" />
                  <MoreVertOutlinedIcon className="pointer" />
                </div>
                <div className="sale-numb s12 b5 c888">Sales: RM 0.00</div>
              </div>
              <div className="switch-button flex">
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
