import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { DropDownIcon } from "../Icons";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import { useDispatch, useSelector } from "react-redux";

const AdvanceSetup = () => {
  const { sidebar } = useSelector((state) => state);
  const [show, setShow] = useState(false);

  return (
    <div className={`addance-setup flex aic jc mt ${sidebar ? "show" : "hid"}`}>
      <div className="wrap flex aic jc">
        <div className="payment-lists flex flex-col">
          {/* First List */}
          <div className="list-item flex flex-col">
            <div className="meta flex aic" onClick={(e) => setShow(!show)}>
              <div className="left flex flex-col">
                <div className="tag s16 b6">Integration</div>
                <div className="desc s13 b5">
                  Analytics, e-commerce integrations, domain, webhook
                </div>
              </div>
              <div className="right flex aic">
                <DropDownIcon />
              </div>
            </div>
            <div className={`data-list ${show ? "show" : ""}`}>
              <div className="shipping-action flex flex-col">
                <div className="item flex flex-col">
                  <div className="left flex b6 s14">Analytics</div>
                  <div className="center flex b6 s14">
                    Analyze and measure your business performance
                  </div>
                  <div className="right flex b6 s14">Learn More</div>
                </div>
                <div className="item flex aic">
                  <div className="left flex b6 s14">
                    <div className="ico ">
                      <FacebookOutlinedIcon />
                    </div>{" "}
                    Facebook Pixel
                  </div>
                  <div className="center flex b6 s14">
                    {/* Analyze and measure your business performance */}
                  </div>
                  <div className="right flex b6 s14">
                    <button className="btn button">MANAGE</button>
                  </div>
                </div>
                <div className="item flex aic">
                  <div className="left flex b6 s14">
                    <div className="ico ">
                      <InsightsOutlinedIcon />
                    </div>
                    Google Analytics
                  </div>
                  <div className="center flex b6 s14">
                    {/* Analyze and measure your business performance */}
                  </div>
                  <div className="right flex b6 s14">
                    <button className="btn button">MANAGE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSetup;
