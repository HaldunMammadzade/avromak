import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../i18n.json";

const { locales } = i18nConfig;

const About = () => {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("aboutTitle")}</title>
      </Head>

      <div className="container-fluid">
        <section className="production animated fadeInRightBig">
          <h2 className="border-b pb-4">{t("aboutDesc")}</h2>
          <div className="row">
            <div className="col-lg-4 col-12"></div>

            <div className="col-lg-8 col-12">
              <img className="pt-4 w-100" src="/static/about1.jpg" alt="" />
              <p className="w-100 pr-5 mt-lg-5 mt-3">{t("aboutDesc1")}</p>
              <p className="w-100 pr-5">{t("aboutDesc2")}</p>
            </div>
          </div>
        </section>

        <section className="export overflow-hidden mt-5">
          <div className="row border-t border-b export-1">
            <div className="col-md-4 col-12 py-4">
              <h2>{t("vision")}</h2>

              <p className="mr-0">{t("visionText1")}</p>
              
              <p className="mr-0">{t("visionText2")}</p>
            </div>

            <div className="col-md-8 col-12 py-4 ">
              <img className="w-100" src="/static/about2.jpg" alt="" />
            </div>
          </div>

          <div className="row border-b ">
            <div className="col-md-8 col-12 py-4">
              <img className="w-100" src="/static/about3.jpg" alt="" />
            </div>

            <div className="col-md-4 col-12  py-4">
              <h2>{t("mission")}</h2>

              <p className="mr-0">{t("missionText1")}</p>
              <p className="mr-0">{t("missionText2")}</p>
            </div>
          </div>

          <div className="row  border-b export-1">
            <div className="col-md-4 col-12 py-4">
              <h2>{t("goal")}</h2>

              <p className="mr-0">{t("goalText1")}</p>
              <p className="mr-0">{t("goalText2")}</p>
            </div>

            <div className="col-md-8 col-12 py-4 ">
              <img className="w-100" src="/static/about4.jpg" alt="" />
            </div>
          </div>
        </section>

        <section className="production animated fadeInRightBig pb-4 mb-5 border-b">
          <h2 className="my-5">{t("aboutText")}</h2>
          
          <img className="w-100" src="/static/about5.jpg" alt="" />

          <p className="mt-lg-5 mt-3 ">{t("aboutText1")}</p>
        </section>
      </div>
    </>
  );
};

export default About;
