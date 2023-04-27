import React, { useEffect, useState } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../../i18n.json";
import { useRouter } from "next/router";
import Langs from "../../langs";

const { locales } = i18nConfig;

const Header = (props) => {
  const router = useRouter();
  const { t, lang } = useTranslation("common");

  const [scroll, setScroll] = useState(false);
  const scrollFunc = () => {
    window.onscroll = function () {
      if (window.pageYOffset >= 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  };

  useEffect(() => {
    scrollFunc();
  }, [router.locale]);

  const popperConfig = {
    strategy: "fixed",
  };

  

  return (
    <>
      <header
        className={`header  justify-content-between align-items-center  ${
          props.isWhite ? "white" : ""
        } ${scroll ? "active" : ""}  `}
      >
        <a type="button" href="/" className="cursor-pointer">
          <div>
          <img className="cursor" src="/static/logo.png" alt="" />
          </div>
        </a>
        {/* <div>
          <ul className="d-flex align-items-center lang-link p-0 langs-mobile my-lg-0 my-3">
            <li
              onClick={() => {
                changeLang("az");
              }}
              className={
                language == "az"
                  ? "color-black border-r pr-3 cursor"
                  : "border-r pr-3 cursor"
              }
            >
              AZ
            </li>
            <li
              onClick={() => {
                changeLang("en");
              }}
              className={
                language == "en"
                  ? "color-black border-r px-3 cursor"
                  : "border-r px-3 cursor"
              }
            >
              EN
            </li>
            <li
              onClick={() => {
                changeLang("ru");
              }}
              className={
                language == "ru"
                  ? "color-black border-r px-3 cursor"
                  : "border-r px-3 cursor"
              }
            >
              RU
            </li>
          </ul>
        </div> */}

        <Langs/>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        
        <div className="menu align-items-center  position-relative">
          <ul className="p-0 nav-links my-lg-0 my-5 animated fadeInRightBig">
            <li>
              <a href="/about-us" className="d-flex align-items-baseline">
              Haqqımızda
              <img className="ml-4" src="/static/header-arrow.svg" alt=""/>
              </a>
            </li>
            <li>
              <a href="/production" className="d-flex align-items-baseline">İstehsalat
              <img className="ml-4" src="/static/header-arrow.svg" alt=""/></a>
            </li>
            <li>
              <a href="/retail" className="d-flex align-items-baseline">Retail
              <img className="ml-4" src="/static/header-arrow.svg" alt=""/></a>
            </li>
            <li>
              <a href="/export" className="d-flex align-items-baseline">İxrac <img className="ml-4" src="/static/header-arrow.svg" alt=""/> </a>
            </li>
            <li>
              <a href="/contact" className="d-flex align-items-baseline">{t("contact")} <img className="ml-4" src="/static/header-arrow.svg" alt=""/></a>
            </li>
          </ul>

          

          {/* <div className=" d-lg-none d-flex align-items-center justify-content-between mobile-socials mb-0 mt-5">
            <a
              className="my-lg-0 my-5 "
              href="https://www.facebook.com/5aConstructionn?mibextid=LQQJ4d"
              target="_blank"
            >
              FACEBOOK
            </a>
            <a
              className="my-lg-0 my-5 "
              href="https://instagram.com/5a_construction?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              INSTAGRAM
            </a>
            <a
              className="my-lg-0 my-5 "
              href="https://www.linkedin.com/company/5a-construction/"
              target="_blank"
            >
              LINKEDIN
            </a>
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
