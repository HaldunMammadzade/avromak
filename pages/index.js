import Head from "next/head";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../i18n.json";
import Slider from "react-slick";
const { locales } = i18nConfig;

export default function Home() {
  const { t, lang } = useTranslation("common");
  const pageslider = React.createRef();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      
    ],
  };
  return (
    <>
      <Head>
        <title>{t("home")}</title>
      </Head>
      <section>
        <div className="container-fluid">
          <div className="d-flex align-items-center section-content">
            <div className="animated fadeInLeft">
              <h1>{t("homeTitle")}</h1>
            </div>
            <div>
              <a href="/about-us">
                <img className="main-arrow " src="/static/arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="position-relative marquee-container container-fluid">
          <div className="marquee d-flex justify-content-around">
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
            <span>&#x2022;{t("partner")}</span>
          </div>
        </div>
      </section>

      <section>
        <div className="about-cover mb-5 ">
          <img className="main-arrow w-100" src="/static/home-main.jpg" alt="" />
        </div>
        <div className="container-fluid mt-sm-5 mt-2 ">
          <div className="row section-content align-items-end">
            <div className="col-md-6 col-12">
              <img className="main-img w-100" src="/static/img1.jpg" alt="" />
            </div>
            <div className="col-md-6 col-12 ">
              <div>
                <p>{t("home-text1")}</p>
                <br />
                <p>{t("home-text2")}</p>
              </div>
              <a href="" className="d-flex mt-5" style={{textTransform: 'uppercase'}}>
              {t("partner")}
                <img className="ml-2" src="/static/arrow-black.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

  

      <section className="container-fluid mb-5 main-products">
        <h2>{t("products")}</h2>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-12 position-relative mb-lg-0  mb-5">
            <img className="w-100" src="/static/img2.jpg" alt="" />
            <p>{t("meat")}</p>
            <a
              href="/meat"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              Rosko
              <img
                className="ml-2 object-fit"
                src="/static/arrow-black.png"
                alt=""
              />
            </a>
            <a
              href="/meat"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              Ustdad
              <img
                className="ml-2 object-fit"
                src="/static/arrow-black.png"
                alt=""
              />
            </a>
            <a
              href="/meat"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              Dadim
              <img
                className="ml-2 object-fit"
                src="/static/arrow-black.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 position-relative">
            <img className="w-100" src="/static/img3.png" alt="" />
            <p>{t("makaron")}</p>
            <a
              href="/favelli"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              Favelli
              <img
                className="ml-2 object-fit"
                src="/static/arrow-black.png"
                alt=""
              />
            </a>
            <a
              href="/makara"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              Makara
              <img
                className="ml-2 object-fit"
                src="/static/arrow-black.png"
                alt=""
              />
            </a>
            <a
              href="butterfly"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              Kelebek
              <img
                className="ml-2 object-fit"
                src="/static/arrow-black.png"
                alt=""
              />
            </a>
            <a
              href="/rizzi"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              Rizzi
              <img
                className="ml-2 object-fit"
                src="/static/arrow-black.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 position-relative">
            <img className="w-100" src="/static/img4.png" alt="" />
            <p>{t("flour")}</p>
            <a
              href="/flour"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              Favelli Un
              <img
                className="ml-2 object-fit"
                src="/static/arrow-black.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </section>

      <section className="brands my-5 pt-5 container-fluid">
        <div className="text-center">
          <h4>{t("brands")}</h4>
          <p>{t("brands-text")}</p>
        </div>

        <Slider
          className="align-items-center mt-5 brands"
          ref={(slider) => (pageslider.current = slider)}
          {...settings}
        >
          <img className="ml-2 object-fit " src="/static/brand1.png" alt="" />
          <img className="ml-2 object-fit " src="/static/brand2.png" alt="" />
          <img className="ml-2 object-fit " src="/static/brand3.png" alt="" />
          <img className="ml-2 object-fit " src="/static/brand4.png" alt="" />
          <img className="ml-2 object-fit " src="/static/brand5.png" alt="" />
          <img className="ml-2 object-fit " src="/static/brand6.png" alt="" />
          <img className="ml-2 object-fit " src="/static/brand7.png" alt="" />
          <img className="ml-2 object-fit " src="/static/brand4.png" alt="" />
        </Slider>
      </section>

      <section className="choose-us container-fluid">
        <div className="row ">
          <div className="col-lg-3 col-sm-6 col-12 mb-lg-0 mb-5">
            <h2 style={{textTransform: "uppercase"}}>{t("choooseUs")}</h2>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mb-lg-0 mb-5">
            <img src="/static/choose1.png" alt="" />
            <p>{t("techno")}</p>
            <span>{t("technoText")}</span>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mb-lg-0 mb-5">
            <img src="/static/choose2.png" alt="" />
            <p>{t("exper")}</p>
            <span>{t("experText")}</span>
          </div>
          <div className="col-lg-3 col-sm-6 col-12 mb-lg-0 mb-5">
            <img src="/static/choose3.png" alt="" />
            <p>{t("quality")}</p>
            <span>{t("qualityText")}</span>
          </div>
        </div>
      </section>

      <section className="catalog border-t border-b  container-fluid">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12 border-r py-5 catalog-button">
            <h2>{t("catalog")}</h2>
            <p>{t("catalogText")}</p>
            <button >{t("download")}</button>
          </div>
          <div className="col-lg-9 col-sm-6 col-12 p-0">
            <img className="w-100" src="/static/img5.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
