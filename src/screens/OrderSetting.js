import React from "react";
import { useDispatch, useSelector } from "react-redux";

const OrderSetting = () => {
  const { sidebar } = useSelector((state) => state);

  return (
    <div className={`order-setting flex aic jc ${sidebar ? "show" : "hid"}`}>
      <div className="wrap flex aic jc flex-col">
        <div className="feedback-sec flex">
          <div className="dec s12 cfff b6">
            Let us know what you think about the new order settings
          </div>
          <div className="btn-feedback flex aic jc">
            <button className="btn cleanbtn cfff b7">Leave feedback</button>
          </div>
        </div>
        <div className="desc-block flex aic">
          <div className="left flex flex-col">
            <div className="desc-tag b6 s14">
              We moved zones and integrations
            </div>
            <div className="desc-lbl s13 b5">
              You can find your shipping zones and integration settings in
              Advanced Setup.
            </div>
          </div>
          <div className="right felx">
            <button className="btn button">SETUP</button>
          </div>
        </div>
        <div className="desc-block flex aic">
          <div className="left flex flex-col">
            <div className="desc-tag b6 s14">Minimum order amount</div>
            <div className="desc-lbl s13 b5">
              Set minimum order amount for checkout.
            </div>
          </div>
          <div className="right felx">
            <button className="btn button">SETUP</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSetting;
