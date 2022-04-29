import React, { useState, useEffect } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  var sliderSetting = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [userData, setUserData] = useState([
    {
      desc: "I used to use WhatsApp manually, busy answering customer messages day and night. After using Catza Store, to my surprise the majority of customers pay directly without my WhatsApp. Sales are up and I have more time than ever before.",
      img: "./images/u-image.jpg",
      name_tag: "Ikhwan, TheaKL",
      title: "Niche: Fashion",
    },
    // {
    //   desc: "Sales kedai kami jatuh akibat covid. Saya guna Catza Store & buat marketing di sosial media untuk recover. Kini, sales dari delivery lebih banyak dari sales di kedai. Saya juga guna Catza Books & Catza Canvas untuk efisyenkan bisnes yang makin besar.",
    //   img: "./images/u-image.jpg",
    //   name_tag: "Azizi, Aroma Johor",
    //   title: "Niche: Makanan",
    // },
    // {
    //   desc: "Masalah saya bila buat Facebook Ads ialah selalu dapat leads tak berkualiti. Bila guna WhatsApp Form Catza, bilangan leads saya berkurang, tapi berkualiti. Saya boleh close deal projek ratusan ribu melalui WhatsApp lebih mudah & cepat.",
    //   img: "./images/u-image.jpg",
    //   name_tag: "Shadee, Rekabrick",
    //   title: "Niche: Pereka Dalaman",
    // },
    // {
    //   desc: "Kami guna Catza Store untuk jual kelas online. Siap setup dalam 30 minit walaupun kami tiada kepakaran buat web. Pelajar saya boleh membeli di web & WhatsApp pada masa yang sama.",
    //   img: "./images/u-image.jpg",
    //   name_tag: "Encik Halian, TheTalkTalk.Co",
    //   title: "Niche : Kelas Bahasa Korea",
    // },
  ]);
  const [priceListA, setPriceListA] = useState([
    { lbl: "No Service Fee" },
    { lbl: "Catza Store" },
    { lbl: "3 WhatsApp Forms" },
    { lbl: "3 User" },
    { lbl: "Extra +10% Yearly Discount" },
    { lbl: "Extra +10% Yearly Discount" },
    { lbl: "[GRAB NOW] Discount until 7th February" },
  ]);
  const [priceListB, setPriceListB] = useState([
    { lbl: "No Service Fee" },
    { lbl: "Catza Store" },
    { lbl: "10 WhatsApp Forms" },
    { lbl: "10 User" },
    { lbl: "PERCUMA Follow Up System (Recommended to boost your Sales)" },
    {
      lbl: "PERCUMA Manage Inventory & Orders from WooCommerce & Shopify (worth RM 1,200)",
    },
    { lbl: "Extra +15% Yearly Discount" },
  ]);
  const [listData, setListData] = useState([
    {
      title: "WhatsApp Form",
      item_list: [
        { title: "Setup as fast as 9 minutes." },
        { title: "Make sales 4x faster on WhatsApp." },
        { title: "Distribute leads automatically to the sales team." },
        { title: "The database is saved automatically." },
        {
          title:
            "Integrasi dengan Facebook Pixel untuk jana leads berkualiti dengan Facebook Ads.",
        },
      ],
    },
    {
      title: "Catza Store",
      item_list: [
        { title: "Setup as fast as 9 minutes." },
        { title: "Web e-commerce: receive sales automatically, 24 hours." },
        {
          title:
            "Integration with Facebook Pixel for the right target audience through Facebook Ads.",
        },
        {
          title:
            "Easily monitor the conversion rate of your e-commerce funnel.",
        },
        {
          title: "Integration with Google Analytics to study buyer behavior.",
        },
      ],
    },
    {
      title: "Online Payment",
      item_list: [
        { title: "No need for SSM." },
        { title: "Ready in 3 minutes" },
        {
          title: "Accept online payments, credit cards & bank transfers.",
        },
      ],
    },
    {
      title: "Delivery",
      item_list: [
        { title: "Manage many bookings easily." },
        { title: "Metod tempahan : self pick up, courier & rider." },
        {
          title: "Integration: Easyparcel, Lalamove.",
        },
        {
          title:
            "Manage stock in one place. Integration with WooCommerce & Shopify.",
        },
      ],
    },
    {
      title: "Marketing & Sales",
      item_list: [
        {
          title:
            "Setup Facebook Pixel & Google Analytics with just copy & paste ID",
        },
        { title: "Retargeting hot leads dengan mudah di Facebook Ads." },
        {
          title: "Retargeting hot leads easily on Facebook Ads.",
        },
        {
          title: "Monitor your Catza Store conversion rate in real time.",
        },
      ],
    },
    {
      title: "Sistem Akaun",
      item_list: [
        {
          title: "Integration with Catza Books bookkeeping system.",
        },
        {
          title:
            "100% of sales are automatically recorded to Catza Books. No need for bookkeeping staff to key in one by one.",
        },
        {
          title:
            "Record your money in and out easily, even without an account base.",
        },
      ],
    },
    {
      title: "Integration",
      item_list: [
        {
          title: "Webhook is available for advanced users.",
        },
        {
          title: "Integration with over 3000 software via Zapier, Integromat.",
        },
      ],
    },
  ]);
  const List = ({ data }) => {
    const [rotate, setRotate] = useState(false);
    const { title, item_list } = data;
    return (
      <>
        <div className="item flex flex-col">
          <div
            className="item-head flex aic"
            onClick={(e) => setRotate(!rotate)}
          >
            <div className="item-titile">{title}</div>
            <div>
              <img
                src="./images/chevron-icon.png"
                className={`arrow-icon ${rotate ? "move" : ""}`}
              />
            </div>
          </div>

          <div className={`item-body flex flex-col ${rotate ? "" : "hide"}`}>
            {item_list.map((item, index) => (
              <div className="line flex aic">
                <div className="dot"></div>
                <div className="des">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="home flex aic jc">
      <div className="wrap wrapWidth ">
        <div className="home-block flex aic jc flex-col">
          <div className="slug font b7">
            Build Your Online Store In 9 Minutes
          </div>
          <div className="home-social flex aic jc flex-col">
            <div className="about-guys flex aic">
              <img src="./images/user-img.jpeg" className="guys-img" />
              <div className="content flex flex-col">
                <div className="c-large s18 b5 ct">
                  Guys, I use Catza it's really fast & easy!
                  <br /> Customers praise the website for being easy to use!
                </div>
              </div>
            </div>
            <div className="btn-trail button cleanbtn cfff b6 s18">
              Register for a 14 day trial
            </div>
          </div>
        </div>
        <div className="tile-section-dark flex flex-col">
          <div className="section-title">
            Selling on WhatsApp
            <br /> & e-commerce
            <br /> 4 times easier
          </div>
          <div className="w-row flex aic">
            <div className="w-row-l flex">
              <div className="square-box-dark-2 flex aic flex-col">
                <div className="box-heading">WhatsApp Form</div>
                <div className="samll-heading">
                  Shorten chat, speed up sales.
                </div>
                <div className="video-box flex aic jc">
                  <img
                    src="./images/img_WhatsApp.png"
                    className="whatsapp-img"
                  />
                  <div className="video-play flex aic jc">
                    <img
                      src="./images/icon-video-play.svg"
                      className="video-icon"
                    />
                  </div>
                </div>
                <div className="txt-block">
                  Ideal if your customers like to ask at
                  <br /> WhatsApp before buying.
                </div>
              </div>
            </div>
            <div className="w-row-r flex">
              <div className="square-box-dark-2 flex aic flex-col">
                <div className="box-heading">Catza Store</div>
                <div className="samll-heading">
                  Upload the product, the website is ready.
                </div>
                <div
                  className="video-box flex aic jc"
                  //   style={{ backgroundImage: `url(/images/Catza_Store.png)` }}
                >
                  <img
                    src="./images/Catza_Store.png"
                    className="whatsapp-img"
                  />
                </div>
                <div className="txt-block">
                  Ideal if your customers are used to buying at
                  <br /> web e-commerce.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Catza-usage flex flex-col">
          <div className="user-group flex aic">
            <img src="./images/avatar-01.png" className="img-user" />
            <img src="./images/avatar-02.png" className="img-user" />
            <img src="./images/avatar-03.png" className="img-user" />
          </div>
          <div className="heading-4 flex">
            <span className="txt-blue">Catza</span>suitable for various
            businesses, products & services
          </div>
          <div className="columns-2 flex aic">
            <div className="whatsapp-img-block flex flex-col">
              <img src="./images/whatsapp-1.png" className="img-what" />
              <div className="tag">Clinic</div>
            </div>
            <div className="whatsapp-img-block flex flex-col">
              <img src="./images/whatsapp-2.png" className="img-what" />
              <div className="tag">Clothing store</div>
            </div>
            <div className="whatsapp-img-block flex flex-col">
              <img src="./images/whatsapp-3.png" className="img-what" />
              <div className="tag">Custom Cake Shop</div>
            </div>
          </div>
        </div>
        <div className="block-3 flex">
          <div className="tile-section-home-1">
            <Slider {...sliderSetting}>
              <div>
                {userData.map((item, index) => (
                  <div className="flex aic" ket={index}>
                    <div className="container flex flex-col aic">
                      <div className="desc">{item.desc}</div>
                      <img src={item.img} className="u-image" />
                      <div className="name-tag">{item.name_tag}</div>
                      <div className="title">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Slider>
          </div>
        </div>
        <div className="block-4 flex aic jc flex-col">
          <div className="heading-b">
            From Sales to Management, Catza Makes It Easy For You To Do
            Business!
          </div>
          <div className="faq-container">
            {listData.map((item, i) => (
              <List data={item} />
            ))}
          </div>
        </div>
        <div className="pricing-block flex flex-col">
          <div className="pricing-heading">
            Start With A <span className="span-txt">Free Plan & Upgrade </span>
            Once Your Business Grows
          </div>
          <div className="pricing-grid">
            <div className="start-box flex flex-col">
              <div className="tag">START</div>
              <div className="desc">
                For small businesses who want to increase sales on the
                e-commerce & WhatsApp web.
              </div>
              <div className="price-wrap flex aic">
                <div className="o-price">147</div>
                <div className="d-price">50</div>
                <div className="unit">RM per month</div>
              </div>
              <div className="btn-trail button cleanbtn cfff b6 s18">
                Register for a 14 day trial
              </div>
              <div className="price-listing flex flex-col">
                {priceListA.map((item, index) => (
                  <div className="list-item flex">
                    <div className="icon flex aic jc">
                      <img src="./images/check-small.svg" className="img" />
                    </div>
                    <div className="lbl">{item.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="growth-box flex flex-col">
              <div className="tag">GROWTH</div>
              <div className="desc">
                Untuk bisnes yang berkembang & mempunyai banyak staf & sales
                channel.
              </div>
              <div className="price-wrap flex aic">
                <div className="o-price">297</div>
                <div className="d-price">197</div>
                <div className="unit">RM per month</div>
              </div>
              <div className="btn-trail button cleanbtn cfff b6 s18">
                Register for a 14 day trial
              </div>
              <div className="price-listing flex flex-col">
                {priceListB.map((item, index) => (
                  <div className="list-item flex">
                    <div className="icon flex aic jc">
                      <img src="./images/check-small.svg" className="img" />
                    </div>
                    <div className="lbl">{item.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="btm-block flex">
          <div className="home-block flex aic jc flex-col">
            <div className="slug font b7">Use Free 14 Days</div>
            <div className="slug-small">Trusted over 53,000 businesses!</div>
            <div className="home-social flex aic jc flex-col">
              <div className="about-guys flex aic">
                <img src="./images/user-men.jpg" className="guys-img" />
                <div className="content flex aic jc flex-col">
                  <div className="c-large s18 b5 ct">
                    Better quality leads
                    <br /> with Catza
                  </div>
                  <div className="mute-text">Marriage, Rekabarik</div>
                </div>
              </div>
              <div className="btn-trail button cleanbtn cfff b6 s18">
                Register for a 14 day trial
              </div>
            </div>
          </div>
        </div>
        <div className="footer flex">
          <div className="footer-meta flex">
            <div className="col flex flex-col">
              <img src="./images/logo-02.svg" className="logo-2 mb" />
              <div className="copy-right mb">
                © 2022 Catza. All rights reserved.
              </div>
              <div className="social flex aic mb">
                <img
                  src="./images/icon-Twitter-white.svg"
                  className="s-logo-2 mb"
                />
                <img
                  src="./images/icon-Instagram-white.svg"
                  className="s-logo-2 mb"
                />
                <img
                  src="./images/icon-LinkedIn-white.svg"
                  className="s-logo-2 mb"
                />
                <img
                  src="./images/icon-YouTube-white.svg"
                  className="s-logo-2 mb"
                />
              </div>
            </div>
            <div className="col flex flex-col">
              <div className="item">About Us</div>
              <div className="item">Example Use</div>
              <div className="item">Help Center</div>
              <div className="item">WhatsApp Us</div>
            </div>
            <div className="col flex flex-col">
              <div className="item">Log in</div>
              <div className="item">Try 14 Days</div>
              <div className="item">Price</div>
              <div className="item">Affiliate</div>
            </div>
            <div className="col flex flex-col">
              <div className="item">Terms of Use</div>
              <div className="item">Police Private</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
