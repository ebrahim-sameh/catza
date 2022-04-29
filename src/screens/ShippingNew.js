import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";

const ShippingNew = () => {
  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };
  const handleChange3 = (event) => {
    setChecked3(event.target.checked);
  };
  return (
    <div className="shipping-new-page flex aic jc mt">
      <div className="wrap flex aic jc flex-col">
        <div className="desc-block flex flex-col">
          <div className="desc-tag b6 s14">We moved zones and integrations</div>
          <div className="desc-lbl s13 b5">
            You can find your shipping zones and integration settings in
            Advanced Setup.
          </div>
        </div>
        <div className="catza-shipping flex flex-col">
          <div className="heading-tag s16 b6">Catza Shipping</div>
          <div className="c-desc s12 b5">
            Auto-calculate rates and arrange shipments quicker
          </div>
        </div>
        <div className="shipping-action flex flex-col">
          <div className="item flex aic">
            <div className="left flex b6 s14">Method</div>
            <div className="center flex b6 s14">Activate</div>
            <div className="right flex b6 s14"></div>
          </div>
          <div className="item flex aic">
            <div className="left flex b6 s14">Courier</div>
            <div className="center flex b6 s14">
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
            <div className="right flex b6 s14">
              <button className="btn button">SETUP</button>
            </div>
          </div>
          <div className="item flex aic">
            <div className="left flex b6 s14">Local Delivery</div>
            <div className="center flex b6 s14">
              <Switch
                checked={checked2}
                onChange={handleChange2}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
            <div className="right flex b6 s14">
              <button className="btn button">SETUP</button>
            </div>
          </div>
        </div>
        <div className="feedback-sec flex">
          <div className="dec s12 cfff b6">
            Let us know what you think about Catza Shipping
          </div>
          <div className="btn-feedback flex aic jc">
            <button className="btn cleanbtn cfff b7">Leave feedback</button>
          </div>
        </div>
        <div className="catza-shipping flex flex-col">
          <div className="heading-tag s16 b6">Store Pickup</div>
          <div className="c-desc s12 b5">
            Set pickup address and instructions for your customers
          </div>
        </div>
        <div className="shipping-action flex flex-col">
          <div className="item flex aic">
            <div className="left flex b6 s14">Method</div>
            <div className="center flex b6 s14">Activate</div>
            <div className="right flex b6 s14"></div>
          </div>
          <div className="item flex aic">
            <div className="left flex b6 s14">Store Pickup</div>
            <div className="center flex b6 s14">
              <Switch
                checked={checked3}
                onChange={handleChange3}
                inputProps={{ "aria-label": "controlled" }}
              />
            </div>
            <div className="right flex b6 s14">
              <button className="btn button">SETUP</button>
            </div>
          </div>
        </div>
        <div className="read-more s14 b5">
          Learn more about <span className="link">Shipping</span>
        </div>
      </div>
    </div>
  );
};

export default ShippingNew;
