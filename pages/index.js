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
              <h1>
                Zövqü və ruhu zənginləşdirən keyfiyyətli məhsul hazırlamaqla
                uğur qazanırıq
              </h1>
            </div>
            <div>
              <a href="/production">
                <img className="main-arrow " src="/static/arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="position-relative marquee-container container-fluid">
          <div className="marquee d-flex justify-content-around">
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
            <span>{t("partner")}</span>
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
                <p>{t("aboutDesc")}</p>
                <br />
                <p>{t("aboutDesc1")}</p>
              </div>
              <a href="" className="d-flex mt-5">
                KEYFİYYƏT RƏMZİMİZDİR
                <img className="ml-2" src="/static/arrow-black.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* <div className="about-cover my-5 d-lg-none d-block">
          <img className="main-img" src="/static/about-cover.jpg" alt="" />
        </div> */}
      </section>

      {/* <section className="statistics border-t border-b">
        <div className="row align-items-center">
          <div className="col-md-6 col-12 border-b border-r pr-lg-0">
            <div className="container-fluid my-4">
              <p>200+</p>
              <span>{t("satisfied")}</span>
            </div>
          </div>
          <div className="col-md-6 col-12 border-b ">
            <div className="container-fluid my-4">
              <p>10</p>
              <span>{t("projectCount")}</span>
            </div>
          </div>
          <div className="col-md-6 col-12 border-b border-r pr-lg-0">
            <div className="container-fluid my-4">
              <p>130</p>
              <span>{t("kind")}</span>
            </div>
          </div>
          <div className="col-md-6 col-12 border-b ">
            <div className="container-fluid my-4">
              <p>6</p>
              <span>{t("productGet")}</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section>
        <div className="my-5">
          <div className="container-fluid my-5">
            <h1 className="why-choose-us">{t("choooseUs")}</h1>
          </div>
        </div>

        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="border-t border-b">
              <div className="container-fluid">
                <Accordion.Header>
                  <div className="d-flex align-items-center">
                    <img
                      src="/static/choose-icon1.svg"
                      className="mt-lg-4"
                      alt=""
                    />
                    <p className="mb-0">{t("quality")}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>{t("qualityText")}</Accordion.Body>
              </div>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="border-b">
              <div className="container-fluid">
                <Accordion.Header>
                  <div className="d-flex align-items-center">
                    <img
                      src="/static/choose-icon2.svg"
                      className="mt-lg-4"
                      alt=""
                    />
                    <p className="mb-0">{t("service")}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>{t("serviceText")}</Accordion.Body>
              </div>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="border-b">
              <div className="container-fluid">
                <Accordion.Header>
                  <div className="d-flex align-items-center">
                    <img
                      src="/static/choose-icon3.svg"
                      className="mt-lg-4"
                      alt=""
                    />
                    <p className="mb-0">{t("develop")}</p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>{t("developText")}</Accordion.Body>
              </div>
            </Accordion.Item>
          </Accordion>
        </div>
      </section> */}

      {/* <section className="products py-lg-0 py-5">
        <div className="container-fluid">
          <div className="d-xl-flex d-block justify-content-between my-xl-5 py-lg-5">
            <div className="mt-xl-5 mt-3 pt-xl-5 mt-3 product-desc">
              <h1>{t("ourProducts")}</h1>
              <p className="mt-4">{t("ourProductsText")}</p>
              <button className="mt-4">
                <a href="/products">{t("more")}</a>
              </button>
            </div>
            <div>
              <div className="mt-5 product-img">
                <a href="/products">
                  <img
                    className="float-xl-right w-100"
                    src="/static/product1.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <p className="border-bottom product-name m-0 py-1">
                  {t("product1")}
                </p>
              </div>
            </div>
          </div>
          <div className="d-lg-flex align-items-center d-block justify-content-between py-2">
            <div>
              <div className="product-img">
                <a href="/products">
                  <img
                    className="float-xl-left px-5 w-100"
                    src="/static/product2.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <p className="border-bottom product-name m-0 py-1">
                  {t("product2")}
                </p>
              </div>
            </div>

            <div>
              <div className="mt-xl-5 product-img border-bottom product3">
                <a href="/products">
                  <img
                    className="float-xl-right px-2 w-100"
                    src="/static/product3.jpg"
                    alt=""
                  />
                </a>
                <p className="product-name  m-0 py-1">{t("product3")}</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="projects">
        <div className="container-fluid">
          <div className=" animated fadeInLeft d-flex justify-content-between align-items-center mt-4 mb-2">
            <h1 className="mb-3 mt-4">{t("projects")}</h1>
            <button>
              <a href="/projects">{t("more")}</a>
            </button>
          </div>
        </div>
        <div className="row animated fadeInRight">
          <div className="col-lg-4  col-12 pr-0 border-1">
            <a href="/project1">
              <img className="w-100" src="/static/project1.jpg" alt="" />
              <div className="px-4 py-3">
                <h3>{t("project1")}</h3>
                <span>{t("location")}</span>
                <p>{t("city")}</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4  col-12 pr-0 pl-0 border-1">
            <a href="/project2">
              <img className="w-100" src="/static/project2.jpg" alt="" />
              <div className="px-4 py-3">
                <h3>{t("project2")}</h3>
                <span>{t("location")}</span>
                <p>{t("city")}</p>
              </div>
            </a>
          </div>
          <div className="col-lg-4  col-12 pl-0 pr-0 border-1">
            <a href="/project3">
              <img className="w-100" src="/static/project3.jpg" alt="" />
              <div className="px-4 py-3">
                <h3>{t("project3")}</h3>
                <span>{t("location")}</span>
                <p>{t("city")}</p>
              </div>
            </a>
          </div>
        </div>
      </section> */}

      <section className="container-fluid mb-5 main-products">
        <h2>{t("products")}</h2>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-12 position-relative">
            <img className="w-100" src="/static/img2.jpg" alt="" />
            <p>Ət məhsulları</p>
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
            <p>Makaron</p>
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
            <p>Un məhsulları</p>
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
          <h4>BRENDLƏR</h4>
          <p>
            “Avromak” MMC-nin əsas məqsədi istehsal və distribüterlik etdiyi
            məhsulların çeşidlərinin və keyfiyyətinin optimallaşdırılmasıdır.
          </p>
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
          <div className="col-lg-3 col-sm-6 col-12">
            <h2>{t("choooseUs")}</h2>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <img src="/static/choose1.png" alt="" />
            <p>texnologİya</p>
            <span>
              Məhsullar tam gigiyenik şəraitdə və innovativ texnologiyalar
              vasitələr ilə istehsal olunur.
            </span>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <img src="/static/choose2.png" alt="" />
            <p>PEŞƏKARLIQ</p>
            <span>
              Mehriban və peşəkar komanda ilə “Avromak” MMC qoyduğu hədəflərə
              çatmaqdadır.
            </span>
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <img src="/static/choose3.png" alt="" />
            <p>KEYFİYYƏT</p>
            <span>
              Məhsullarımız AZS 731-2012 “Halal Qida” sertifkatına layiq
              görülmüşdür.{" "}
            </span>
          </div>
        </div>
      </section>

      <section className="catalog border-t border-b  container-fluid">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12 border-r py-5 catalog-button">
            <h2>Məhsul kataloqu</h2>
            <p>
              Şirkətimiz və məhsullarımız haqqında ətraflı məlumat əldə etmək
              üçün kataloqumuzu yükləyə bilərsiniz.
            </p>
            <button type="">Kataloqu yüklə</button>
          </div>
          <div className="col-lg-9 col-sm-6 col-12 p-0">
            <img className="w-100" src="/static/img5.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
