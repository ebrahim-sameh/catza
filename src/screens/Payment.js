import React, { useState, useEffect } from "react";
import Switch from "@mui/material/Switch";
import { DropDownIcon } from "../Icons";

const Payment = () => {
  const [show, setShow] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show2, setShow2] = useState(false);
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
    <div className="payment-page flex aic jc mt">
      <div className="wrap flex aic jc flex-col">
        <div className="payment-lists flex flex-col">
          {/* First List */}
          <div className="list-item flex flex-col">
            <div className="meta flex aic" onClick={(e) => setShow(!show)}>
              <div className="left flex flex-col">
                <div className="tag s16 b6">Online Payment</div>
                <div className="desc s13 b5">
                  Activate Credit / Debit Card and FPX (Online Banking)
                </div>
              </div>
              <div className="right flex aic">
                <DropDownIcon />
              </div>
            </div>
            <div className={`data-list ${show ? "show" : ""}`}>
              <div className="shipping-action flex flex-col">
                <div className="item flex aic">
                  <div className="left flex b6 s14">Method</div>
                  <div className="center flex b6 s14">Activate</div>
                  <div className="right flex b6 s14"></div>
                </div>
                <div className="item flex aic">
                  <div className="left flex b6 s14 flex-col">
                    <div className="s14 b5">Stripe</div>
                    <div className="l-desc s13 b4">
                      Individual Sellers or
                      <br /> SSM Registered Business
                    </div>
                  </div>
                  <div className="center flex b6 s14">
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </div>
                  <div className="right flex b6 s14">
                    <button className="btn button s12">ACTIVATE</button>
                  </div>
                </div>
                <div className="item flex aic">
                  <div className="left flex b6 s14 flex-col">
                    <div className="s14 b5">SecurePay</div>
                    <div className="l-desc s13 b4">SSM Registered Business</div>
                  </div>
                  <div className="center flex b6 s14">
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </div>
                  <div className="right flex b6 s14">
                    <button className="btn button s12">ACTIVATE</button>
                  </div>
                </div>
                <div className="item flex aic">
                  <div className="left flex b6 s14 flex-col">
                    <div className="s14 b5">Billplz</div>
                    <div className="l-desc s13 b4"></div>
                  </div>
                  <div className="center flex b6 s14">
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </div>
                  <div className="right flex b6 s14">
                    <button className="btn button s12">ACTIVATE</button>
                  </div>
                </div>
                <div className="item flex aic">
                  <div className="left flex b6 s14 flex-col">
                    <div className="s14 b5">MOLPay</div>
                    <div className="l-desc s13 b4"></div>
                  </div>
                  <div className="center flex b6 s14">
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </div>
                  <div className="right flex b6 s14">
                    <button className="btn button s12">ACTIVATE</button>
                  </div>
                </div>
                <div className="item flex aic">
                  <div className="left flex b6 s14 flex-col">
                    <div className="s14 b5">2c2p</div>
                    <div className="l-desc s13 b4"></div>
                  </div>
                  <div className="center flex b6 s14">
                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </div>
                  <div className="right flex b6 s14">
                    <button className="btn button s12">ACTIVATE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Second List */}
          <div className="list-item flex flex-col">
            <div className="meta flex aic" onClick={(e) => setShow3(!show3)}>
              <div className="left flex flex-col">
                <div className="tag s16 b6">Bank Transfer</div>
                <div className="desc s13 b5">Add bank for manual payment</div>
              </div>
              <div className="right flex aic">
                <DropDownIcon />
              </div>
            </div>
            <div className={`data-list bd-bank ${show3 ? "show" : ""}`}>
              <div>NO BANK ADDED YET</div>
            </div>
          </div>
          {/* Third List */}
          <div className="list-item flex flex-col">
            <div className="meta flex aic" onClick={(e) => setShow2(!show2)}>
              <div className="left flex flex-col">
                <div className="tag s16 b6">Partial payment</div>
                <div className="desc s13 b5">
                  Allow your customers to pay partially
                </div>
              </div>
              <div className="right flex aic">
                <DropDownIcon />
              </div>
            </div>
            <div
              className={`data-list bd-amount flex-col ${show2 ? "show" : ""}`}
            >
              <div className="edit flex">
                <div className="edit-lbl s13 b5">Edit</div>
              </div>
              <div className="amount-header flex aic">
                <div className="left flex s16 b6">Amount Range</div>
                <div className="right flex s16 b6">Min Payment</div>
              </div>
              <div className="amount-header flex aic">
                <div className="left flex s13 b5">Payment period</div>
                <div className="right flex s13 b5">0 days</div>
              </div>
            </div>
          </div>
        </div>
        <div className="learn-more flex aic jc s14 b5">
          Learn more about <span className="more-lbl"> Payments</span>
        </div>
      </div>
    </div>
  );
};

export default Payment;
