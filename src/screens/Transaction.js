import React, { useState, useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";

const Transaction = () => {
  const [step, setStep] = useState("Success");
  const [activeTab, setActiveTab] = useState(true);
  const [activeTab2, setActiveTab2] = useState(false);

  const Success = () => {
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
  const Abandoned = () => {
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
    <div className="customers flex aic jc">
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
        <div className="progress-bar flex">
          <div
            className={`bar-tab flex aic jc b6 s14 ${
              activeTab ? "active-tab" : ""
            }`}
            onClick={() => {
              setActiveTab(true);
              setActiveTab2(false);
              setStep("Success");
            }}
          >
            SUCCESS
          </div>
          <div
            className={`bar-tab flex aic jc b6 s14 ${
              activeTab2 ? "active-tab" : ""
            }`}
            onClick={() => {
              setActiveTab(false);
              setActiveTab2(true);
              setStep("Abandoned");
            }}
          >
            ABANDONED
          </div>
        </div>
        <div className="screens flex aic jc">
          {step === "Success" && Success()}
          {step === "Abandoned" && Abandoned()}
        </div>
      </div>
    </div>
  );
};

export default Transaction;
