import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Dialog from "@mui/material/Dialog";
import AddProducts from "../components/AddProducts";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const { sidebar } = useSelector((state) => state);
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={`product flex aic jc ${sidebar ? "show" : "hid"}`}>
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
            <button
              className="btn-add cleanbtn button"
              onClick={(e) => setOpen(true)}
            >
              <AddCircleOutlineOutlinedIcon />
              <div className="btn-lbl b6 s16">Create New Product</div>
            </button>
          </div>
          <div className="right-btn flex">
            <button className="btn-set button s10 b5">SET WEIGHT</button>
          </div>
        </div>
        <div className="products-block flex flex-col">
          <div className="prd-item flex aic">
            <div className="img-side flex">
              <img src="/images/prd-img.jpeg" className="img" />
              <div className="meta flex flex-col">
                <div className="prd-name flex s15 b6">Test Box</div>
                <div className="prd-des flex s13 b6">
                  First product of +644616656626
                </div>
                <div className="prd-pric flex s14 b5">RM 50.00</div>
              </div>
            </div>
            <div className="content-side flex flex-col">
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="ico-menu">
                <MoreVertOutlinedIcon />
              </div>
            </div>
          </div>
          <div className="prd-item flex aic">
            <div className="img-side flex">
              <img src="/images/prd-img.jpeg" className="img" />
              <div className="meta flex flex-col">
                <div className="prd-name flex s15 b6">Test Box</div>
                <div className="prd-des flex s13 b6">
                  First product of +644616656626
                </div>
                <div className="prd-pric flex s14 b5">RM 50.00</div>
              </div>
            </div>
            <div className="content-side flex flex-col">
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="ico-menu">
                <MoreVertOutlinedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AddProducts />
      </Dialog>
    </div>
  );
};

export default Products;
