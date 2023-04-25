import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../i18n.json";

const { locales } = i18nConfig;

const Rizzi = () => {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Pasta di Rizzi </title>
      </Head>

      <div className="container-fluid">
        <section className="flour">
          <h2>Pasta di Rizzi </h2>
          <div className="border-t border-b row">
            <div className="col-md-4 col-sm-6 col-12 border-r">
              <img className="py-3 w-100" src="/static/rizzi1.jpg" alt="" />
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
          <h2>Pasta di Rizzi məhsulları</h2>
          <div className=" row">
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/rizzi2.png" alt="" />
              <p className="border-t m-0 py-3 px-3">Pasta di Rizzi CONCHIGLIE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/rizzi3.png" alt="" />
              <p className="border-t m-0 py-3 px-3">PASTA DI RIZZI FARFALLE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src="/static/rizzi4.png" alt="" />
              <p className="border-t m-0 py-3 px-3">PASTA DI RIZZI PENNE RIGATE</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/rizzi5.png" alt="" />
              <p className="border-t m-0 py-3 px-3">PASTA DI RIZZI RIGATONI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-r border-t border-b">
              <img className="px-4 w-100" src="/static/rizzi6.png" alt="" />
              <p className="border-t m-0 py-3 px-3">PASTA DI RIZZI SPAGHETTI</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b">
              <img className="px-4 w-100" src="/static/rizzi7.png" alt="" />
              <p className="border-t m-0 py-3 px-3">PASTA DI RIZZI VERMICELLES</p>
            </div>
            <div className="col-md-4 col-sm-6 col-12  p-0 border-t border-b border-r">
              <img className="px-4 w-100" src="/static/rizzi8.png" alt="" />
              <p className="border-t m-0 py-3 px-3">PASTA DI RIZZI  FUSILLI</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Rizzi;
