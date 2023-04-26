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
        <title>Ət məhsulları</title>
      </Head>

      <div className="container-fluid">
        <section className="animated fadeInRightBig row align-items-end meats-main">
          <div className="col-sm-4 col-12">
            <h1> “AVROMAK MMC” şirkətinin ət məhsulları istehsalatı</h1>
            <p className="m-0">
              Kolbasa İstehsal bolumunde Istehsal tam olaraq avtomatlaşdırılıb
              və prosesə daxil olan avadanlıqlarımız Almaniya, İtaliya və
              Polşadan gətirilib. Fəaliyyətimiz halallıq, düzgünlük, ekoloji
              təbiilik, daimi inkişaf, şəffaflıq və məsuliyyətlilik prinsipləri
              üzərində qurulub. Əsas fəlsəfəmiz isə alıcıların istəklərini
              diqqətlə dəyərləndirmək və bu istəklərə uyğun ən yüksək
              keyfiyyətdə məhsul ərsəyə gətirməkdir.
            </p>
          </div>

          <div className="col-sm-8 col-12 pr-0">
            <img className="w-100" src="/static/meat1.jpg" alt="" />
          </div>
        </section>

        <section className="statics mt-5 pt-5 mb-5 pb-5">
        <h2 className="mb-4">Ət məhsulları</h2>
          <div className="row justify-content-between align-items-center border-b pb-5 meats">
            <div className="col-lg-4 col-md-6 col-12 pl-0">
            <img className="w-100" src="/static/meat2.jpg" alt="" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 pl-0 pr-0">
            <img className="w-100" src="/static/meat3.jpg" alt="" />
            </div>
            <div className="col-lg-4 col-md-6 col-12 pr-0">
            <img className="w-100" src="/static/meat4.jpg" alt="" />
            </div>
          </div>
          <div className="row justify-content-between align-items-center border-b pt-2 pb-2">
            <div className="col-lg-4 col-md-6 col-12 pl-0">
              <span>Dadım</span>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pl-0 pr-0">
              <span>Üstdad</span>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pr-0">
              <span>Rosko</span>
            </div>
          </div>
        </section>

        
      </div>
    </>
  );
};

export default Meat;
