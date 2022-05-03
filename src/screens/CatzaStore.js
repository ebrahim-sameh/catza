import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import ViewCompactOutlinedIcon from "@mui/icons-material/ViewCompactOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useDispatch, useSelector } from "react-redux";

const CatzaStore = () => {
  const { sidebar } = useSelector((state) => state);
  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };
  return (
    <div className={`catza-store flex aic jc ${sidebar ? "show" : "hid"}`}>
      <div className="wrap flex aic jc flex-col">
        <div className="store flex aic mt">
          <img className="store-img" src="/images/avatar-02.png" />
          <div className="store-desc flex flex-col">
            <div className="lbl s20">Test Store</div>
            <Link to="https://demo311.yezza.store/" className="s14 b5 link">
              https://demo311.yezza.store/
            </Link>
            <div className="action flex aic">
              <button className="btn-edit button">EDIT</button>
              <button className="btn-share button">SHARE</button>
            </div>
          </div>
        </div>
        <div className="store-settings flex flex-col">
          <div className="setting-heading s16 b6 c999">Store Settings</div>
          <div className="setting-block flex flex-col">
            <div className="setting-item flex pointer">
              <div className="icon flex aic jc">
                <ViewCompactOutlinedIcon className="pointer" />
              </div>
              <div className="meta flex flex-col">
                <div className="lbl s16 b6">Catza Store Layouts</div>
                <div className="desc s14 c888">
                  Choose your preferred layout
                </div>
              </div>
            </div>
            <div className="setting-item flex pointer">
              <div className="icon flex aic jc">
                <FeaturedPlayListOutlinedIcon className="pointer" />
              </div>
              <div className="meta flex flex-col">
                <div className="lbl s16 b6">Checkout Form</div>
                <div className="desc s14 c888">
                  Collect data from your customer
                </div>
              </div>
            </div>
            <div className="setting-item flex pointer">
              <div className="icon flex aic jc">
                <CampaignOutlinedIcon className="pointer" />
              </div>
              <div className="meta flex flex-col">
                <div className="lbl s16 b6">Promo Banner</div>
                <div className="desc s14 c888">Create your promo banner</div>
              </div>
            </div>
            <div className="setting-item flex">
              <div className="icon flex aic jc">
                <ChatOutlinedIcon className="pointer" />
              </div>
              <div className="meta flex aic">
                <div className="flex flex-col">
                  <div className="lbl s16 b6">Sales Pop-up</div>
                  <div className="desc s14 c888">
                    Show recent buyer from your Catza Store
                  </div>
                </div>
                <div className="switch-btn flex">
                  <Switch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
              </div>
            </div>
            <div className="setting-item flex">
              <div className="icon flex aic jc">
                <BlockOutlinedIcon className="pointer" />
              </div>
              <div className="meta flex aic">
                <div className="flex flex-col">
                  <div className="lbl s16 b6">Sold Out Products</div>
                  <div className="desc s14 c888">
                    Hide your sold out products
                  </div>
                </div>
                <div className="switch-btn flex">
                  <Switch
                    checked={checked2}
                    onChange={handleChange2}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
              </div>
            </div>
            <div className="setting-item flex pointer">
              <div className="icon flex aic jc">
                <InventoryOutlinedIcon className="pointer" />
              </div>
              <div className="meta flex flex-col">
                <div className="lbl s16 b6">Products inventory visibility</div>
                <div className="desc s14 c888">
                  Show your current product inventory level
                </div>
              </div>
            </div>
            <div className="setting-item flex pointer">
              <div className="icon flex aic jc">
                <LocalShippingOutlinedIcon className="pointer" />
              </div>
              <div className="meta flex flex-col">
                <div className="lbl s16 b6">Manage Shipping Zones</div>
                <div className="desc s14 c888">
                  Manage shipping zones for Yezza Store
                </div>
              </div>
            </div>
            <div className="setting-item flex pointer">
              <div className="icon flex aic jc">
                <LanguageOutlinedIcon className="pointer" />
              </div>
              <div className="meta flex flex-col">
                <div className="lbl s16 b6">Custom domain</div>
                <div className="desc s14 c888">
                  Buy or use your own domain for Yezza Store
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatzaStore;
