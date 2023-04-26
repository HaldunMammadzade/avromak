import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../i18n.json";

const { locales } = i18nConfig;

const Retail = () => {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Retail</title>
      </Head>

      <div className="container-fluid mb-sm-5 mb-3 pb-sm-5 mb-3">
        <section className="animated fadeInRightBig row align-items-end meats-main">
          <div className="col-sm-4 col-12">
            <h1>“AVROMAK MMC” şirkətinin Rublyovski mağazalar şəbəkəsi</h1>
            <p className="m-0">
              Şirkətin fəaliyyəti, öz istehsal sahələrinin, həmçinin
              distribüterlik etdiyi şirkətlərin məhsullarının satışını təmin
              etməyə əsaslanır. Çeşidli ət və ət məhsulları, un və un
              məhsullarının istehsalı, pərakəndə və topdan satışı ilə məşğuldur.
            </p>
          </div>

          <div className="col-sm-8 col-12 pr-0">
            <img className="w-100" src="/static/retail1.jpg" alt="" />
          </div>
        </section>
      </div>

      <section className="choose-us container-fluid ">
        <div className="row rublevski">
          <div className="col-sm-6 col-12 d-flex align-items-center justify-content-between rublevski-logo">
            <img
              className="object-fit mr-4"
              src="/static/rublevski.png"
              alt=""
            />
            <h2 className="m-0">RUBLYOVSKİ KATALOQU </h2>
          </div>

          <div className="col-sm-6 col-12 d-flex flex-column rublevski-content">
            <span>
              “RUBLYOVSKİ” haqqında ətraflı məlumat əldə etmək üçün kataloqu
              yükləyə bilərsiniz.
            </span>
            <div className="mt-3">
              <button>Kataloqu yüklə</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5 main-products container-fluid">
        <h2>Mağazalarımız</h2>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-12 position-relative">
            <img className="w-100" src="/static/retail2.jpg" alt="" />

            <a
              href="/meat"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              62 Bakıxanov küçəsi, 7/24
            </a>

            <div className="border-b mt-3 py-2 w-100 branch-content">
              {" "}
              Əlaqə : +994 51 229 97 41
            </div>

            <div className="border-b mt-3 py-2 w-100 branch-content">
              Email : rublyovskiyazerbaijan@gmail.com
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 position-relative">
            <img className="w-100" src="/static/retail3.jpg" alt="" />

            <a
              href="/meat"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              Miresedulla Mirqasimov küç 15
            </a>

            <div className="border-b mt-3 py-2 w-100 branch-content">
              Əlaqə : +994 51 229 97 41
            </div>

            <div className="border-b mt-3 py-2 w-100 branch-content">
            Email : rublyovskiyazerbaijan@gmail.com

            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12 position-relative">
            <img className="w-100" src="/static/retail4.jpg" alt="" />

            <a
              href="/meat"
              className="d-flex justify-content-between border-b mt-3 py-2"
            >
              Badamdar şosesi (Bazarstore ilə üzbəüz)

            </a>

            <div className="border-b mt-3 py-2 w-100 branch-content">
              {" "}
              Əlaqə : +994 51 229 97 41
 
            </div>

            <div className="border-b mt-3 py-2 w-100 branch-content">
            Email : rublyovskiyazerbaijan@gmail.com

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Retail;
