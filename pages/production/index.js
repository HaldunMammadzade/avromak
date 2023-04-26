import React from "react";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../i18n.json";

const { locales } = i18nConfig;

const Production = () => {
  const { t, lang } = useTranslation("common");

  return (
    <>
      <Head>
        <title>İstehsalat</title>
      </Head>

      <div className="container-fluid">
        <section className="production animated fadeInRightBig">
          <h2 className="border-b pb-4">
            Avromak şirketi yarandigi gunden keyfiyyetli mehsul ve mehsullarin
            vaxtinda unvana chatdirilma prinsipleri esasinda hem yerli hem de
            xarici bazarda genish nufuz qazanmishdir.
          </h2>
          <img className="pt-4" src="/static/img6.jpg" alt="" />
          <p className="mt-4">
            Avromak MMC olaraq, qurulduğumuz gündən gücünü torpaqdan alan kənd
            təsərrüfatı məhsullarımızla fəaliyyət göstəririk.
            İnvestisiyalarımızı edərkən, biz bunu ekoloji cəhətdən davamlı,
            sosial cəhətdən məsuliyyətli və iqtisadi artımı dəstəkləyən bir
            strategiya ilə edirik. Sahelerimizden elde olunan bugda mehsullari
            Fabrikimizde uyudulerek onlardan Un ve Makaron yeyinti mehsullari
            elde olunur. Un ve Makaron Mehsularimizin erseye getirilmesinde
            yuksek ixtisasli emekdashlarimizin boyuk emeyi vardir. Istehsalat
            avadanliqlari butunlukle Italiya istehsalidir. Qloballaşan kənd
            təsərrüfatı siyasəti taxıl istehsalına marağı artırır və kənd
            təsərrüfatı istehsalında monokulturaya önəm verir. İstehsalın
            dəyişməsi ilə yanaşı, gəlir səviyyəsinin dəyişməsi və sürətli
            urbanizasiya kənd təsərrüfatı məhsullarına olan tələbata qidalanma
            vərdişlərindən tutmuş ərzaq təminatına qədər fərqli ölçülər əlavə
            edir.
          </p>
        </section>

        <section className="statics ">
          <div className="row justify-content-between align-items-center border-b pb-2">
            <div className="col-lg-6 col-12">
              <p className="m-0">12000 ha</p>
            </div>
            <div className="col-lg-6 col-12">
              <p className="m-0">2500 m²</p>
            </div>
          </div>
          <div className="row justify-content-between align-items-center border-b pt-2 pb-2">
            <div className="col-lg-6 col-12">
              <span>ƏKİN SAHƏSİ</span>
            </div>
            <div className="col-lg-6 col-12">
              <span>İSTEHSAL SAHƏSİ</span>
            </div>
          </div>
        </section>

        <section className="mb-5 main-products">
          <h2>{t("products")}</h2>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12 position-relative">
              <img className="w-100" src="/static/img2.jpg" alt="" />
              <p>Ət məhsulları</p>
              <a
                href="/meat"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Rosko
                <img
                  className="ml-2 object-fit"
                  src="/static/arrow-black.png"
                  alt=""
                />
              </a>
              <a
                href="/meat"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Ustdad
                <img
                  className="ml-2 object-fit"
                  src="/static/arrow-black.png"
                  alt=""
                />
              </a>
              <a
                href="/meat"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Dadim
                <img
                  className="ml-2 object-fit"
                  src="/static/arrow-black.png"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 position-relative">
              <img className="w-100" src="/static/img3.png" alt="" />
              <p>Makaron</p>
              <a
                href="/favelli"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Favelli
                <img
                  className="ml-2 object-fit"
                  src="/static/arrow-black.png"
                  alt=""
                />
              </a>
              <a
                href="/rizzi"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Makara
                <img
                  className="ml-2 object-fit"
                  src="/static/arrow-black.png"
                  alt=""
                />
              </a>
              <a
                href="/butterfly"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Kelebek
                <img
                  className="ml-2 object-fit"
                  src="/static/arrow-black.png"
                  alt=""
                />
              </a>
              <a
                href=""
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Rizzi
                <img
                  className="ml-2 object-fit"
                  src="/static/arrow-black.png"
                  alt=""
                />
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 position-relative">
              <img className="w-100" src="/static/img4.png" alt="" />
              <p>Un məhsulları</p>
              <a
                href="/flour"
                className="d-flex justify-content-between border-b mt-3 py-2"
              >
                Favelli Un
                <img
                  className="ml-2 object-fit"
                  src="/static/arrow-black.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-5 private-label">
          <h2>Private label</h2>
          <div className="private-label-cover row align-items-center w-100 m-0">
            <div className="col-lg-3 col-sm-6 col-12 p-0">
              <img
                
                src="/static/label1.png"
                alt=""
              />
            </div>
            <div className="col-lg-5 col-sm-6 col-12 p-0">
              <img
                
                src="/static/label2.png"
                alt=""
              />
            </div>
            <div className="col-lg-4 col-sm-6 col-12 p-0">
              <img
               
                src="/static/label3.png"
                alt=""
              />
            </div>
          </div>
          <p className="mt-5">Keyfiyyətli, sağlam, ləzzətli makaron və unlarımız müştərilərimizin tələb etdiyi standartlara və spesifikasiyalara uyğun hazırlanır və “Avromak” MMC-nin zəmanəti ilə peşəkar işçilərimiz tərəfindən istehsal olunur. Biz Private Label hazırlamaqda böyük təcrübəyə malikik. Öz markanız varsa, markanız altında istənilən paket quruluşunu təmin edə bilərik. Razılaşmaya görə brendiniz olmasa belə, tələblərinizə uyğun olaraq öz brendinizi hazırlaya bilərik. Private Label layihəsi ilə bağlı istənilən vaxt bizimlə əlaqə saxlaya bilərsiniz. Təchizatçı olaraq biz hər zaman şəxsi etiketinizi hazırlamağa hazırıq.</p>
        </section>
      </div>
    </>
  );
};

export default Production;
