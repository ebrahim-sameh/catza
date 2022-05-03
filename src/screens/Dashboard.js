import React from "react";
import { useLocation, Link, useHistory } from "react-router-dom";
import Sidebar from "../components/Sidebar";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useDispatch, useSelector } from "react-redux";

const Dashboard = () => {
  const history = useHistory();
  const { sidebar } = useSelector((state) => state);
  //   console.log("This is my history", history?.location?.pathname.split("/"));

  return (
    <div className={`dashboard-page flex aic jc ${sidebar ? "show" : "hid"}`}>
      <div className="wrap flex aic flex-col">
        <div className="feedback-sec flex">
          <div className="dec s12 cfff b6">
            Follow up potential sales from yesterday
          </div>
          <div className="btn-feedback flex aic jc">
            <button className="btn cleanbtn cfff b7">RM 0.00 (0 leads)</button>
          </div>
        </div>
        <div className="feedback-secb flex flex-col">
          <div className="dec s12 cfff b6">
            want to stop paying your subscription?
          </div>
          <div className="dec s10 cfff b6">
            Refer businesses to use Yezza & earn up to RM 200 per new merchant
            with our new affiliate program.
          </div>
          <div className="btn-feedback flex aic">
            <button className="btn button cleanbtn cfff b7">
              RM 0.00 (0 leads)
            </button>
          </div>
        </div>
        <div className="feedback-sec-c flex aic">
          <div className="left flex aic">
            <div className="icon flex">
              <AccessTimeIcon />
            </div>
            <div className="flex flex-col">
              <div className="dec s12 cfff b6">
                Your Yezza trial will end on 22/04/2022
              </div>
              <div className="dec s12 cfff b6">
                Your Books trial will end on 16/04/2022
              </div>
            </div>
          </div>
          <div className="right flex aic jc">
            <button className="btn button cleanbtn">View</button>
          </div>
        </div>
        <div className="info flex aic">
          <div className="info-item flex flex-col aic jc">
            <div className="info-numb s16 font b6">-</div>
            <div className="info-lbl s10 font">Orders to fulfill</div>
          </div>
          <div className="info-item flex flex-col aic jc">
            <div className="info-numb s16 font b6">-</div>
            <div className="info-lbl s10 font">Units sold today</div>
          </div>
          <div className="info-item flex flex-col aic jc">
            <div className="info-numb s16 font b6">-</div>
            <div className="info-lbl s10 font">Customers today</div>
          </div>
        </div>
        <div className="quick-action flex flex-col">
          <div className="info-lbl b6">Quick action</div>
          <div className="action-box flex aic">
            <div className="card flex flex-col aic">
              <div className="icon">
                <LocalAtmIcon />
              </div>
              <div className="lbl s12">
                Record
                <br />
                Income
              </div>
            </div>
            <div className="card flex flex-col aic">
              <div className="icon">
                <LocalAtmIcon />
              </div>
              <div className="lbl s12">
                Record
                <br />
                Expense
              </div>
            </div>
            <div className="card flex flex-col aic">
              <div className="icon">
                <LocalAtmIcon />
              </div>
              <div className="lbl s12">
                Collect
                <br />
                Payment
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
