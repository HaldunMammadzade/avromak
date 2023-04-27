import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../i18n.json";

const { locales } = i18nConfig;

const Favelli = () => {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>FAVELLİ</title>
      </Head>

      <div className="container-fluid">
        <section className="flour">
          <h2>FAVELLİ</h2>
          <div className="border-t border-b row">
            <div className="col-md-4 col-sm-6 col-12 border-r">
              <img className="py-3 w-100" src="/static/favelli3.png" alt="" />
            </div>
            <div className="col-md-8 col-sm-6 col-12 border-r p-0">
              <div className="p-5 border-b">
                <p>Tərkibi:</p>
                <span>
                Bərk buğda növündən hazırlanmış un və su. Tərkibində konservant,
rəngləyici və digər qida əlavələri yoxdur.
                </span>
              </div>

              <div className="p-5 border-b">
                <p>Saxlanılma şəraiti:</p>
                <span>
                30°C-dən çox olmayan temperaturda, havanın nisbi rütubəti 75%-dən
çox olmayan, təmiz və quru yerdə saxlanılmalıdır. Kənar qoxulu və
ziyanvericilərlə yoluxmuş mühitdən qoruyun.

                </span>
              </div>

              <div className="p-5 border-b">
                <p>Saxlama müddəti:</p>
                <span>24 ay</span>
              </div>

              <div className="p-5">
                <p>100 qr məhsulun qida və enerji dəyərləri:</p>
                <span><strong>Yağlar:</strong>0.8</span><br/>
                <span><strong>Zülallar:</strong>12.0</span><br/>
                <span><strong>Karbohidratlar:</strong>68.5</span><br/>
                <span><strong>Enerji dəyəri (KKAL):</strong>321.2</span>
              </div>
            </div>
          </div>
        </section>

        <section className="favelli ">
          <h2>Favelli məhsulları</h2>
          <div className=" row">
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/favelli4.png" alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ CONCHIGLIE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/favelli5.png" alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ STORTELLI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src="/static/favelli6.png" alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ RIGATONI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/favelli7.png" alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ PIPE RIGATE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/favelli8.png" alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ PENNE RIGATE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src="/static/favelli9.png" alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ FARFALLINE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/favelli10.png" alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ VERMICELLES</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/favelli11.png" alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ FUSILLI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/favelli12.png" alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ FARFALLE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/favelli13.png" alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ SPAGHETTI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/favelli14.png" alt="" />
              <p className="border-t m-0 py-3 px-3">FAVELLİ Bucatini</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Favelli;
