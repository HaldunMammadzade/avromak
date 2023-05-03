import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../i18n.json";

const { locales } = i18nConfig;

const Meat = () => {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("meat")}</title>
      </Head>

      <div className="container-fluid">
        <section className="animated fadeInRightBig row align-items-end meats-main">
          <div className="col-lg-4 col-12 mb-lg-0 mb-5">
            <h1>{t("meat1")}</h1>
            <p className="mb-0 mt-3">{t("meat2")}</p>
          </div>

          <div className="col-lg-8 col-12 ">
            <img className="w-100" src="/static/meat1.jpg" alt="" />
          </div>
        </section>

        <section className="statics mt-5 pt-5 mb-5 ">
          <h2 className="mb-4">{t("meat")}</h2>
          <div className="row justify-content-between align-items-center  pb-5 meats">
            <div className="col-lg-4 col-md-6 col-12 mb-lg-0 mb-5">
              <img className="w-100" src="/static/meat2.jpg" alt="" />
              <address className="border-b border-t mt-md-4 mt-2 py-3">Dadım</address>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-lg-0 mb-5">
              <img className="w-100" src="/static/meat3.jpg" alt="" />
              <address className="border-b border-t mt-4 py-3">Üstdad</address>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-lg-0 mb-5">
              <img className="w-100" src="/static/meat4.jpg" alt="" />
              <address className="border-b border-t mt-4 py-3">Rosko</address>
            </div>
          </div>
          {/* <div className="row justify-content-between align-items-center border-b pt-2 pb-2">
            <div className="col-lg-4 col-md-6 col-12 pl-0">
              <span>Dadım</span>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pl-0 pr-0">
              <span>Üstdad</span>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pr-0">
              <span>Rosko</span>
            </div>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Meat;
