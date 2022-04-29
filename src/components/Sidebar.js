import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { DropDownIcon } from "../Icons";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SettingsInputAntennaOutlinedIcon from "@mui/icons-material/SettingsInputAntennaOutlined";

export const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const nav = [
    {
      label: "Home",
      slug: "/home",
      icon: <HomeOutlinedIcon />,
      subMenu: [],
    },
    {
      label: "Manage",
      slug: "/admin/orders-new",
      icon: <BusinessCenterOutlinedIcon />,
      expose: <DropDownIcon />,
      subMenu: [
        {
          lbl: "Orders",
          slug: "/admin/orders-new",
          icon: <LocalShippingOutlinedIcon />,
        },
        {
          lbl: "Customers",
          slug: "/admin/Customers",
          icon: <PersonOutlineRoundedIcon />,
        },
        {
          lbl: "Transactions",
          slug: "/admin/transaction",
          icon: <PaymentsOutlinedIcon />,
        },
        {
          lbl: "Inventory",
          slug: "/admin/products-inventory",
          icon: <InventoryOutlinedIcon />,
        },
        {
          lbl: "Orders",
          slug: "/admin/orders",
          icon: <LocalShippingOutlinedIcon />,
        },
      ],
    },
    {
      label: "Setup",
      slug: "/setup",
      icon: <LocalMallOutlinedIcon />,
      expose: <DropDownIcon />,
      subMenu: [
        {
          lbl: "Products",
          slug: "/admin/products",
          icon: <ViewInArOutlinedIcon />,
        },
        {
          lbl: "Sale Team",
          slug: "/admin/sales-team",
          icon: <PeopleAltOutlinedIcon />,
        },
        {
          lbl: "WhatsApp Forms",
          slug: "/admin/forms",
          icon: <FeaturedPlayListOutlinedIcon />,
        },
        {
          lbl: "Catza Store",
          slug: "/admin/catza-store",
          icon: <ShoppingCartOutlinedIcon />,
        },
        {
          lbl: "Coupons",
          slug: "/admin/coupons",
          icon: <LocalOfferOutlinedIcon />,
        },
        {
          lbl: "Shipping",
          slug: "/admin/shipping-new",
          icon: <LocalShippingOutlinedIcon />,
        },
        {
          lbl: "Order settings",
          slug: "/admin/order-settings",
          icon: <Inventory2OutlinedIcon />,
        },
        {
          lbl: "Payment",
          slug: "/admin/payment",
          icon: <PaymentsOutlinedIcon />,
        },
        {
          lbl: "Checkout",
          slug: "/admin/checkout",
          icon: <LockOutlinedIcon />,
        },
        {
          lbl: "Advanced Setup",
          slug: "/admin/settings/advance-new",
          icon: <SettingsInputAntennaOutlinedIcon />,
        },
      ],
    },
    {
      label: "Setting",
      slug: "/admin/settings",
      icon: <SettingsOutlinedIcon />,
      subMenu: [],
    },
  ];

  const SubMenu = ({ data }) => {
    const { subMenu } = data;
    return (
      <>
        <div
          className={`sub-menu flex flex-col ${
            show && subMenu.length ? "show-menu" : ""
          }`}
        >
          {subMenu.map((i, index) => (
            <NavLink to={`${i.slug}`} className="sub-item flex aic">
              <div className="icon-sub">{i.icon}</div>
              <div className="sub-lbl">{i.lbl}</div>
            </NavLink>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="sidebar abs">
      <div className="wrap flex flex-col">
        <div className="item-data flex">
          <div className="item-img flex">
            <img src="/images/default.png" className="user-img" />
          </div>
          <div className="item-name flex flex flex-col">
            <div className="name s3 b6">Muddasir Nazir</div>
            <div className="desi s12 b5 font">Admin</div>
          </div>
        </div>
        {nav.map((item, index) => (
          <>
            <NavLink
              key={index}
              to={`${item.slug}`}
              className="item flex aic jc"
              onClick={(e) => {
                setShow(!show);
              }}
            >
              {/* <div className="menu-item flex aic"> */}
              <div className="ico">{item.icon}</div>
              <div className="lbl font s10">{item.label}</div>
              <div className="icon-arrow flex aic jc">{item.expose}</div>
              {/* </div> */}
            </NavLink>
            <SubMenu data={item} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
