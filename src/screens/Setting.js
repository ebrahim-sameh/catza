import React from "react";

import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Setting = () => {
  return (
    <div className="setting-page flex aic jc mt">
      <div className="wrap flex aic jc flex-col">
        <div className="setting-block flex flex-col">
          <div className="item flex aic">
            <div className="icon">
              <SettingsOutlinedIcon />
            </div>
            <div className="meta flex-col">
              <div className="tag s16 b6">General</div>
              <div className="desc s13 b5 c777">
                Company name, address, registration number
              </div>
            </div>
          </div>
          <div className="item flex aic">
            <div className="icon">
              <PersonOutlineOutlinedIcon />
            </div>
            <div className="meta flex-col">
              <div className="tag s16 b6">Account settings</div>
              <div className="desc s13 b5 c777">
                Avatar, name, sign in methods, payment card
              </div>
            </div>
          </div>
          <div className="item flex aic">
            <div className="icon">
              <NotificationsNoneOutlinedIcon />
            </div>
            <div className="meta flex-col">
              <div className="tag s16 b6">Notifications</div>
              <div className="desc s13 b5 c777">
                Email and Application notifications
              </div>
            </div>
          </div>
          <div className="item flex aic">
            <div className="icon">
              <DeleteOutlineOutlinedIcon />
            </div>
            <div className="meta flex-col">
              <div className="tag s16 b6">Delete Company Settings</div>
              <div className="desc s13 b5 c777">Delete company from Catza</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
