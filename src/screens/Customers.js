import React, { useState, useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";

const Customers = () => {
  const [step, setStep] = useState("All");
  const [activeTab, setActiveTab] = useState(true);
  const [activeTab2, setActiveTab2] = useState(false);
  const [activeTab3, setActiveTab3] = useState(false);

  const All = () => {
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
  const Paid = () => {
    return <div className="paid-sec mt">Paid data</div>;
  };
  const Unpaid = () => {
    return <div className="unpaid-sec mt">UnPaid data</div>;
  };

  return (
    <div className="customers flex aic jc">
      <div className="wrap flex aic flex-col">
        <div className="progress-bar flex">
          <div
            className={`bar-tab flex aic jc b6 s14 ${
              activeTab ? "active-tab" : ""
            }`}
            onClick={() => {
              setActiveTab(true);
              setActiveTab2(false);
              setActiveTab3(false);
              setStep("All");
            }}
          >
            All
          </div>
          <div
            className={`bar-tab flex aic jc b6 s14 ${
              activeTab2 ? "active-tab" : ""
            }`}
            onClick={() => {
              setActiveTab(false);
              setActiveTab2(true);
              setActiveTab3(false);
              setStep("Paid");
            }}
          >
            Paid
          </div>
          <div
            className={`bar-tab flex aic jc b6 s14 ${
              activeTab3 ? "active-tab" : ""
            }`}
            onClick={() => {
              setActiveTab(false);
              setActiveTab3(true);
              setActiveTab2(false);
              setStep("Unpaid");
            }}
          >
            Unpaid
          </div>
        </div>
        <div className="screens flex aic jc">
          {step === "All" && All()}
          {step === "Paid" && Paid()}
          {step === "Unpaid" && Unpaid()}
        </div>
      </div>
    </div>
  );
};

export default Customers;
