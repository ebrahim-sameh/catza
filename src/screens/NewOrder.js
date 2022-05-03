import React, { useState, useEffect } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import { useDispatch, useSelector } from "react-redux";

export const NewOrder = () => {
  const { sidebar } = useSelector((state) => state);
  const [step, setStep] = useState("PROCESSING");
  const [activeTab, setActiveTab] = useState(true);
  const [activeTab2, setActiveTab2] = useState(false);
  const [activeTab3, setActiveTab3] = useState(false);

  const PROCESSING = () => {
    return (
      <div className="processing flex">
        <div className="wrap flex flex-col">
          <div className="filter-sec flex aic">
            <div className="search-box flex aic jc">
              <input
                type="text"
                placeholder="Search Order"
                className="txt-search cleanbtn s16"
              />
              <div className="search-icon">
                <SearchOutlinedIcon />
              </div>
            </div>
            <div className="list-view flex aic jc pointer">
              <RemoveRedEyeOutlinedIcon />
            </div>
            <div className="filter-view flex aic jc pointer">
              <ManageSearchOutlinedIcon />
            </div>
          </div>
          <div className="tbl-sec flex aic jc">
            <div className="data-not-found flex aic jc flex-col">
              <img src="/images/empty-data.png" className="null-img" />
              <div className="mesg s12 c888">
                No Orders found.
                <br />
                Try adjusting your filter selections.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const COMPLETED = () => {
    return (
      <div className="completed flex">
        <div className="wrap flex flex-col">
          <div className="filter-sec flex aic">
            <div className="search-box flex aic jc">
              <input
                type="text"
                placeholder="Search Order"
                className="txt-search cleanbtn s16"
              />
              <div className="search-icon">
                <SearchOutlinedIcon />
              </div>
            </div>
            <div className="list-view flex aic jc pointer">
              <RemoveRedEyeOutlinedIcon />
            </div>
            <div className="filter-view flex aic jc pointer">
              <ManageSearchOutlinedIcon />
            </div>
          </div>
          <div className="tbl-sec flex aic jc">
            <div className="data-not-found flex aic jc flex-col">
              <img src="/images/empty-data.png" className="null-img" />
              <div className="mesg s12 c888">
                No Orders found.
                <br />
                Try adjusting your filter selections.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const SHIPPING = () => {
    return (
      <div className="shipping flex">
        <div className="wrap flex flex-col">
          <div className="filter-sec flex aic">
            <div className="search-box flex aic jc">
              <input
                type="text"
                placeholder="Search Order"
                className="txt-search cleanbtn s16"
              />
              <div className="search-icon">
                <SearchOutlinedIcon />
              </div>
            </div>
            <div className="list-view flex aic jc pointer">
              <RemoveRedEyeOutlinedIcon />
            </div>
            <div className="filter-view flex aic jc pointer">
              <ManageSearchOutlinedIcon />
            </div>
          </div>
          <div className="tbl-sec flex aic jc">
            <div className="data-not-found flex aic jc flex-col">
              <img src="/images/empty-data.png" className="null-img" />
              <div className="mesg s12 c888">
                No Orders found.
                <br />
                Try adjusting your filter selections.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={`new-orders flex aic jc  ${sidebar ? "hid" : "show"}`}>
      <div className="wrap flex aic flex-col">
        <div className="feedback-sec flex">
          <div className="dec s12 cfff b6">
            Let us know what you think about the new order management
          </div>
          <div className="btn-feedback flex aic jc">
            <button className="btn cleanbtn cfff b7">Leave feedback</button>
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
              setStep("PROCESSING");
            }}
          >
            PROCESSING
          </div>
          <div
            className={`bar-tab flex aic jc b6 s14 ${
              activeTab2 ? "active-tab" : ""
            }`}
            onClick={() => {
              setActiveTab(false);
              setActiveTab2(true);
              setActiveTab3(false);
              setStep("SHIPPING");
            }}
          >
            SHIPPING
          </div>
          <div
            className={`bar-tab flex aic jc b6 s14 ${
              activeTab3 ? "active-tab" : ""
            }`}
            onClick={() => {
              setActiveTab(false);
              setActiveTab3(true);
              setActiveTab2(false);
              setStep("COMPLETED");
            }}
          >
            COMPLETED
          </div>
        </div>
        <div className="screens flex aic jc">
          {step === "PROCESSING" && PROCESSING()}
          {step === "SHIPPING" && SHIPPING()}
          {step === "COMPLETED" && COMPLETED()}
        </div>
      </div>
    </div>
  );
};
export default NewOrder;
