import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { useDispatch, useSelector } from "react-redux";

const SaleTeam = () => {
  const { sidebar } = useSelector((state) => state);
  const [step, setStep] = useState("All");
  const [activeTab, setActiveTab] = useState(true);
  const [activeTab2, setActiveTab2] = useState(false);
  const [activeTab3, setActiveTab3] = useState(false);
  const [activeTab4, setActiveTab4] = useState(false);

  //   console.log(
  //     "set and active tab",
  //     step,
  //     activeTab,
  //     activeTab2,
  //     activeTab3,
  //     activeTab4
  //   );

  const AllUsers = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    return (
      <div className="all-sec mt">
        <div className="wrap">
          <div className="tbl-sec flex aic jc">
            <div className="products-block flex flex-col">
              <div className="prd-item flex aic">
                <div className="img-side flex">
                  <img src="/images/default.png" className="img" />
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
            {/* <div className="data-not-found flex aic jc flex-col">
              <img src="/images/empty-data.png" className="null-img" />
              <div className="mesg s12 c888">
                No item found in database or empty
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  };
  const Admin = () => {
    return (
      <div className="all-sec mt">
        <div className="wrap">
          <div className="tbl-sec flex aic jc">
            <div className="data-not-found flex aic jc flex-col">
              <img src="/images/empty-data.png" className="null-img" />
              <div className="mesg s12 c888">
                No item found in database or empty
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Sale = () => {
    return (
      <div className="all-sec mt">
        <div className="wrap">
          <div className="tbl-sec flex aic jc">
            <div className="data-not-found flex aic jc flex-col">
              <img src="/images/empty-data.png" className="null-img" />
              <div className="mesg s12 c888">
                No item found in database or empty
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const Agent = () => {
    return (
      <div className="all-sec mt">
        <div className="wrap">
          <div className="tbl-sec flex aic jc">
            <div className="data-not-found flex aic jc flex-col">
              <img src="/images/empty-data.png" className="null-img" />
              <div className="mesg s12 c888">
                No item found in database or empty
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={`sale-team flex aic jc ${sidebar ? "show" : "hid"}`}>
      <div className="wrap flex aic flex-col">
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
        <div className="progress-bar flex">
          <div
            className={`bar-tab flex aic jc b6 s14 ${
              activeTab ? "active-tab" : ""
            }`}
            onClick={() => {
              setActiveTab(true);
              setActiveTab2(false);
              setActiveTab3(false);
              setActiveTab4(false);
              setStep("All");
            }}
          >
            ALL
          </div>
          <div
            className={`bar-tab flex aic jc b6 s14 ${
              activeTab2 ? "active-tab" : ""
            }`}
            onClick={() => {
              setActiveTab(false);
              setActiveTab2(true);
              setActiveTab3(false);
              setActiveTab4(false);
              setStep("Admin");
            }}
          >
            ADMIN
          </div>
          <div
            className={`bar-tab flex aic jc b6 s14 ${
              activeTab3 ? "active-tab" : ""
            }`}
            onClick={() => {
              setActiveTab(false);
              setActiveTab3(true);
              setActiveTab2(false);
              setActiveTab4(false);
              setStep("Sales");
            }}
          >
            SALES
          </div>
          <div
            className={`bar-tab flex aic jc b6 s14 ${
              activeTab4 ? "active-tab" : ""
            }`}
            onClick={() => {
              setActiveTab(false);
              setActiveTab4(true);
              setActiveTab2(false);
              setActiveTab3(false);
              setStep("Agent");
            }}
          >
            AGENT
          </div>
        </div>
        <div className="screens flex aic jc">
          {step === "All" && AllUsers()}
          {step === "Admin" && Admin()}
          {step === "Sales" && Sale()}
          {step === "Agent" && Agent()}
        </div>
      </div>
    </div>
  );
};

export default SaleTeam;
