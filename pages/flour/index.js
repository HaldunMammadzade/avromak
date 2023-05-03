import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../i18n.json";

const { locales } = i18nConfig;

const Flour = () => {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Un məhsulları</title>
      </Head>

      <div className="container-fluid">
        <section className="flour">
          <h2>Un məhsulları</h2>
          <div className="border-t border-b row">
            <div className="col-md-4 col-sm-6 col-12 border-r">
              <img className="py-3 w-100" src="/static/flour1.jpg" alt="" />
            </div>
            <div className="col-md-8 col-sm-6 col-12 border-r p-0">
              <div className="p-5 border-b">
                <p>Tərkibi:</p>
                <span>
                  Bərk buğda növündən hazırlanmış un. Tərkibində konservant,
                  rəngləyici və digər qida əlavələri yoxdur.
                </span>
              </div>

              <div className="p-5 border-b">
                <p>Saxlanılma şəraiti:</p>
                <span>
                  30°C-dən çox olmayan temperaturda, havanın nisbi rütubəti
                  75%-dən çox olmayan, təmiz və quru yerdə saxlanılmalıdır.
                  Kənar qoxulu və ziyanvericilərlə yoluxmuş mühitdən qoruyun.
                </span>
              </div>

              <div className="p-5 ">
                <p>Un haqqında:</p>
                <span>
                  Keyfiyyətə və ardıcıllığa üstünlük verərək, biz məhsullarımızı
                  ən yaxşı inqrediyentlərdən və ən yaxşı təcrübələrdən istifadə
                  edərək istehsal edirik. Məhsullarımız sənaye standartlarına
                  cavab verən xüsusi bir müəssisədə istehsal olunur. Biz
                  məhsullarımızı mütəmadi olaraq keyfiyyət üçün sınaqdan
                  keçiririk və üstün dadımız və keyfiyyətimiz ilə fəxr edirik.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="favelli mb-5">
          <h2>Favelli un məhsulları</h2>
          <div className=" row">
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/favelli1.png" alt="" />
              <p className="border-t m-0 py-3 px-3">Favelli Un</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/favelli2.png" alt="" />
              <p className="border-t m-0 py-3 px-3">Favelli Un</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Flour;
