import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../i18n.json";

const { locales } = i18nConfig;

const Makara = () => {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Makara</title>
      </Head>

      <div className="container-fluid">
        <section className="flour">
          <h2>Makara</h2>
          <div className="border-t border-b row">
            <div className="col-md-4 col-sm-6 col-12 border-r">
              <img className="py-3 w-100" src="/static/makara1.png" alt="" />
            </div>
            <div className="col-md-8 col-sm-6 col-12 border-r p-0">
              <div className="p-5 border-b">
                <p>{t("favelli1")}:</p>
                <span>{t("makara1")}</span>
              </div>

              <div className="p-5 border-b">
                <p>{t("favelli3")}:</p>
                <span>{t("makara2")}</span>
              </div>

              <div className="p-5 border-b">
                <p>{t("favelli5")}:</p>
                <span>{t("makara3")}</span>
              </div>

              <div className="p-5">
                <p>{t("favelli7")}:</p>
                <span><strong>{t("favelli8")}:</strong> 1.3</span><br/>
                <span><strong>{t("favelli9")}:</strong> 10.7</span><br/>
                <span><strong>{t("favelli10")}:</strong> 68.4</span><br/>
                <span><strong>{t("favelli11")}:</strong> 328.1</span>
              </div>
            </div>
          </div>
        </section>

        <section className="favelli mb-5">
          <h2>Makara {t("Products")}</h2>
          <div className=" row">
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/makara2.png" alt="" />
              <p className="border-t m-0 py-3 px-3">Makara FUSILLI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/makara3.png" alt="" />
              <p className="border-t m-0 py-3 px-3">Makara CONCHIGLIE </p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src="/static/makara4.png" alt="" />
              <p className="border-t m-0 py-3 px-3">Makara RIGATONI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/makara5.png" alt="" />
              <p className="border-t m-0 py-3 px-3">Makara PENNE RIGATE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/makara6.png" alt="" />
              <p className="border-t m-0 py-3 px-3">Makara STORTELLI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src="/static/makara7.png" alt="" />
              <p className="border-t m-0 py-3 px-3">Makara PIPE RIGATE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/makara8.png" alt="" />
              <p className="border-t m-0 py-3 px-3">Makara SPAGHETTI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/makara9.png" alt="" />
              <p className="border-t m-0 py-3 px-3">Makara VERMICELLES</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/makara10.png" alt="" />
              <p className="border-t m-0 py-3 px-3">Makara Bucatini</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Makara;
