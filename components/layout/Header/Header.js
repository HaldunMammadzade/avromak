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
          props.isWhite ? "white " : ""
        } ${scroll ? "active " : " "}  `}
      >
        <a type="button" href="/" className="cursor-pointer">
          <div>
          <img  className="cursor" src="/static/logo.png" alt="" />
          </div>
        </a>
        

        <Langs/>
        
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span class="navicon"></span>
        </label>
        
        
        <div className="menu align-items-center  position-relative">
          <ul className="p-0 nav-links my-lg-0 my-5 animated fadeInRightBig">
            <li>
              <a href="/about-us" className="d-flex align-items-baseline">
              {t("about")}
              <img className="ml-4" src="/static/header-arrow.svg" alt=""/>
              </a>
            </li>
            <li>
              <a href="/production" className="d-flex align-items-baseline"> {t("prod")}
              <img className="ml-4" src="/static/header-arrow.svg" alt=""/></a>
            </li>
            <li>
              <a href="/retail" className="d-flex align-items-baseline">{t("retail")}
              <img className="ml-4" src="/static/header-arrow.svg" alt=""/></a>
            </li>
            <li>
              <a href="/export" className="d-flex align-items-baseline"> {t("export")} <img className="ml-4" src="/static/header-arrow.svg" alt=""/> </a>
            </li>
            <li>
              <a href="/contact" className="d-flex align-items-baseline">{t("contactUs")} <img className="ml-4" src="/static/header-arrow.svg" alt=""/></a>
            </li>
          </ul>

        </div>
      </header>
    </>
  );
};

export default Header;
