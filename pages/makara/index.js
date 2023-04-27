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
                <span><strong>Yağlar:</strong>1.3</span><br/>
                <span><strong>Zülallar:</strong>10.7</span><br/>
                <span><strong>Karbohidratlar:</strong>68.4</span><br/>
                <span><strong>Enerji dəyəri (KKAL):</strong>328.1</span>
              </div>
            </div>
          </div>
        </section>

        <section className="favelli ">
          <h2>Makara məhsulları</h2>
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
