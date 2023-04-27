import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../i18n.json";

const { locales } = i18nConfig;

const ButterFly = () => {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Kelebek </title>
      </Head>

      <div className="container-fluid">
        <section className="flour">
          <h2>Kelebek </h2>
          <div className="border-t border-b row">
            <div className="col-md-4 col-sm-6 col-12 border-r">
              <img className="py-3 w-100" src="/static/butterfly1.png" alt="" />
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
                <span><strong>Yağlar:</strong>1.0</span><br/>
                <span><strong>Zülallar:</strong>11.3</span><br/>
                <span><strong>Karbohidratlar:</strong>65.9</span><br/>
                <span><strong>Enerji dəyəri (KKAL):</strong>332,2</span>
              </div>
            </div>
          </div>
        </section>

        <section className="favelli ">
          <h2>Kelebek məhsulları</h2>
          <div className=" row">
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/butterfly2.png" alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK MIDYE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/butterfly3.png" alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Spagetti</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src="/static/butterfly4.png" alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Tel Şehriye</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/butterfly5.png" alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Bukle</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/butterfly6.png" alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Boru</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src="/static/butterfly7.png" alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Burgu</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/butterfly8.png" alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Kelebek</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/butterfly9.png" alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Fiyonk</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/butterfly10.png" alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Kalem</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/butterfly11.png" alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Mantı</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/butterfly12.png" alt="" />
              <p className="border-t m-0 py-3 px-3">KELEBEK Bucatini</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ButterFly;
