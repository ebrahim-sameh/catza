import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const { sidebar } = useSelector((state) => state);
  return (
    <div className={`checkout-page flex aic jc mt ${sidebar ? "show" : "hid"}`}>
      <div className="wrap flex aic jc flex-col">
        <div className="block-fb flex aic">
          <div className="left flex flex-col">
            <div className="tag s16 b6">Facebook Conversions API</div>
            <div className="desc s12 b5 b666">
              With the newest privacy updates in iOS 14, please setup “Facebook
              Conversions API”. The Conversions API will help supplement signals
              from your Yezza Store.
            </div>
            <div className="more-lbl s11 b7">Learn More</div>
          </div>
          <div className="right flex">
            <button className="btn button s12">Manage</button>
          </div>
        </div>
        <div className="block-fb flex aic">
          <div className="left flex flex-col">
            <div className="tag s16 b6">Thank You message</div>
            <div className="desc s12 b5 b666">
              Edit “Thank You” message on order confirmation page
            </div>
          </div>
          <div className="right flex">
            <button className="btn button s12">EDIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
